// Load additional modules. These are not required.  
// require('nerdamer/Algebra'); 
// require('nerdamer/Calculus'); 
// require('nerdamer/Solve'); 
// require('nerdamer/Extra');

//Do the above for node js browser env
let cstring="";
// let buttons=document.querySelectorAll('.p1');
let buttons=document.getElementsByClassName('p1');
// console.log(buttons);
let buttonsArray = Array.from(buttons);

buttonsArray.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='AC'){
            // cstring=""
            // document.getElementsByClassName('display')[0].innerHTML=cstring
            location.reload()
        }
        else if(e.target.id==='p35'){
            //backspace
            cstring=cstring.slice(0,-1)
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.innerHTML==='='){
            if(cstring.includes('solve')){
                cstring=cstring.replace("solve","")
                if(cstring.includes('y')){
                    cstring = nerdamer.solveEquations(cstring,'y');
                    document.getElementsByClassName('display')[0].innerHTML=cstring
                }
                else{
                    cstring = nerdamer.solveEquations(cstring,'x');
                    document.getElementsByClassName('display')[0].innerHTML=cstring
                }
            }
            if(cstring.includes('expand')){
                cstring=cstring.replace("expand","")
                cstring= nerdamer.expand(cstring);
                document.getElementsByClassName('display')[0].innerHTML=cstring
            }
            if(cstring.includes('∫')){
                cstring=cstring.replace("∫","integrate")
                cstring= nerdamer(cstring);
                document.getElementsByClassName('display')[0].innerHTML=cstring
            }
            if(cstring.includes('d/dx')){
                cstring=cstring.replace("d/dx","diff")
                cstring= nerdamer(cstring);
                document.getElementsByClassName('display')[0].innerHTML=cstring
            }

            else{
                cstring=cstring.replace("^","**")
                cstring=cstring.replace("ln","Math.log")
                
                cstring=cstring.replace("π","Math.PI")
                cstring=cstring.replace("sin","Math.sin")
                cstring=cstring.replace("cos","Math.cos")
                cstring=cstring.replace("tan","Math.tan")
                cstring=cstring.replace("asin","Math.asin")
                cstring=cstring.replace("asin","Math.acos")
                cstring=cstring.replace("asin","Math.atan")
                cstring=cstring.replace("e","2.71828")
                cstring=eval(cstring)
                document.getElementsByClassName('display')[0].innerHTML=cstring   
            }
        }
        else if(e.target.id==='p32'){
            cstring=cstring+"/"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id==='p33'){
            cstring=cstring+"-"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id==='p31'){
            cstring=cstring+"*"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=='p45'){
            document.getElementsByClassName('display')[0].innerHTML=factorial(parseInt(eval(cstring)))
        }
        else if(e.target.id=='p36'){
            cstring=cstring+"e"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=='p37'){
            x=Math.PI
            cstring=cstring+"π"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=='p16'){
            cstring+="ln"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=='p11'){
            x=prompt("Enter the base value:")
            document.getElementsByClassName('display')[0].innerHTML=getBaseLog(x,parseInt(cstring))
        }
        else if(e.target.id=='p20'){
            cstring=cstring+"y"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id==="p21"){
            cstring=cstring+"^2"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p26"){
            cstring=cstring+"^"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p12"){
            cstring=cstring+"^(1/2)"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p13"){
            x=prompt("Enter the x value:")
            cstring = cstring + "^(1/"+parseInt(x)+")"
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p28"){
            cstring=cstring+'solve'
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p30"){
            cstring=cstring+"x";
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else if(e.target.id=="p25"){
            cstring=cstring+"expand";
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
        else{
            cstring=cstring+e.target.innerHTML;
            document.getElementsByClassName('display')[0].innerHTML=cstring
        }
    })
}
)
function factorial(n)
{
    let fact=1
    if (n==0 || n==1){
        return 1
    }
    else if(n>1){
        for(let i=n;i>=1;i--){
            fact=fact*i
        }
        return fact 
    }
    else{
        return "Enter +ve number"
    }
}
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
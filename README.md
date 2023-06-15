# Scientific-Calculator
A scientific calculator which performs basic arithmetic and trignometric computation along with :
* integration and differentiation operation
* expand and solve equation 
## Overview
Basic arithmetic calculations including trignometry and logarithms can be solved with inbuilt `eval()` function.<br>But, in order to perform integration and differentiation operation or to expand and solve equation we need to use [nerdamer](https://github.com/jiggzson/nerdamer) package.<br><br>
## Getting started
* Clone the [nerdamer](https://github.com/jiggzson/nerdamer) repository or clone this repo.<br>
* If you have cloned this repo there is no need to install additional modules.<br>
* If you have cloned [nerdamer](https://github.com/jiggzson/nerdamer) repository then copy these files into your present working directory.<br>
  - `nerdamer.core.js`<br>
  - `all.min.js`
  - `Algebra.js`  (if needed)
  - `Calculus.js` (if needed)
  - `Extra.js`    (if needed)
* now refer to [nerdamer](https://github.com/jiggzson/nerdamer) repo to get the script tag for your html.
  
***The other method is to set up a node env.***
* install nerdamer by running these `npm install nerdamer`
* install webpack and loaders with `npm install webpack webpack-cli babel-loader @babel/core @babel/preset-env` in present working directory.
* Add a `webpack.config.js` file.
* Add require statements in your Javascript file (refer [nerdamer](https://github.com/jiggzson/nerdamer)) .
* Now run this `npx webpack --config webpack.config.js` to bundle code.
* Add this to your html file `<script src="bundle.js"></script>`

  



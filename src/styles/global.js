import { createGlobalStyle } from "styled-components";

import "react-toastify/dist/ReactToastify.css";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #0186FF;
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  div#root {
    max-width: 100vw;
    margin: 0 auto;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  .mt-20{
    margin-top: 60px;
  }

  .multi-colors{
    border-radius: 2px 2px 0 0;
    -moz-border-radius-topright: 2px;
    -moz-border-radius-topleft: 2px;
    height: 5px;
    width: 100%;
    background: #fcd000;
    background-image: -webkit-gradient(linear,left top,right top,from(#ffff4a),color-stop(4%,#fcd000),color-stop(8%,#ffc112),color-stop(11%,#ffc112),color-stop(16%,#ff8a00),color-stop(22%,#ff5f5f),color-stop(28%,#ff253a),color-stop(37%,#ff37a8),color-stop(49%,#c739ff),color-stop(56%,#a400e1),color-stop(72%,#2eceff),color-stop(80%,#0086ff),color-stop(94%,#72f772),to(#00d604));
    background-image: -webkit-linear-gradient(left,#ffff4a 0,#fcd000 4%,#ffc112 8%,#ffc112 11%,#ff8a00 16%,#ff5f5f 22%,#ff253a 28%,#ff37a8 37%,#c739ff 49%,#a400e1 56%,#2eceff 72%,#0086ff 80%,#72f772 94%,#00d604);
    background-image: -o-linear-gradient(left,#ffff4a 0,#fcd000 4%,#ffc112 8%,#ffc112 11%,#ff8a00 16%,#ff5f5f 22%,#ff253a 28%,#ff37a8 37%,#c739ff 49%,#a400e1 56%,#2eceff 72%,#0086ff 80%,#72f772 94%,#00d604);
    background-image: linear-gradient(to right,#ffff4a 0,#fcd000 4%,#ffc112 8%,#ffc112 11%,#ff8a00 16%,#ff5f5f 22%,#ff253a 28%,#ff37a8 37%,#c739ff 49%,#a400e1 56%,#2eceff 72%,#0086ff 80%,#72f772 94%,#00d604);
  }

`;

export default GlobalStyle;

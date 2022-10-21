import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  font-size: 16px;
  
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Nunito",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #333333;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  h1,
  h2,
  h3 {
    font-family: "Nunito",-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 500;
  }

  h2{
    font-size: 1.8rem;
  }

  h3{ font-size: 1.2rem}

  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 576px){
    h1{
      font-size: 1.6rem;
    }
    h2{
      font-size: 1.4rem;
    }
  }

  img {
    max-width: 100%;
  }

  .sundeditor {
    overflow: hidden !important; 
    font-family: "Nunito" !important;
  }
  .sundeditor * {
    font-family: "Nunito" !important;
  }
  .sun-editor .se-wrapper{
    font-family: "Nunito" !important;
  }
  .se-dialog-content{
    font-family: "Nunito" !important;
  }
  .se-wrapper-inner, .se-wrapper-wysiwyg, .sun-editor-editable{
    font-family: "Nunito" !important;
  }
  .sun-editor .se-form-group > div {position:relative;}

  .custom-se-form-group{
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    padding: 10px !important;
    padding-bottom: 2rem !important;
  } 

  .custom-emoji {
    width: 1.5rem !important;
    height: 1.5rem !important;
    display: inline-block !important;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .se-btn .custom-emoji {
    width: 1.8rem !important;
    height: 1.8rem !important;
  }
  .emojispan{
    display: flex !important;
    align-items: center !important;
    padding: 0 5px !important;
    img{
      margin-right: 5px !important;
    }
  }

  .emoji-btn{
    padding: 5px;
    width: auto !important; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .derp-emoji-btn{
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
  .__se__dotted{
    border-style: dotted;
  }
  .__se__dashed{
    border-style: dashed;
  }
  .se-menu-container.se-submenu.se-list-layer{
    max-width: 450px !important;
  }
  .se-btn.se-tooltip{
    border: none !important;
  }
  #brickboard_lever{
    transition: all 0.4s cubic-bezier(.25,.1,0,1.03);
    transform-origin: 20% 58%;
  }
  .lever-pulled-down{
    transform: rotate(-80deg);
  }
  #left_eye, #right_eye{
    transition: all 0.3s ease;
  }
  .expanded_eye_left{
    transform-origin: 40% 40%;
    transform: scale(1.4);
  }
  .expanded_eye_right{
    transform-origin: 65% 35%;
    transform: scale(1.4);
  }
  .quote{
    padding: 10px;
    background-color: #e7e7e7;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

export default GlobalStyles;

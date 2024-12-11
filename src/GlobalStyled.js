import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const designFont = {
  styleFont: "HeriofLightRegular",
};

export const GlobalStyled = createGlobalStyle`
${reset}

*{
    box-sizing:border-box;
}

body{
    word-break:keep-all;
    letter-spacing: 1px;
    font-family: "Noto Sans KR";
}

img{
        width:100%;
        display:block;
    }

    a{
        text-decoration:none;
        display:block;
        color:white;
    }


`;

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

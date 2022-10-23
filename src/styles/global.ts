import { createGlobalStyle } from "styled-components";

<<<<<<< HEAD
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme["gray-900"]};
    color: #fff;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

=======
export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

body {
    background-color: #333;
    color: #fff;
}

>>>>>>> 3e98469ab2a57eb847f848e7bdf61007fa8cd8f8
`;

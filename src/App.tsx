import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
<<<<<<< HEAD
import { GlobalStyle } from "./styles/global";
=======
import { GlobalStyles } from "./styles/global";
>>>>>>> 3e98469ab2a57eb847f848e7bdf61007fa8cd8f8
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
<<<<<<< HEAD

      <GlobalStyle />
=======
      <GlobalStyles />
>>>>>>> 3e98469ab2a57eb847f848e7bdf61007fa8cd8f8
    </ThemeProvider>
  );
}

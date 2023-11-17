import { ThemeProvider } from "styled-components";
import ProductReviewCard from "./components/product_review_card/ProductReviewCard";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ProductReviewCard />
    </ThemeProvider>
  );
}

export default App;

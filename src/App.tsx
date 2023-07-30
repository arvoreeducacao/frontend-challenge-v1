import Footer from "./components/footer";
import Header from "./components/header";
import Shelves from "./components/shelves";
import { footerAllrightsReserved, helpLink, privacyAndPolicy, termsAndUsage } from "./constants";

function App() {
  return (
    <>
      <Header />
      {/* <Shelves /> */}
      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
//import SettingPage from "./components/settingPage";
//import EditPage from "./components/EditPage";
function App() {
  return (
    <>
      <NavBar />
      {/*<EditPage />*/}
      {/*<SettingPage />*/}
      <MainSection />
      <Footer />
    </>
  );
}

export default App;

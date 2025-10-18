import "./App.css";
import AnimationSequesnce from "./components/AnimationSequesnce";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar";
import AnimatedTextComp from "./pages/AnimatedText";
import Layout from "./pages/Layout-cards";
import CardContent from "./pages/CardContent";
import DottedPage from "./pages/DottedPage";
import MotionHooks from "./pages/MotionHooks";
import VantaGlobe from "./components/Globe";
import ThreeGlobe from "three-globe";
import ThreeGlobeWrapper from "./components/ThreeGlobe";
import GlobeComponent from "./components/NewGlobe";

function App() {
  return (
    <div>
      {/* <DottedPage/>
      <CardContent/>
      <MotionHooks />
      <Layout/>
      <Navbar/>
      <AnimatedTextComp/>
      <AnimationSequesnce/> */}
      <VantaGlobe/>
      <ThreeGlobeWrapper/>
      <GlobeComponent/>
    </div>
  )
}

export default App;

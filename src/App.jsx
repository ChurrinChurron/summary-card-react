import "./App.css";
import Girl from "./assets/girl.jpg";
import Plane from "./assets/plane.svg";
import Card from "./components/Card";

function App() {

  return (
    <>
      <Card 
        img={Girl}
        title="Order Summary"
        desc="Now you can access our services from anywhere in the world 🌐!"
        planIcon={Plane}
        planName="Anual Plan"
        planPrice="39.99"/>
    </>
  )
}

export default App

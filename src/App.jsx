import ZooAnimals from "./components/zooAnimals";
import Navbar from "./layout/Navbar"
import "./App.css";

function App() {
  const zooAnimals = ["lion", "giraffe", "elephant","meercat"];
  return (
    <div className="app">
      <Navbar/>
      <ZooAnimals zooAnimals={zooAnimals} />
    </div>
  );
}

export default App;

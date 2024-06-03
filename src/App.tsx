import "./App.css";
import Navbar from "@/components/navbar";
import InputCard from "@/components/InputCard";

function App() {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="m-3">
      <InputCard />
      </div>
    </div>
  );  
}

export default App;

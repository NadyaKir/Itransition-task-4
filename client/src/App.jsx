import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

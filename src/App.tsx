import MainContent from "./pages/HomePage";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import { RecentWorks } from "./pages/RecentWorks";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <RecentWorks />
    </>
  );
}

export default App;

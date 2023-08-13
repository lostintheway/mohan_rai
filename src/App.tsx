import MainContent from "./pages/HomePage";
import "./App.css";
import "./pages/RecentWorks/RecentWorks.css";
import Navbar from "./components/ui/Navbar";
import { RecentWorks } from "./pages/RecentWorks";
import CardImage from "./components/ui/CardImage";
import Mahanagar from "../public/mahanagar.jpg";
import Contact from "./pages/Contact";

function App() {
  return (
    <div id="my-app">
      <Navbar />
      <div className="main">
        <MainContent />
        <RecentWorks />
        <div className="short-stories">
          <h3>SHORT STORIES</h3>
          Manjushree Thapa’s short stories have appeared in Manoa, Tampa Review,
          The Journal, Artful Dodge, Bellingham Review, Other Voices, Himal
          South Asian and Studies in Nepali History and Society.
        </div>
        <div className="recent-works-wrapper">
          <h2>Nonfiction</h2>
          <div className="recent-works">
            <CardImage
              imageUrl={Mahanagar}
              title="Beautiful Sunset"
              description="A stunning view of the sunset over the mountains."
            />
            <CardImage
              imageUrl={Mahanagar}
              title="City Skyline"
              description="An impressive city skyline at night."
            />
            <CardImage
              imageUrl={Mahanagar}
              title="City Skyline"
              description="An impressive city skyline at night."
            />
            <CardImage
              imageUrl={Mahanagar}
              title="City Skyline"
              description="An impressive city skyline at night."
            />
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

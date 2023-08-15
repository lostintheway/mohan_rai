import MainContent from "./pages/HomePage";
import "./App.css";
import "./pages/RecentWorks/RecentWorks.css";
import "./assets/css/slide-up.css";
import "./assets/css/scroll-to-top.css";
import Navbar from "./components/ui/Navbar";
import { RecentWorks } from "./pages/RecentWorks";
import CardImage from "./components/ui/CardImage";
import Mahanagar from "../public/mahanagar.jpg";
import Contact from "./pages/Contact";
import { Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import UpIcon from "./assets/icons/up.svg";

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // return (
  //   <button
  //     className={`scroll-to-top-button ${showButton ? 'visible' : ''}`}
  //     onClick={scrollToTop}
  //   >
  //     Scroll to Top
  //   </button>
  // );

  return (
    <div id="my-app">
      <button
        className={`scroll-to-top-button ${showButton ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img src={UpIcon} alt="up icon" width={20} height={"auto"} />
      </button>
      <Navbar />
      <div className="main" id="home">
        <MainContent />
        <RecentWorks />
        <div className="short-stories">
          <Slide direction="right">
            <h3>SHORT STORIES</h3>
            <p>
              Manjushree Thapa's short stories have appeared in Manoa, Tampa
              Review, The Journal, Artful Dodge, Bellingham Review, Other
              Voices, Himal South Asian and Studies in Nepali History and
              Society.
            </p>
          </Slide>
        </div>
        <div className="recent-works-wrapper" id="nonfiction">
          <h2>Non-Fiction</h2>
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

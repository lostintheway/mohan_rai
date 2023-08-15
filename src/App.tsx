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
import { useState, useEffect, useRef } from "react";
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
  const slideUpRef = useRef(null);
  const slideUpRef2 = useRef(null);

  useEffect(() => {
    const element = slideUpRef.current;
    const element2 = slideUpRef2.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          } else {
            entry.target.classList.remove("slide-up"); // Reset animation
          }
        });
      },
      { threshold: 0.5 }
    );

    if (element) {
      observer.observe(element);
    }

    if (element2) {
      observer.observe(element2);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      if (element2) {
        observer.unobserve(element2);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="my-app" id="home">
      <button
        className={`scroll-to-top-button ${showButton ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img src={UpIcon} alt="up icon" width={20} height={"auto"} />
      </button>
      <Navbar />
      <div className="main" id="home">
        <MainContent slideRef={slideUpRef} />
        <RecentWorks />
        <div className="short-stories">
          <h3>SHORT STORIES</h3>
          <p>
            Manjushree Thapa's short stories have appeared in Manoa, Tampa
            Review, The Journal, Artful Dodge, Bellingham Review, Other Voices,
            Himal South Asian and Studies in Nepali History and Society.
          </p>
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
          <Contact slideRef={slideUpRef2} />
        </div>
      </div>
    </div>
  );
}

export default App;

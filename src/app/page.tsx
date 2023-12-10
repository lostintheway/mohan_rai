"use client";
import "./App.css";
import "./index.css";
import "../assets/css/RecentWorks.css";
import "../assets/css/slide-up.css";
import "../assets/css/scroll-to-top.css";
import { useState, useEffect, useRef } from "react";
import UpIcon from "../assets/icons/up.svg";
import MainContent from "@/components/MainContent";
import Image from "next/image";
import CardImage from "@/components/CardImage";
import NavBar from "@/components/NavBar/NavBar";
import Contact from "@/components/Contact";
import { RecentWorks } from "@/components/RecentWorks/RecentWorks";

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
        <Image src={UpIcon} alt="up icon" width={20} height={20} />
      </button>
      <NavBar />
      <div className="main" id="home">
        <MainContent slideRef={slideUpRef} />
        <RecentWorks />
        <div className="short-stories">
          <h3>SHORT STORIES</h3>
          <p>
            Manjushree s short stories have appeared in Manoa, Tampa Review, The
            Journal, Artful Dodge, Bellingham Review, Other Voices, Himal South
            Asian and Studies in Nepali History and Society.
          </p>
        </div>
        <div className="recent-works-wrapper" id="nonfiction">
          <h2>Non-Fiction</h2>
          <div className="recent-works">
            <CardImage
              imageUrl={
                "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
              }
              title="Beautiful Sunset"
              description="A stunning view of the sunset over the mountains."
            />
            <CardImage
              imageUrl={
                "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
              }
              title="City Skyline"
              description="An impressive city skyline at night."
            />
            <CardImage
              imageUrl={
                "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
              }
              title="City Skyline"
              description="An impressive city skyline at night."
            />
            <CardImage
              imageUrl={
                "https://pub-0198217282574dada06155209c57c678.r2.dev/mahanagar.jpg"
              }
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

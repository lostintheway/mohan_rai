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
import NavBar from "@/components/NavBar/NavBar";
import Contact from "@/components/Contact/Contact";
import { RecentWorks } from "@/components/RecentWorks/RecentWorks";
import AboutMe from "@/components/ui/AboutMe";
import { Publications } from "@/components/ui/Publications";
import { FilmographyDetails } from "@/components/ui/FilmographyDetails";
import { PublicationDetails } from "@/components/ui/PublicationDetails";
import { Awards } from "@/components/ui/Awards";

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

        {/* <FilmographyDetails /> */}
        <div className="recent-works-wrapper" id="publications">
          <Publications />
        </div>
        {/* <PublicationDetails /> */}
        <div className="recent-works-wrapper" id="awards">
          <Awards />
        </div>
        <div className="recent-works-wrapper" id="aboutme">
          <AboutMe />
        </div>
        <Contact slideRef={slideUpRef2} />
      </div>
    </div>
  );
}

export default App;

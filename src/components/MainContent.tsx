import "./MainContent.css";
import Mohan from "../../../public/mohan.png";
import Image from "next/image";

type Props = {
  slideRef: React.MutableRefObject<null>;
};

const MainContent = ({ slideRef }: Props) => {
  return (
    <div className="main-wrapper">
      <div className={"main-content"}>
        <div ref={slideRef} className="slide-up-container">
          <h1 style={{ fontSize: 40, marginBottom: 0, fontWeight: 600 }}>
            Mohan Rai
          </h1>
          <h4 style={{ color: "grey", marginTop: 5 }}>
            Mohan Rai, Filmmaker, Film Educator and Activist
          </h4>
          <p>
            I dedicate my life to filmmaking, helping young filmmakers to learn
            the craft of filmmaking, educating people about cinema, and
            celebrating the magic of cinema.
          </p>
        </div>
        {/* <div className="latest-work">
          <h4>Latest Work:</h4>
        </div> */}
      </div>
      <section className="h-[300px] sm:h-auto md:h pt-12 sm:pt-10 flex justify-center items-center">
        <Image
          src={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mohan_rai_sm.webp"
          }
          alt="mohan rai"
          className="avatar"
          width={400}
          height={300}
          quality={88}
          // objectFit="cover"
          // priority
        />
      </section>
    </div>
  );
};

export default MainContent;

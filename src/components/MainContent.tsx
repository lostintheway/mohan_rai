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
          <h4 style={{ color: "grey", marginTop: 5 }}>Film Director</h4>
          <p>
            Hello, reaching out to discuss potential collaboration opportunities
            as a fellow film developers, explore how our shared passion can lead
            to exciting projects.
          </p>
          My latest movie is{" "}
          <a
            className="text-blue-500 underline"
            // style={{ color: "blue",  }}
            href="https://youtu.be/7RKwkS8ZgDM?si=axUanZpWKA2J0tV0"
          >
            Mahanagar
          </a>
          .
        </div>
        {/* <div className="latest-work">
          <h4>Latest Work:</h4>
        </div> */}
      </div>
      <section>
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

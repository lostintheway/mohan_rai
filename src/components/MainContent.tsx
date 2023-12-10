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
          <h1 style={{ fontSize: 40, marginBottom: 0 }}>Mohan Rai</h1>
          <h4 style={{ color: "grey", marginTop: 5 }}>Film Director</h4>
          <p>
            Hello, reaching out to discuss potential collaboration opportunities
            as a fellow film developer. s explore how our shared passion can
            lead to exciting projects.
          </p>
          My latest movie is
          <h4>All of Us in Our Own Lives</h4>I am currently at work on a novel
          and a mixed-media work of nonfiction.
        </div>
        {/* <div className="latest-work">
          <h4>Latest Work:</h4>
        </div> */}
      </div>
      <section>
        <Image
          src={
            "https://pub-0198217282574dada06155209c57c678.r2.dev/mohanraifinal.jpg"
          }
          alt="Avatar"
          className="avatar"
          width={100}
          height={100}
          quality={100}
        />
      </section>
    </div>
  );
};

export default MainContent;

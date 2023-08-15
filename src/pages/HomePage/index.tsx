import "./HomePage.css";
import Mohan from "../../../public/mohan.png";

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
            Hello, I'm reaching out to discuss potential collaboration
            opportunities as a fellow film developer. Let's explore how our
            shared passion can lead to exciting projects.
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
        <img src={Mohan} alt="Avatar" className="avatar" />
      </section>
    </div>
  );
};

export default MainContent;

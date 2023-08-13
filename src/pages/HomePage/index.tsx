import "./HomePage.css";
import Mohan from "../../../public/mohan.png";

const MainContent = () => {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <h1>Mohan Rai</h1>
        <p>
          Hello, I'm reaching out to discuss potential collaboration
          opportunities as a fellow film developer. Let's explore how our shared
          passion can lead to exciting projects.
        </p>
        Manjushree Thapa's latest novel is
        <h4>All of Us in Our Own Lives</h4>
        She is currently at work on a novel and a mixed-media work of
        nonfiction.
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

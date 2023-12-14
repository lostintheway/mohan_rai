import Link from "next/link";
import "./Contact.css";
type Props = {
  slideRef: React.MutableRefObject<null>;
};

const Contact = ({ slideRef }: Props) => {
  return (
    <>
      <div className="contact-wrapper" id="contact">
        <div className="contact py-5">
          <h2>Contact</h2>
          <div ref={slideRef} className="contact-content slide-up-container">
            {/* <div>
              <h4>Work:</h4>
              <b>Middleway Films</b> <br />
              Address 123 Main Street New York, NY 10001
            </div> */}
            <div className="pt-5">
              {/* <h4>Personal:</h4> */}
              <span className="text-gray-700">Phone: </span>
              +977 9841-435-961
              <br />
              <span className="text-gray-700">Email: </span>
              middlewayfilms@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="copyright relative">
        © Copyright - Mohan Rai 2023
        <div className="absolute text-gray-700 text-xs right-10 top-1">
          <Link href={"/contact"}>Contact Me</Link>
        </div>
      </div>
    </>
  );
};

export default Contact;

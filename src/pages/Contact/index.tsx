import "./Contact.css";
type Props = {
  slideRef: React.MutableRefObject<null>;
};

const Contact = ({ slideRef }: Props) => {
  return (
    <>
      <div className="contact-wrapper" id="contact">
        <div className="contact">
          <h2>Contact</h2>
          <div ref={slideRef} className="contact-content slide-up-container">
            <div>
              <h4>Work:</h4>
              <b>Middleway Films</b> <br />
              Address 123 Main Street New York, NY 10001
            </div>
            <div>
              <h4>Personal:</h4>
              Phone: +1 (416) 964-3302 Fax: +1 (416) 975-9209 Email:
              carolyn@transatlanticagency.com ALL OTHER QUERIES Email:
              contact@manjushreethapa.com Twitter: @manjushreethapa Facebook:
              https://www.facebook.com/manjushree.thapa.1
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© Copyright - Mohan Rai 2023</div>
    </>
  );
};

export default Contact;

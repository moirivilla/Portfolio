import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Mónica Irimia </span>
            from <span className="orange"> Viveiro, Lugo.</span>
            <br /> I just finished my web development bootcamp at HACKABOSS
            <br />
            Additionally, I love art, especially ancient art of Egypt, Greece and Rome
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mountain activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Mystery series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#e49124" }}>
            "The ability to achieve your goals is not possible without work and self-confidence"{" "}
          </p>
          <footer className="blockquote-footer">Eliud Kipchoge</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
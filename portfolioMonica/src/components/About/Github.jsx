import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="orange">Code</strong>
      </h1>
      <GitHubCalendar
        username="moirivilla"
        blockSize={15}
        blockMargin={5}
        color="orange"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
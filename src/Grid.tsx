import Container from "./Container";
import Row from "./Row";
import Col from "./Col";

const Grid = () => {
  const example = {
    padding: "10px",
    fontSize: "1rem",
    fontFamily: "SFProDisplay",
    fontWeight: "bold",
    textAlign: "center" as const,
    border: "1px solid #ccc",
    backgroundColor: "#ddd",
    marginBottom: "20px",
  };

  return (
    <div>
      <section style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Container>
          <h1>Grid</h1>
          <Row>
            <Col>
              <div style={{ ...example }}>12</div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div style={{ ...example }}>10</div>
            </Col>
            <Col xs={2}>
              <div style={{ ...example }}>2</div>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              <div style={{ ...example }}>8</div>
            </Col>
            <Col xs={4}>
              <div style={{ ...example }}>4</div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div style={{ ...example }}>6</div>
            </Col>
            <Col xs={6}>
              <div style={{ ...example }}>6</div>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <div style={{ ...example }}>4</div>
            </Col>
            <Col xs={8}>
              <div style={{ ...example }}>8</div>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <div style={{ ...example }}>2</div>
            </Col>
            <Col xs={10}>
              <div style={{ ...example }}>10</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h1>Responsive grid</h1>
          <Row>
            <Col lg={8}>
              <div style={{ ...example }}>.ko-col-lg-8</div>
            </Col>
            <Col lg={4}>
              <div style={{ ...example }}>.ko-col-lg-4</div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div style={{ ...example }}>.ko-col-md-6</div>
            </Col>
            <Col md={6}>
              <div style={{ ...example }}>.ko-col-md-6</div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div style={{ ...example }}>.ko-col-sm-6</div>
            </Col>
            <Col sm={6}>
              <div style={{ ...example }}>.ko-col-sm-6</div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div style={{ ...example }}>.ko-col-xs-6</div>
            </Col>
            <Col xs={6}>
              <div style={{ ...example }}>.ko-col-xs-6</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <h1>Offset grid</h1>
          <Row>
            <Col lg={6} offsetLg={3}>
              <div style={{ ...example }}>.ko-col-md-6 .offset-md-3</div>
            </Col>
          </Row>
          <Row>
            <Col xs={6} offsetXs={6}>
              <div style={{ ...example }}>.ko-col-6 .offset-6</div>
            </Col>
          </Row>
          <Row>
            <Col xs={3} offsetXs={9}>
              <div style={{ ...example }}>.ko-col-3 .offset-9</div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Grid;

import React from "react";
import { Col, Container, Row } from "reactstrap";
import Todo from "./components/todos";

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

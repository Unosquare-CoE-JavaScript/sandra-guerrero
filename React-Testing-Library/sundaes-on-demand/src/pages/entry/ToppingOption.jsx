import { Col, Form } from "react-bootstrap";

export default function ToppingOption({ name, imagePath, updateItemCount }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(event) => {
            updateItemCount(name, event.target.checked ? 1 : 0);
          }}
        />
        <Form.Label>{name}</Form.Label>
      </Form.Group>
    </Col>
  );
}

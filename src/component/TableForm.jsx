import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const TableForm = ({ fields }) => {
  const [rows, setRows] = useState([
    fields.reduce((obj, field) => ({ ...obj, [field.name]: "" }), {}),
  ]);

  const handleAddRow = () => {
    setRows([...rows, fields.reduce((obj, field) => ({ ...obj, [field.name]: "" }), {})]);
  };

  const handleInputChange = (event, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][event.target.name] = event.target.value;
    setRows(updatedRows);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rows);
  };

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {fields.map((field, fieldIndex) => (
            <Col key={fieldIndex}>
              <Form.Group controlId={`formBasic${field.name}${rowIndex}`}>
                <Form.Label>{field.name}</Form.Label>
                <Form.Control
                  type={field.type}
                  name={field.name}
                  value={row[field.name] || ""}
                  onChange={(e) => handleInputChange(e, rowIndex)}
                />
              </Form.Group>
            </Col>
          ))}
        </Row>
      ))}
      <Button variant="primary" onClick={handleAddRow}>Insert</Button>
      <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default TableForm;

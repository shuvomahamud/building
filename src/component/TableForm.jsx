import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

const TableForm = ({ fields, numericFields, apiUrl, tableName }) => {
  const [rows, setRows] = useState([
    fields.reduce((obj, field) => ({ ...obj, [field.name]: "" }), {}),
  ]);

  const buildingId = localStorage.getItem('buildingId');

  useEffect(() => {
    if (buildingId) {
      fetch(`${apiUrl}?buildingId=${buildingId}&tablename=${tableName}`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success' && data.records) {
            setRows(data.records);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [buildingId, apiUrl]);

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
    const rowsWithBuildingId = rows.map(row => ({ ...row, BuildingId: buildingId }));

    const dataToSend = {
      fields: rowsWithBuildingId,
      numericFieldValues: numericFields,
      tableName: tableName,
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.status === 'success') {
          console.log('Saved');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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

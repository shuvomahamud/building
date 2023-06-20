import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const DynamicForm = ({ fields, numericFields, apiUrl, tableName }) => {
  const [formState, setFormState] = useState(
    fields.reduce((obj, field) => ({ ...obj, [field.name]: "" }), {})
  );

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setFormState(data))
      .catch(error => console.error('Error:', error));
  }, [apiUrl]);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericFieldValues = numericFields.reduce((obj, field) => {
      return {...obj, [field.name]: formState[field.name]}
    }, {});
    const dataToSend = {
      fields: formState,
      numericFieldValues: numericFieldValues,
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <Form.Group key={index} controlId={`formBasic${field.name}`}>
            <Form.Label>{field.name}</Form.Label>
            <Form.Control 
              type={field.type}
              name={field.name}
              value={formState[field.name] || ""}
              onChange={handleChange}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default DynamicForm;

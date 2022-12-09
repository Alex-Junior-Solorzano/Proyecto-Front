import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contact = () => {
  return (
    <div className='container  '>
   
    <h3 className='text-center text-uppercase py-4'>Contact US</h3>
    <div className='cont-contact mx-auto contact-form-container text-muted shadow-sm  rounded p-4 lh-2' >
    <Form>


    <Form.Group className=" mb-3" controlId="formBasicName">
        <Form.Label>Full Name </Form.Label>
        <Form.Control type="text" placeholder="Enter name" required/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </Form.Group>

   <div className='d-grid'>
   <Button variant="primary" type="submit">
        Submit
      </Button>
   </div>
  
    </Form>
   </div>
    </div>
  )
}

export default Contact
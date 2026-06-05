import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BookingForm() {
  return (
    <section className="booking-section">
      <h2>Book Your Table</h2>

      <Form className="booking-form">
        <div className="form-row">
          <Form.Group className="form-group">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Date *</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Select a Service *</Form.Label>
            <Form.Select>
              <option>Choose service...</option>
              <option>Dine in</option>
              <option>Take away</option>
              <option>Delivery</option>
            </Form.Select>
          </Form.Group>
        </div>

        <Form.Group className="message-box">
          <Form.Label>Please share your message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Write your message..."
          />
        </Form.Group>

        <Button className="send-btn">Send Message</Button>
      </Form>
    </section>
  );
}

export default BookingForm;

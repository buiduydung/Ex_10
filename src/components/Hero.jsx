import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <section className="hero">
      <Carousel fade controls indicators>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src="/images/pizza_1.png"
            alt="neapolitan pizza"
          />

          <Carousel.Caption className="hero-Caption">
            <h1>Neapolitan Pizza</h1>
            <p>Authentic Italian taste in every bite</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src="/images/pizza_2.png"
            alt="pepperoni pizza"
          />

          <Carousel.Caption className="hero-Caption">
            <h1>Pepperoni Pizza</h1>
            <p>Hot, cheesy and full of flavor</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src="/images/pizza_3.png"
            alt="mushroom pizza"
          />

          <Carousel.Caption className="hero-Caption">
            <h1>Mushroom Pizza</h1>
            <p>Fresh mushrooms with creamy cheese</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Hero;

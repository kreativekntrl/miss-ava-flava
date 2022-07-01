import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

const Main = () => {
    return(
<div> 
  <h2>Artisan Made Meal Prep</h2>
<Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="food"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="pasta"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="pasta"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="pasta"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="pasta"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
    );
}
export default Main;
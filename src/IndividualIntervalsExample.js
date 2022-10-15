import Carousel from 'react-bootstrap/Carousel';
import bg1 from './bg1.png';
import './navba.css'

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          id='cdm'
          src= {bg1} 
          alt="First slide"
          
        />
        <Carousel.Caption className='caption'>
          <h6>First slide label</h6>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          id='cdm'
          src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/72AYgWguyRFfesCrDJi8w8/35b0d50e819d179b4d99b5f8e44fb416/GettyImages-1255905368.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="
          alt="Second slide"
        />
        <Carousel.Caption className='caption' >
          <h6>Second slide label</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          id='cdm'
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/06/Types-of-graphic-design.jpg?auto=format&q=60&w=1860&h=1090&fit=crop&crop=faces"
          alt="Third slide"
        />
        <Carousel.Caption className='caption'>
          <h6>Third slide label</h6>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption >
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
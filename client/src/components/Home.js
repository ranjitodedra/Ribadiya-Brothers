import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../img/i1.jpg';
import bg2 from '../img/i2.jpg';
import bg3 from '../img/i3.jpg';
import whitebg from '../img/whitebg.jpg';


const Home = () => {
  return (

    <div>

      {/* --- Heropart ---  */}
      <section id='hero'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={whitebg}
              alt="First slide"
            />

            <Carousel.Caption>
              <div className='headline'>
                <p className='tag-bit'>Womens collection</p>
                <p className='tagline'>For colorfull steps in life</p>
                <button className='btn btn-outline-dark btn-head'>SHOP NOW</button>
              </div>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bg2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <div className='headline'>
                <p>Highest Quility <br /> Honest prices</p>
              </div>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bg3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className='headline'>
                <p>
                  Discover
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>

      <section id="catagory">
        <div className='devider'>
          <h2>Catagories</h2>
          <hr />
        </div>
        <div className='container-fluid text-center'>

          <div className='row'>

            <div className='col-lg-4 box'>
              <div className='card'>
                <img
                  className="d-block w-100 img-box"
                  src={bg3}
                  alt="Second slide"
                />
                <div className='catagories'>
                  <h4 className='tags'>#Gown</h4>
                </div>
              </div>
            </div>

            <div className='col-lg-4 box'>
              <div className='card'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
                <div className='catagories'>
                  <h4 className='tags'>#Saree</h4>
                </div>
              </div>
            </div>

            <div className='col-lg-4 box'>
              <div className='card'>
                <img
                  className="d-block w-100 img-box"
                  src={bg1}
                  alt="Second slide"
                />
                <div className='catagories'>
                  <h4 className='tags'>#Choli</h4>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



      <section id='Pop'>

        <div className='devider'>
          <h2>Popular Products</h2>
          <hr />
        </div>

        <h5>New Arrivals | <u>Featured</u></h5>

        <div className='row container-fluid'>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  )
}
export default Home
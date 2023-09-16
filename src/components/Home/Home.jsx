import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../../assets/images/home.jpg';
import ServiceImage1 from '../../assets/images/service1.webp';
import ServiceImage2 from '../../assets/images/service2.webp';
import ServiceImage3 from '../../assets/images/service3.jpg';

const Home = () => {
  return (
    <div>
      <div id="contents">
        <div id="adbox">
          <div className="clearfix">
            <img src={HomeImage} className="h-[382px] w-[594px]" alt="Img" />
            <div className="detail">
              <h1>
                Total Security at Affordability
                <br /> lorem ipsum
              </h1>
              <p>
                lorem ipsum
                <br /> dummy text
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="clearfix">
            <div className="testimonial">
              <h2>Testimonials</h2>
              <p>
                &ldquo;Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.&rdquo;
              </p>
              <span>-John Doe and Jane Doe-</span>
            </div>
            <h1>Our Promise</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
        </div>
        <div className="featured">
          <h2>Why Choose Us?</h2>
          <ul className="clearfix">
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src={ServiceImage1}
                    alt="Img"
                    className="h-[130px] w-[197px]"
                  />
                </div>
              </div>
              <p>
                <b>Service 1</b> dummy text of the printing and typesetting
                industry
              </p>
              <Link to={'/services'} className="more">
                Details
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src={ServiceImage2}
                    alt="Img"
                    className="h-[130px] w-[197px]"
                  />
                </div>
              </div>
              <p>
                <b>Service 2</b> dummy text of the printing and typesetting
                industry
              </p>
              <Link to={'/services'} className="more">
                Details
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src={ServiceImage3}
                    alt="Img"
                    className="h-[130px] w-[197px]"
                  />
                </div>
              </div>
              <p>
                <b>Service 3</b> Join the discussion on our forum and meet other
                people in the community.
              </p>
              <Link to={'/services'} className="more">
                Details
              </Link>
            </li>
            <li>
              <div className="frame1">
                <div className="box">
                  <img
                    src={ServiceImage1}
                    alt="Img"
                    className="h-[130px] w-[197px]"
                  />
                </div>
              </div>
              <p>
                <b>Service 4</b> blah blah blah dummy dummy dummy.
              </p>
              <Link to={'/services'} className="more">
                Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

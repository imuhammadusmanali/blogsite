import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/service1.webp';
import ServiceImage2 from '../../assets/images/service2.webp';
import ServiceImage3 from '../../assets/images/service3.jpg';

const Services = () => {
  return (
    <div>
      <div id="contents">
        <div className="clearfix">
          <div className="sidebar">
            <div>
              <h2>Practices</h2>
              <ul>
                <li>
                  <Link to={'/'}>Service 1</Link>
                </li>
                <li>
                  <Link to={'/'}>Service 2</Link>
                </li>
                <li>
                  <Link to={'/'}>Service 3</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Client Testimonials</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).{' '}
                <span>- Jared Greene</span>
              </p>
            </div>
          </div>
          <div className="main">
            <h1>Services</h1>
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
            <ul className="practices">
              <li className="frame5">
                <Link to={'/services'} className="box">
                  <img src={ServiceImage1} className="h-[198px] w-[265px]" />
                  <span>Service 1</span>
                </Link>
              </li>
              <li className="frame5">
                <Link to={'/services'} className="box">
                  <img src={ServiceImage2} className="h-[198px] w-[265px]" />
                  <span>Service 2</span>
                </Link>
              </li>
              <li className="frame5">
                <Link to={'/services'} className="box">
                  <img src={ServiceImage3} className="h-[198px] w-[265px]" />
                  <span>Service 3</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

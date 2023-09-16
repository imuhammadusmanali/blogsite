import React from 'react';
import { Link } from 'react-router-dom';
import ServiceImage1 from '../../assets/images/service1.webp';
import ServiceImage2 from '../../assets/images/service2.webp';
import ServiceImage3 from '../../assets/images/service3.jpg';

const Blogs = () => {
  return (
    <div>
      <div id="contents">
        <div className="clearfix">
          <div className="sidebar">
            <div>
              <h2>Recent News</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using
              </p>
              <p>
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making it look like
              </p>
              <p>
                readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in
                their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like).
              </p>
            </div>
            <div>
              <h2>Client Testimonials</h2>
              <p>
                &ldquo;The best of the best service providers ever
                <br /> problems settling the terms and agreement. Everything
                went so smoothly. We’re very happy.&rdquo;{' '}
                <span>- Jared Greene</span>
              </p>
            </div>
          </div>
          <div className="main">
            <h1>News</h1>
            <ul className="news">
              <li>
                <div className="box">
                  <img
                    src={ServiceImage1}
                    alt="Img"
                    className="h-[245px] w-[213px]"
                  />
                </div>
                <p className="info">
                  31st January 2023 by{' '}
                  <span className="author">Manes Winchester</span>
                </p>
                <h2>The Basics of cybersecurity</h2>
                <p>
                  The Basics of cybersecurityThe Basics of cybersecurityThe
                  Basics of cybersecurityThe Basics of cybersecurityThe Basics
                  of cybersecurityThe Basics of cybersecurity
                </p>
                <Link to={'/singleblog'} className="more">
                  Read More
                </Link>
              </li>
              <li>
                <div className="box">
                  <img
                    src={ServiceImage2}
                    alt="Img"
                    className="h-[245px] w-[213px]"
                  />
                </div>
                <p className="info">
                  31st January 2023 by{' '}
                  <span className="author">Manes Winchester</span>
                </p>
                <h2>The Basics of cybersecurity</h2>
                <p>
                  The Basics of cybersecurityThe Basics of cybersecurityThe
                  Basics of cybersecurityThe Basics of cybersecurityThe Basics
                  of cybersecurityThe Basics of cybersecurity
                </p>
                <Link to={'/singleblog'} className="more">
                  Read More
                </Link>
              </li>
              <li>
                <div className="box">
                  <img
                    src={ServiceImage3}
                    alt="Img"
                    className="h-[245px] w-[213px]"
                  />
                </div>
                <p className="info">
                  31st January 2023 by{' '}
                  <span className="author">Manes Winchester</span>
                </p>
                <h2>The Basics of cybersecurity</h2>
                <p>
                  The Basics of cybersecurityThe Basics of cybersecurityThe
                  Basics of cybersecurityThe Basics of cybersecurityThe Basics
                  of cybersecurityThe Basics of cybersecurity
                </p>
                <Link to={'/singleblog'} className="more">
                  Read More
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

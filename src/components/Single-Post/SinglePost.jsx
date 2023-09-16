import React from 'react';
import ServiceImage1 from '../../assets/images/service1.webp';

const SinglePost = () => {
  return (
    <div>
      <div id="contents">
        <div className="clearfix">
          <div className="sidebar">
            <div>
              <h2>Recent News</h2>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text.
              </p>
              <p>
                You can remove any link to our website from this website
                template, you're free to use this website template without
                linking back to us.
              </p>
              <p>
                If you're having problems editing this website template, then
                don't hesitate to ask for help on the Forums.
              </p>
            </div>
            <div>
              <h2>Client Testimonials</h2>
              <p>
                &ldquo;The best family lawyers in the city so far. Me and my
                ex-wife didn’t have any
                <br /> problems settling the terms and agreement. Everything
                went so smoothly. We’re both very happy.&rdquo;{' '}
                <span>- Jared Greene</span>
              </p>
            </div>
          </div>
          <div className="main">
            <div className="images">
              <img
                src={ServiceImage1}
                alt="Img"
                className="h-[237px] w-[205px]"
              />
            </div>
            <div className="details">
              <p className="info">
                31st January 2023 by{' '}
                <span className="author">Manes Winchester</span>
              </p>
              <h2>News Single Post</h2>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text. You can remove any link to our website from this
                website template, you're free to use this website template
                without linking back to us. If you're having problems editing
                this website template, then don't hesitate to ask for help on
                the Forums.
              </p>
              <p>
                This website template has been designed by Free Website
                Templates for you, for free. You can replace all this text with
                your own text. You can remove any link to our website from this
                website template, you're free to use this website template
                without linking back to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

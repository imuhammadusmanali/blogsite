import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <div className="clearfix">
        <div className="section">
          <h4>Latest News</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="section contact">
          <h4>Contact Us</h4>
          <p>
            <span>Address:</span> the address city, state 1111
          </p>
          <p>
            <span>Phone:</span> (+20) 23323232332
          </p>
          <p>
            <span>Email:</span> aasg@gaa.com
          </p>
        </div>
        <div className="section">
          <h4>SEND US A MESSAGE</h4>
          <p>Feel free to contact us.</p>
          <a href="contact.html" className="subscribe">
            Click to send us an email
          </a>
        </div>
      </div>
      <div id="footnote">
        <div className="clearfix">
          <div className="connect">
            <a href="http:" className="facebook"></a>
            <a href="http://" className="twitter"></a>
            <a href="http://" className="googleplus"></a>
            <a href="http://" className="pinterest"></a>
          </div>
          <p>© Copyright 2023. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

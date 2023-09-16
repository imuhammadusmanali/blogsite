import React, { useState } from 'react';

const ContactUs = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  };

  const [inputValues, setInputValues] = useState({ ...initialValues });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    try {
      alert(`Message sent to ${inputValues.email}`);
      setInputValues({ ...initialValues });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div id="contents">
        <div className="clearfix">
          <div className="sidebar">
            <div>
              <h2>Contact Info</h2>
              <ul className="contact">
                <li>
                  <p>
                    <span className="home"></span>{' '}
                    <em>
                      Company name
                      <br /> one liner
                    </em>{' '}
                    the address city, state 1111
                  </p>
                </li>
                <li>
                  <p className="phone">Phone: (+20) 000 222 999</p>
                </li>
                <li>
                  <p className="fax">Fax: (+20) 000 222 988</p>
                </li>
                <li>
                  <p className="mail">Email: abc@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="main">
            <h1>Contact</h1>
            <h2>Send Us a Quick Message</h2>
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
            <form onSubmit={handleSubmit} className="message">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                className="border-black border rounded"
                value={inputValues.first_name}
                onChange={handleChange}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value={inputValues.last_name}
                className="border-black border rounded"
                onChange={handleChange}
              />
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={inputValues.email}
                className="border-black border rounded"
                onChange={handleChange}
              />
              <label>Message</label>
              <textarea
                className="border-black border rounded"
                name="message"
                value={inputValues.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

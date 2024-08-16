import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  // State to manage which accordion is active
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(
    'Select Your Business'
  );

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAccordionToggle = (index, category) => {
    setActiveAccordion(activeAccordion === index ? null : index);
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '',
    subject: '',
    message: '',
  });
  

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setFormData({ ...formData, [name]: value });
    
    setErrors({ ...errors, [name]: '' });
    
  };
  useEffect(() => {
    // console.log('Form Data:', formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Please enter your name';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
   
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.division) {
      newErrors.division = 'Please select a division';
    }
  
    if (Object.keys(newErrors).length === 0) {
      try {
        const formDatas = new FormData();
        formDatas.append('Name', formData.name);
        formDatas.append('Email', formData.email);
        formDatas.append('Phone', formData.phone);
        formDatas.append('Division', formData.division);
        formDatas.append('Subject', formData.subject);
        formDatas.append('Message', formData.message);

        toast.success(
          'Thank you for your enquiry, Our sales team will contact you soon!',
          {
            
            position: 'center-right',
            duration: 3000,
            style: {
              width: '400px',
              fontSize: '24px',
              background: 'green',
              color: '#fff',
            },
          }
        );

        await axios
          .post(
            'https://script.google.com/macros/s/AKfycbyyqpleAcg9DYWdEMZftRDPIbQNuOXx1o1xIDF7u3gz5EQqckONwEcbFj16TdME-2O4/exec',
            formDatas
          )
          .then((data) => {
            // console.log(data);
          })
          .catch((error) => {
            // console.log(error);
          });
        
        emailjs
          .sendForm('service_oskoz46', 'template_9ydwb45', e.target, {
            publicKey: 'FQX6Jy3MX8KCj-ib7',
          })
          .then(
            () => {
              // console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              // console.log('FAILED...', error.text);
            }
          );
        emailjs
          .sendForm('service_oskoz46', 'template_tgl7sj1', e.target, {
            publicKey: 'FQX6Jy3MX8KCj-ib7',
          })
          .then(
            () => {
              // console.log('SUCCESS!');
              e.target.reset();
            },
            (error) => {
              // console.log('FAILED...', error.text);
              
            }
          );
        
      } catch (error) {
        // console.log(error);
      }
    } else {
      setErrors(newErrors);
    }
  };
  const handleShowReturns = () => {
    window.open('/terms?section=returns', '_blank');
  };
  return (
    <>
      <>
        <Toaster>
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? 'custom-enter 3s ease'
                  : 'custom-exit 1s ease',
              }}
            />
          )}
        </Toaster>
       
        <section className="bannercontact"></section>
       
        <section className="gap contact-form-2" style={{ paddingTop: '25px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="data">
                 
                  <span style={{ fontSize: '18px' }}>
                    <b> How can we help?</b>
                  </span>
                  <h2>
                    Welcome - Reach Out to Us with Your Inquiries. We&apos;re
                    Here to Help!
                  </h2>
                  <p>
                    Have questions or want to chat? Fill out our contact form,
                    and we’ll put you in touch with the right people.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-0">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name && 'is-invalid'
                        }`}
                        id="exampleInputText1"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="row g-0">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.email && 'is-invalid'
                        }`}
                        id="exampleInputEmail1"
                        name="email"
                        value={formData.email}
                        placeholder="Email Address"
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="row g-0">
                      <input
                        type="text"
                        pattern="\d{10}"
                        title="Please enter exactly 10 digits"
                        className={`form-control ${
                          errors.phone && 'is-invalid'
                        }`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        id="exampleInputPhone"
                        placeholder="Contact No."
                        maxLength={'10'}
                      />
                      {errors.phone && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div
                      className="row g-0"
                      style={{
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #ced4da',
                      }}
                    >
                      <h5
                        className={` ${errors.division && 'is-invalid'}`}
                        style={{
                          color: '#6C757D',
                          fontSize: '1rem',

                          padding: '6px 12px 6px 20px',
                        }}
                      >
                        Select Division:
                      </h5>

                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division1"
                          value="Complete Printing Solutions"
                          checked={
                            formData.division === 'Complete Printing Solutions'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division1"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Complete Printing Solutions
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division2"
                          value="Electronics Components"
                          checked={
                            formData.division === 'Electronics Components'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division2"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Electronics Components
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division3"
                          value="Industrial Construction Tools and Equipment"
                          checked={
                            formData.division ===
                            'Industrial Construction Tools and Equipment'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division3"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Industrial Construction Tools and Equipment
                        </h6>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input radiobtn"
                          type="radio"
                          name="division"
                          id="division4"
                          value="Healthcare PPE Products"
                          checked={
                            formData.division === 'Healthcare PPE Products'
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                        <h6
                          className="form-check-label"
                          htmlFor="division4"
                          style={{ fontWeight: 'normal', color: '#6C757D' }}
                        >
                          Healthcare PPE Products
                        </h6>
                      </div>
                      {errors.division && (
                        <div
                          className="invalid-feedback"
                          style={{ fontSize: '20px' }}
                        >
                          {errors.division}
                        </div>
                      )}
                    </div>

                    <div className="row g-0">
                      <input
                        type="text"
                        className={'form-control'}
                       
                        name="subject"
                        value={formData.subject}
                        placeholder="Subject"
                        onChange={handleInputChange}
                      />
                      
                    </div>
                    <div className="row g-0">
                      <textarea
                        placeholder="Question / Message?"
                        defaultValue={''}
                        className={`form-control ${
                          errors.message && 'is-invalid'
                        }`}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                      {errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </div>

                    <button type="submit" className="theme-btn">
                      Send Message
                      <i className="fa-solid fa-angles-right" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="bio">
                  <div className="data">
                    <figure>
                      <img
                        className="author"
                        // src="https://via.placeholder.com/110x110"
                        src="assets/images/828.jpg"
                        // src="assets/images/profiledef.jpg"
                        alt="Bio Image"
                        style={{ zoom: '100%', objectFit: '' }}
                      />
                    </figure>
                    <h3>Mr Deepak Ponnarassery</h3>
                    <p>Business Head</p>
                    
                  </div>
                </div>
                <div className="info">
                  <ul className="contact">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={79}
                        height={94}
                        viewBox="0 0 79 94"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="clip-location_Bd">
                            {' '}
                            <rect width={79} height={94} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g
                          id="location_Bd"
                          data-name="location B"
                          clipPath="url(#clip-location_B)"
                        >
                          {' '}
                          <path
                            id="Path_1gfhjfjytkd"
                            data-name="Path 1"
                            d="M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z"
                            transform="translate(-922.725 -482.15)"
                          />{' '}
                          <path
                            id="Path_24cr2r"
                            data-name="Path 2d"
                            d="M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z"
                            transform="translate(25 26)"
                          />{' '}
                        </g>{' '}
                      </svg>
                      <div>
                        <h3>Address:</h3>
                        <p>
                          #614, Phase 10, RK Hudco, Hosur, Tamil Nadu, India,
                          635109
                        </p>
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={40}
                        height={62}
                        viewBox="0 0 40 62"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="fsddffsdfsdfsdf">
                            {' '}
                            <rect width={40} height={62} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)">
                          {' '}
                          <path
                            id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd"
                            data-name="Path 1"
                            d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z"
                            transform="translate(1 1)"
                          />{' '}
                          <path
                            id="Padfth_2"
                            data-name="Path 2"
                            d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z"
                            transform="translate(14 48)"
                          />{' '}
                        </g>
                      </svg>
                      <div>
                        <h3>Telephone:</h3>
                        <a href="tel:+91 84310 6789 3">
                          <p className="num">(+91) 84310 6789 3</p>
                        </a>
                        {/* <p>(+91) 84310 6789 3</p> */}
                        {/* <p>Fax: (+182) 50 318 47 07</p> */}
                      </div>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={102}
                        height={93}
                        viewBox="0 0 102 93"
                      >
                        {' '}
                        <defs>
                          {' '}
                          <clipPath id="clip-Emaidl_Bhf">
                            {' '}
                            <rect width={102} height={93} />{' '}
                          </clipPath>{' '}
                        </defs>{' '}
                        <g
                          id="Emaidfgsdl_B"
                          data-name="Email B"
                          clipPath="url(#clip-Email_Bsdfhf)"
                        >
                          {' '}
                          <path
                            id="Pathsdf_1"
                            data-name="Path 1"
                            d="M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z"
                            transform="translate(-918 -492)"
                          />{' '}
                          <path
                            id="Path_2dfsdsffgs"
                            data-name="Path 2"
                            d="M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z"
                            transform="translate(-918 -492)"
                          />{' '}
                        </g>{' '}
                      </svg>
                      <div>
                        <h3>Email:</h3>
                        <a
                          style={{
                            textDecoration: 'none',
                            color: '#B7B7b7',
                          }}
                          className="mail"
                          href="mailto:sales@omdys.com"
                        >
                          <p>sales@omdys.com</p>
                        </a>
                        
                      </div>
                    </li>
                  </ul>
                  <ul className="social-medias">
                    <li>
                      <a
                        className="fb"
                        href="https://www.facebook.com/people/OMDYS-International-LLP/61563817135198/"
                        target="_blank"
                      >
                        <p>Facebook</p>
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="in" href="https://www.instagram.com/omdys_international/" target='_blank'>
                        <p>Instagram</p>
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="https://www.linkedin.com/company/omdys-international-llp/"
                        target="_blank"
                      >
                        <p>LinkedIn</p>
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="ws"
                        href="https://wa.me/+918431067893"
                        target="_blank"
                      >
                        <p>Whatsapp</p>
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form 2 End */}
        {/* Contact Faqs Start */}
        <section className="contact-faqs" style={{ marginBottom: '185px' }}>
          <div className="heading">
            <figure>
              <img src="assets/images/heading-icon.png" alt="Heading Icon" />
            </figure>
            <span style={{ fontSize: '22px' }}>Frequently asked questions</span>
            <h2>Finding Solutions For Your Questions</h2>
          </div>
          {/* -------------Buttons starts---------------------- */}
          {/* Button 1 */}
          <div style={{ margin: '20px', background: '', padding: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <button
                  // className=" btn-dark m-1  dropdown-toggle"
                  className=" btn-warning m-1  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                 

                  style={{
                    background: dropdownOpen ? '#ffee02' : '',
                    border: dropdownOpen
                      ? '1px solid #ffee02'
                      : '1px solid transparent',
                    fontWeight: 'bold',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                  }}
                 
                >
                  {selectedCategory}
                </button>
                <div
                  className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
                  aria-labelledby="dropdownMenuButton"
                  
                >
                  
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 4 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(4, 'Oil & Gas Equipments Supply')
                    }
                    style={{
                      whiteSpace: 'normal' /* Allow the text to wrap */,
                      wordWrap: 'break-word',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}
                  >
                    Oil & Gas Equipments Supply
                  </button>
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 2 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(2, 'Electronics Components')
                    }
                    style={{ fontWeight: '600', textAlign: 'center' }}
                  >
                    Electronics Components
                  </button>
                  
                  <button
                    className={`dropdown-item ${
                      activeAccordion === 3 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(3, 'Healthcare PPE Products')
                    }
                    style={{ fontWeight: '600', textAlign: 'center' }}
                  >
                    Healthcare PPE Products
                  </button>
                  

                  <button
                    className={`dropdown-item ${
                      activeAccordion === 5 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(
                        5,
                        'Construction Tools and Safety Equipment'
                      )
                    }
                    style={{
                      whiteSpace: 'normal' /* Allow the text to wrap */,
                      wordWrap: 'break-word',
                      fontWeight: '600',
                      textAlign: 'center',
                    }}
                  >
                    Construction Tools and Safety Equipments
                  </button>

                  <button
                    className={`dropdown-item ${
                      activeAccordion === 1 ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleAccordionToggle(1, 'Printing Solutions')
                    }
                    style={{ fontWeight: '600', textAlign: 'center' }}
                  >
                    Printing Solutions
                  </button>
                 
                </div>
              </div>
            </div>
          </div>

          {/* -------------Buttons ends---------------------- */}
          {/* ------------------Accordions start----------------- */}
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="acc2">
                  <div className="accordion" id="accordionExample">
                    {/* Main Accordion 1 */}
                    {activeAccordion === 1 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-1">
                          
                        </h2>
                        <div
                          id="collapse-1"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 1 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-1"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What is a flex printer, and how does it
                                    work?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      A flex printer is a printing machine that
                                      uses flexible materials such as vinyl,
                                      fabric, or plastic. It works by
                                      transferring ink onto the flexible
                                      material through a digital printing
                                      process, allowing for high-quality and
                                      customizable prints.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. What are the benefits of using UV
                                    printers?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      UV printers offer several benefits,
                                      including:
                                      <br />
                                      Fast printing speeds, Ability to print on
                                      a wide range of materials including wood,
                                      glass, metal, and plastic, High-resolution
                                      prints with vibrant colors ,
                                      Environmentally friendly printing process
                                      as UV ink is cured instantly, reducing
                                      emissions
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. What materials can be engraved using a
                                    laser engraver?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Laser engravers can engrave various
                                      materials such as wood, acrylic, glass,
                                      leather, plastic, and certain metals like
                                      aluminum and stainless steel.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is the advantage of using a CNC
                                    router?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      CNC routers offer precise cutting and
                                      carving capabilities on various materials
                                      such as wood, plastic, foam, and metal.
                                      They are programmable and can reproduce
                                      designs with high accuracy and
                                      consistency.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. How can I maintain my printing and
                                    engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Regular maintenance is essential for
                                      keeping your equipment in optimal
                                      condition. This includes cleaning the
                                      printheads, checking for any debris or
                                      obstructions, calibrating the machine for
                                      accuracy, and ensuring proper ventilation
                                      and safety protocols for laser equipment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. Do you provide technical support and
                                    training for your equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer technical support and
                                      training to ensure that you can operate
                                      your equipment efficiently and
                                      effectively. Our team is available to
                                      assist you with troubleshooting,
                                      maintenance tips, and training on how to
                                      use the equipment properly.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Can your equipment be customized to fit
                                    specific production needs?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that every production
                                      environment is unique, and we offer
                                      customization options to meet your
                                      specific requirements. Whether it's
                                      adjusting printing speeds, adding
                                      additional features, or integrating with
                                      existing systems, we can tailor our
                                      equipment to suit your needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. What kind of warranty do you offer on
                                    your products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer warranties on all our products to
                                      ensure your peace of mind. Warranty terms
                                      may vary depending on the type of
                                      equipment and specific models. Our team
                                      will provide you with detailed warranty
                                      information and support for any issues
                                      that may arise during the warranty period
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. What software is compatible with your
                                    printing and engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our equipment is compatible with a variety
                                      of software applications commonly used in
                                      the industry, including Adobe Photoshop,
                                      CorelDRAW, Illustrator, AutoCAD, and more.
                                      We can also provide recommendations and
                                      support for selecting the right software
                                      for your specific needs
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. What is the lifespan of your printing
                                    and engraving equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lifespan of our equipment depends on
                                      various factors such as usage,
                                      maintenance, and environmental conditions.
                                      With proper care and regular maintenance,
                                      our machines are designed to provide years
                                      of reliable service
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 11 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-11"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-11"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-11"
                                  >
                                    11. Can your equipment handle large-scale
                                    production runs?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-11"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-11"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, our equipment is capable of handling
                                      large-scale production runs efficiently
                                      and effectively. Whether you're producing
                                      signage, promotional materials, or custom
                                      products, our machines are built to meet
                                      the demands of high-volume production.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 12 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-12"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-12"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-12"
                                  >
                                    12. Do you offer financing options for
                                    purchasing your equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-12"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-12"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that investing in
                                      equipment can be a significant expense.
                                      That's why we offer flexible financing
                                      options to help you acquire the equipment
                                      you need while managing your cash flow
                                      effectively. Our financing solutions are
                                      tailored to meet your budget and
                                      requirements
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 13 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-13"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-13"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-13"
                                  >
                                    13. What kind of training do you provide for
                                    operating the equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-13"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-13"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      • We offer comprehensive training programs
                                      to ensure that you and your team are
                                      proficient in operating our equipment
                                      safely and efficiently. Our training
                                      sessions cover topics such as machine
                                      setup, maintenance procedures, software
                                      operation, and best practices for
                                      maximizing productivity.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 14 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-14"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-14"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-14"
                                  >
                                    14. Can your equipment be upgraded or
                                    expanded in the future?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-14"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-14"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      • Yes, our equipment is designed with
                                      scalability in mind, allowing for future
                                      upgrades and expansions as your business
                                      grows. Whether you need to add additional
                                      printing heads, increase cutting capacity,
                                      or integrate new features, our machines
                                      can be easily upgraded to meet your
                                      evolving needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 15 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-15"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-15"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-15"
                                  >
                                    15. What technical specifications should I
                                    consider when choosing equipment for my
                                    business?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-15"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-15"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      When choosing equipment, consider factors
                                      such as printing speed, resolution,
                                      material compatibility, cutting size,
                                      software compatibility, and technical
                                      support options. Our team can help you
                                      evaluate your requirements and select the
                                      equipment that best fits your needs and
                                      budget.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 16 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-16"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-16"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-16"
                                  >
                                    16. Do you offer demonstrations of your
                                    equipment before purchase?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-16"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-16"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer product demonstrations
                                      either in-person or virtually, allowing
                                      you to see our equipment in action and ask
                                      any questions you may have. Our
                                      demonstrations are tailored to showcase
                                      the features and capabilities of our
                                      machines and help you make an informed
                                      decision.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Accordion 2 */}
                    {activeAccordion === 2 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-2">
                          {/* <button
                            className="accordion-button"
                            type="button"
                            aria-expanded={
                              activeAccordion === 2 ? 'true' : 'false'
                            }
                            aria-controls="collapse-2"
                          >
                            Electronics components
                          </button> */}
                        </h2>
                        <div
                          id="collapse-2"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 2 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-2"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1.What types of electronic components do you
                                    source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We source a comprehensive range of
                                      electronic components, including
                                      resistors, capacitors, diodes,
                                      transistors, integrated circuits (ICs),
                                      connectors, and more.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2.Do you only work with specific
                                    manufacturers or brands?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have established relationships with a
                                      variety of manufacturers and distributors
                                      worldwide. This allows us to offer a
                                      diverse selection of components from
                                      reputable brands, ensuring quality and
                                      reliability for our clients
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How do you ensure the quality of the
                                    components you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We understand the importance of quality
                                      assurance in electronic components. Our
                                      team conducts thorough vetting processes
                                      and works closely with trusted suppliers
                                      to ensure that all components meet
                                      industry standards and specifications.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is your lead time for sourcing
                                    components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Lead times can vary depending on the
                                      specific components and quantities
                                      required. We strive to provide accurate
                                      lead time estimates for each order and
                                      work efficiently to meet our clients'
                                      timelines.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Do you offer customization or special
                                    orders for unique components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we understand that some projects may
                                      require specialized components or custom
                                      solutions. Our team is equipped to assist
                                      with special orders and customization
                                      requests, working closely with clients to
                                      fulfill their unique requirements
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. What is your minimum order quantity
                                    (MOQ)?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our minimum order quantity varies
                                      depending on the specific components and
                                      suppliers involved. We strive to
                                      accommodate orders of all sizes, from
                                      prototypes to large-scale production runs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Do you offer bulk pricing or discounts
                                    for large orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer competitive pricing for bulk
                                      orders and are happy to discuss discounts
                                      for large-volume purchases. Our goal is to
                                      provide cost-effective solutions for our
                                      clients' component sourcing needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. What is your return policy for electronic
                                    components?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p style={{}}>
                                      We have a comprehensive return policy in
                                      place to address any issues with the
                                      components we supply. If a component is
                                      found to be defective or does not meet
                                      specifications, we will work with our
                                      clients to facilitate returns and
                                      replacements as needed. For more
                                      information, please follow the link for
                                      complete details on the return process:{' '}
                                      <a
                                        href=""
                                        style={{
                                          color: 'blue',
                                          fontWeight: 'bold',
                                          fontSize: '16px',
                                        }}
                                        onClick={handleShowReturns}
                                      >
                                        Returns & Refunds
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. How can I request a quote or place an
                                    order?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      You can request a quote or place an order
                                      through our website, via email, or by
                                      contacting our sales team directly. Our
                                      representatives are available to assist
                                      you with any inquiries and guide you
                                      through the ordering process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Main Accordion 3 */}
                    {activeAccordion === 3 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-3">
                          
                        </h2>
                        <div
                          id="collapse-3"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 3 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-3"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What types of Health care products does
                                    your company supply?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our company supplies a wide range of
                                      Health care products including masks,
                                      gloves, gowns, face shields, goggles, hand
                                      sanitizers, and more.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2.Are your Health care products products
                                    compliant with regulatory standards?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, all of our Health care products
                                      products meet or exceed regulatory
                                      standards set by organizations such as the
                                      FDA, CE, and other relevant regulatory
                                      bodies.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How can I place an order for HEALTH CARE
                                    PRODUCTS with your company?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      You can place an order by contacting our
                                      sales team via phone, email, or through
                                      our website. Our representatives will
                                      guide you through the ordering process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What is the minimum order quantity for
                                    Health care products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The minimum order quantity varies
                                      depending on the type of PPE and current
                                      stock availability. Please contact our
                                      sales team for specific information
                                      regarding minimum order quantities.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Can you provide bulk discounts for large
                                    orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer competitive pricing and bulk
                                      discounts for large orders. Please contact
                                      our sales team to discuss pricing options
                                      for your specific order quantity
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. How do you ensure the quality of your
                                    Health care products products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We source our Health care products
                                      products from reputable manufacturers who
                                      adhere to strict quality control
                                      standards. Additionally, we conduct
                                      regular quality inspections to ensure that
                                      all products meet our high standards
                                      before they are shipped to customers.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. What is the lead time for shipping HEALTH
                                    CARE PRODUCTS orders?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lead time for shipping HEALTH CARE
                                      PRODUCTS orders varies depending on the
                                      type of product and quantity ordered. Our
                                      sales team will provide you with an
                                      estimated lead time when you place your
                                      order.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. Do you offer expedited shipping options?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer expedited shipping options
                                      for customers who require their Healthcare
                                      PPE Products orders to be delivered
                                      quickly. Additional fees may apply for
                                      expedited shipping services
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. What is your return policy for Healthcare
                                    PPE Products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have a flexible return policy for
                                      defective or damaged Health care products
                                      products. Please contact our customer
                                      service team within a specified timeframe
                                      after receiving your order to initiate the
                                      return process. For more information,
                                      please follow the link for complete
                                      details on the return process:{' '}
                                      <a
                                        href=""
                                        style={{
                                          color: 'blue',
                                          fontWeight: 'bold',
                                          fontSize: '16px',
                                        }}
                                        onClick={handleShowReturns}
                                      >
                                        Returns & Refunds
                                      </a>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. Do you offer customization options for
                                    Health care products products?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer customization options for
                                      certain Health care products products such
                                      as masks and gowns. Please contact our
                                      sales team to discuss your customization
                                      requirements and we will work with you to
                                      fulfill your needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 4 */}
                    {activeAccordion === 4 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-4">
                          
                        </h2>
                        <div
                          id="collapse-4"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 4 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-4"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1.What types of valves do you offer for the
                                    oil and gas industry, and what standards do
                                    they meet?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer gate valves, ball valves,
                                      butterfly valves, globe valves, and check
                                      valves, all complying with relevant ISO
                                      and API standards to ensure safety and
                                      reliability.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. How can your ball valves benefit my
                                    petroleum operations?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our ball valves provide low-pressure drop
                                      and high flow capacity, making them
                                      suitable for both liquid and gaseous
                                      applications. They comply with ISO 17292
                                      and API 608 standards for robust
                                      performance.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. What makes your butterfly valves a good
                                    choice for large-volume applications?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our butterfly valves are lightweight,
                                      compact, and offer quick operation,
                                      adhering to ISO 5752 and API 609
                                      standards, making them ideal for handling
                                      various types of fluids.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. Why should I choose your stainless steel
                                    pipes for corrosive environments?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      The lead time for sourcing and delivering
                                      Our stainless steel pipes are highly
                                      resistant to corrosion, ensuring longevity
                                      and reliability. They meet ISO 1127 and
                                      ASTM A312 standards, making them perfect
                                      for environments where chemical reactions
                                      could degrade other materials.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. How do your check valves help in
                                    maintaining system integrity?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our check valves prevent backflow and
                                      ensure unidirectional flow of fluids,
                                      complying with ISO 14313 and API 594
                                      standards, crucial for maintaining system
                                      integrity and protecting equipment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. What types of flanges do you offer, and
                                    what standards do they meet?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer various types of flanges such as
                                      weld neck, slip-on, and blind flanges. All
                                      our flanges comply with ISO 7005-1 and
                                      ANSI B16.5 standards, ensuring reliable,
                                      leak-proof connections.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Can your flexible metal hoses handle
                                    high-pressure environments?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, our flexible metal hoses are designed
                                      to absorb vibration, compensate for
                                      misalignment, and handle a variety of
                                      fluids and gases. They comply with ISO
                                      10380 and API 570 standards.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. What measures do you take to ensure the
                                    durability of your bolts and nuts in
                                    high-stress applications?{' '}
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our high-strength bolts and nuts comply
                                      with ISO 898-1 and ASTM standards,
                                      ensuring they provide robust and secure
                                      fastening solutions critical for
                                      maintaining structural integrity in
                                      petroleum operations.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. How do your pressure gauges ensure safe
                                    and efficient operation in oil and gas
                                    systems?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our pressure gauges provide accurate and
                                      reliable measurements, helping to prevent
                                      overpressure situations. They comply with
                                      ISO 5171 and ASME B40.100 standards.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. What corrosion protection products do
                                    you offer, and how do they extend the life
                                    of my equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We offer coatings and anodes that prevent
                                      corrosion, extending the life of your
                                      equipment. Our products meet ISO 12944 and
                                      NACE MR0175 standards, ensuring
                                      long-lasting protection for metal
                                      components in harsh conditions.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 5 */}
                    {activeAccordion === 5 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-5">
                          
                        </h2>
                        <div
                          id="collapse-5"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 5 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-5"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Sub Accordions for Main Accordion 1 */}
                            <div className="accordion" id="nestedAccordion-1">
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-1"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-1"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-1"
                                  >
                                    1. What types of construction tools and
                                    safety equipment do you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-1"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-1"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We specialize in sourcing a wide range of
                                      construction tools and equipment including
                                      but not limited to power tools, hand
                                      tools, heavy machinery, safety equipment,
                                      scaffolding, and material handling
                                      equipment.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 2 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-2"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-2"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-2"
                                  >
                                    2. Do you offer customized solutions for
                                    specific project requirements?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-2"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-2"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can source both new and used
                                      equipment based on your requirements and
                                      budget constraints.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 3 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-3"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-3"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-3"
                                  >
                                    3. How do you ensure the quality of the
                                    equipment you source?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-3"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-3"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      We have a stringent supplier vetting
                                      process where we assess the quality
                                      standards and reputation of each supplier
                                      we work with. Additionally, we can provide
                                      certifications and warranties for the
                                      equipment sourced
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 1 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-4"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-4"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-4"
                                  >
                                    4. What are your lead times for sourcing
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-4"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-4"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Lead times can vary depending on the type
                                      of equipment and the quantity ordered.
                                      However, we strive to provide efficient
                                      sourcing services and communicate
                                      realistic lead times to our clients.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 5 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-5"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-5"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-5"
                                  >
                                    5. Do you offer customization options for
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-5"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-5"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can work with our suppliers to
                                      provide customization options for certain
                                      equipment based on your specific
                                      requirements.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 6 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-6"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-6"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-6"
                                  >
                                    6. What are your payment terms and methods?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-6"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-6"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Our payment terms and methods may vary
                                      depending on the nature of the transaction
                                      and the agreement with the client. We
                                      accept various payment methods and can
                                      discuss flexible payment terms.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 7 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-7"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-7"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-7"
                                  >
                                    7. Do you provide after-sales support?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-7"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-7"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we offer after-sales support to
                                      address any issues or concerns you may
                                      have with the equipment sourced through
                                      us. Our team is committed to ensuring your
                                      satisfaction even after the sale is
                                      complete.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 8 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-8"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-8"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-8"
                                  >
                                    8. Can you handle large-scale projects
                                    requiring a variety of equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-8"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-8"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Absolutely, we have experience in handling
                                      large-scale projects and sourcing a
                                      diverse range of equipment to meet the
                                      demands of such projects.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 9 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-9"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-9"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-9"
                                  >
                                    9. Do you offer rental options for
                                    equipment?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-9"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-9"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Yes, we can facilitate equipment rentals
                                      for short-term or long-term projects based
                                      on your needs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Sub Accordion 10 */}
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="nestedHeading-1-10"
                                >
                                  <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#nestedCollapse-1-10"
                                    aria-expanded="false"
                                    aria-controls="nestedCollapse-1-10"
                                  >
                                    10. How do I get started with sourcing
                                    equipment through your company?
                                  </button>
                                </h2>
                                <div
                                  id="nestedCollapse-1-10"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="nestedHeading-1-10"
                                  data-bs-parent="#nestedAccordion-1"
                                >
                                  <div className="accordion-body">
                                    <p>
                                      Simply reach out to us through our contact
                                      information provided on our website or get
                                      in touch with one of our representatives.
                                      We'll be happy to discuss your
                                      requirements and provide you with a
                                      tailored sourcing solution
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Main Accordion 6 */}
                    {activeAccordion === 6 && (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="heading-6">
                          <button
                            className="accordion-button"
                            type="button"
                            // onClick={() => handleAccordionToggle(6)}
                            aria-expanded={
                              activeAccordion === 6 ? 'true' : 'false'
                            }
                            aria-controls="collapse-6"
                          >
                            Toggle Accordion 6
                          </button>
                        </h2>
                        <div
                          id="collapse-6"
                          className={`accordion-collapse collapse ${
                            activeAccordion === 6 ? 'show' : ''
                          }`}
                          aria-labelledby="heading-6"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* Content for Accordion 6 */}
                            Content for Accordion 6
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------Accordions start----------------- */}
        </section>
        <br />
        <br />
        <br />
        {/* Contact Faqs End */}
      </>
    </>
  );
};

export default ContactForm;

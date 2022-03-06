import React from 'react';
import { Container } from 'reactstrap';


import emailjs from 'emailjs-com';
import { useRef } from 'react';

const FormBannerComponent = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1by7v2a', 'template_s0uw88j', form.current, 'SP9Zd4ei-nPm19OWr')
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
  };

    return (
        <div>
            <Container>
            <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
    </Container>




            {/* <div className="bg-light">
                <section>
                    <div id="banner1" className="banner spacer">
                        <Container>
                            <Row>
                                <Col lg="5" md="7" className="align-self-center">
                                    <h2 className="title font-bold">Give your Business Real boost Now!</h2>
                                    <p className="m-t-40 m-b-30">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</p>
                                    <Form className="m-t-40">
                                        <input type="text" name="email" placeholder="Enter Email Address" className="font-16" />
                                        <input type="submit" value="Get Started" className="bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center" />
                                    </Form>
                                </Col>
                                <Col lg="6" md="5" className="align-self-center ml-auto">
                                    <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div> */}
        </div>
    );
}

export default FormBannerComponent;

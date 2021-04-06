import React from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";

// import fotopaste from './../photos/pastephoto.jpg'

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Isai",
      subject,
      message_html: message,
    };
    emailjs
      .send(
        "service_f56zfkj",
        "template_hmn0xhe",
        templateParams,
        "user_7EOX95dc2S4QQcmkrPZY8"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      error: "Enviado",
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
      <>
        <section class="section " id="Contact">
          <div class="container">
            <div class="section-title">
              <h2>
                Quieres <span style={{ color: "#00adb5" }}>preguntarme</span>{" "}
                algo?
              </h2>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="section-title">
                  <h3>Escribeme</h3>
                  <p>
                    Puede hacer ese trabajo deseado, en una forma rapida,
                    creativa e innovadora
                  </p>
                </div>
              </div>
            </div>
            <div class="row flex-row-reverse">
              <div class="col-md-7 col-lg-8 m-15px-tb">
                <div class="contact-form">
                  <div style={{ color: "red" }}>{this.state.error} </div>
                  <form
                    action="/"
                    method="post"
                    class="contactform contact_form"
                    id="contact_form"
                    onSubmit={this.handleSubmit}
                  >
                    <div
                      class="returnmessage valid-feedback p-15px-b"
                      data-success="Your message has been received, We will contact you soon."
                    ></div>
                    <div class="empty_notice invalid-feedback p-15px-b">
                      <span>Llene todos los campos</span>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Nombre y apellido"
                            value={name}
                            class="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            class="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Razon"
                            value={subject}
                            class="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            name="message"
                            placeholder="Escribe tu mensaje"
                            value={message}
                            class="form-control"
                            rows="3"
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="send">
                          <button
                            type="submit"
                            id="send_message"
                            class="px-btn theme"
                            href="#"
                          >
                            <span>Enviar</span> <i class="arrow"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 col-lg-4 m-15px-tb">
                <div class="contact-name">
                  <h5>Email profesional:</h5>
                  <p>isaidelrod@gmail.com</p>
                </div>
                <div class="contact-name">
                  <h5>Telefono</h5>
                  <p>787-202-8942</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;

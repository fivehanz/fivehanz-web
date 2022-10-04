import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM!);

  if (state.succeeded) {
    return (
      <div className="contact-form-message">
        <h2 className="success-message">Message sent successfully!</h2>
      </div>
    );
  }

  return (
    <div className="contact-form-box">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-item">
          <label htmlFor="name">name</label>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="enter your full name"
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
        </div>

        <div className="contact-item">
          <label htmlFor="email">email</label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="enter your email address"
            />
            <ValidationError
              prefix="email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="contact-item">
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" required></textarea>
          <ValidationError
            prefix="message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="contact-item">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
            size="normal"
            theme="dark"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="button button-lg contact-item"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

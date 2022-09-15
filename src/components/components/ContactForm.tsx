import { useForm, ValidationError } from "@formspree/react";
const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM!);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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

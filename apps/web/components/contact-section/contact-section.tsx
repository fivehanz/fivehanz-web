import { Container } from '@mui/material';
import Title from '../title/title';
import ContactForm from '../contact-form/contact-form';

/* eslint-disable-next-line */
export interface ContactSectionProps {}

export function ContactSection(props: ContactSectionProps) {
  return (
    <section id="contact">
      <Container>
        <Title underlineWidth="3.5rem" reverse={true}>
          contact
        </Title>
        <ContactForm />
      </Container>
    </section>
  );
}

export default ContactSection;

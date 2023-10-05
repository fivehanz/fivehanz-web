import { Container } from '@mui/material';
import Title from '../title/title';

/* eslint-disable-next-line */
export interface ContactSectionProps {}

export function ContactSection(props: ContactSectionProps) {
  return (
    <section id="contact">
      <Container>
        <div className="contact-heading">
          <Title underlineWidth="3.5rem" reverse={true}>
            contact
          </Title>
        </div>
        {/* <ContactForm /> */}
        wip.
      </Container>
    </section>
  );
}

export default ContactSection;

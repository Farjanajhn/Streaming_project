
import ContactCard from '@/app/component/ContactCard';
import ContactForm from '@/app/component/ContactForm';
import styles from "./contact.module.css"

const page = () => {
  return (
    <>
      <div className={styles.container}>
      <h1>contact here</h1>
        <ContactCard></ContactCard>
        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>from you</span>
            <ContactForm/>
          </h2>
        </section>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.5747548822449!2d20.3126259!3d63.81525779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5af982bc639d%3A0xf5b656e7ddd78b49!2sTvistev%C3%A4gen%203A%2C%20907%2029%20Ume%C3%A5!5e0!3m2!1sen!2sse!4v1693157674283!5m2!1sen!2sse" width={100} height={450} style={{ border: 0 }} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default page;
import styles from  "@/app/contact/contact.module.css"
import Link from "next/link";
import { MdEmail,MdVoiceChat ,MdForum } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i><MdEmail /></i>
            <h2>Email</h2>
            <p>Monday to friday Expected</p>
            <p className={styles.last_para}>response time :72hours</p>
            <Link href="/"> Send Email <span></span></Link>
          </div>
          <div className={styles.grid_card}>
            <i><MdVoiceChat /></i>
            <h2>Live Chat</h2>
            <p>Weekdays:9AM- 5PM ET</p>
            <p className={styles.last_para}>9AM- 5PM ET</p>
            <Link href="/"> Send Email <span></span></Link>
          </div>
          <div className={styles.grid_card}>
            <i><MdForum /></i>
            <h2>Community Forum</h2>
            <p>Monday to friday Expected</p>
            <p className={styles.last_para}>response time :72hours</p>
            <Link href="/" className={styles.anchorLink}> Ask The Community<span></span></Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ContactCard;
'use client'
import { useState } from "react";
import styles from "@/app/contact/contact.module.css"


const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    massage: ""
  })
    
    function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;
      setUser()

    }

  function handleSubmit() {
    
  }
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name :
          <input type="text" name="username" id="username" required
            placeholder="Enter your name" value={user.username}
            onChange={handleChange}
          autoComplete="off"/>
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Enter your email :
          <input type="text" name="email" id="email"
            placeholder="Enter your email" value={user.email}  required  onChange={ handleChange}  autoComplete="off" />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Enter your phone :
          <input type="text" name="phone" id="phone" value={user.phone}onChange={ handleChange}  autoComplete="off"
            placeholder="Enter your phone" required />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="massage" className={styles.label}>
          Massage :
          <textarea name="massage" id="massage" value={user.massage} rows ={5}
            placeholder="Enter your massage"   onChange={ handleChange}  required autoComplete="off" />
        </label>
      </div>
      <div>
        <button type="submit">Send Massage</button>
      </div>
      
    </form>
  );
};

export default ContactForm;
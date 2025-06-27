import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '600px',
      margin: '0 auto',
    },
    content: {
      display: 'flex',
      gap: '2rem',
      flexDirection: window.innerWidth > 768 ? 'row' : 'column',
    },
    formSection: {
      flex: '1',
    },
    infoSection: {
      flex: '1',
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      borderRadius: '8px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '1rem',
      color: '#333',
    },
    input: {
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    textarea: {
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    successMessage: {
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '1rem',
      borderRadius: '4px',
      marginBottom: '1rem',
      display: showSuccess ? 'block' : 'none',
    },
    infoTitle: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '1rem',
    },
    infoItem: {
      marginBottom: '1rem',
      fontSize: '1.1rem',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Whether you have a question about our programs,
          volunteering, or anything else, our team is ready to help.
        </p>
      </header>

      <div style={styles.content}>
        <div style={styles.formSection}>
          <div style={styles.successMessage}>
            Message sent successfully! We'll get back to you soon.
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              />
            </div>

            <button 
              type="submit" 
              style={{
                ...styles.button,
                ':hover': {
                  backgroundColor: '#0056b3'
                }
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>Get in Touch</h2>
          <div style={styles.infoItem}>
            <strong>Address:</strong><br />
            123 Community Lane<br />
            Nonprofit City, NP 12345<br />
            United States
          </div>
          <div style={styles.infoItem}>
            <strong>Phone:</strong><br />
            +1 (555) 123-4567
          </div>
          <div style={styles.infoItem}>
            <strong>Email:</strong><br />
            contact@ngoname.org
          </div>
          <div style={styles.infoItem}>
            <strong>Hours:</strong><br />
            Monday - Friday: 9:00 AM - 5:00 PM<br />
            Saturday: 10:00 AM - 2:00 PM<br />
            Sunday: Closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
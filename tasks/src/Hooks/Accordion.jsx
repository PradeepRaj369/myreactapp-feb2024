import React, { useState } from 'react';

// Simple styling
const styles = {
  accordionItem: {
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '100%',
    textAlign: 'left',
    padding: '10px',
    fontSize: '18px',
    border: 'none',
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
    outline: 'none',
  },
  content: {
    padding: '10px',
  },
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the isOpen state
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div style={styles.accordionItem}>
      <button
        style={styles.button}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && (
        <div style={styles.content}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

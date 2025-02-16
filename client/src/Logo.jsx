import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

function Logo() {
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff', // black background
    padding: '20px',
    borderRadius: '8px'
  };

  const brainIconStyle = {
    fontSize: '3rem',
    color: '#000', // light blue color
    marginRight: '20px'
  };

  const textContainerStyle = {
    color: '#000' // white text
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.5rem'
  };

  const taglineStyle = {
    fontSize: '1rem'
  };

  return (
    <div style={logoContainerStyle}>
      <FontAwesomeIcon icon={faBrain} style={brainIconStyle} />
      <div style={textContainerStyle}>
        <div style={titleStyle}>APTI-GROUND</div>
        <div style={taglineStyle}>AN APTITUDE PLAYGROUND</div>
      </div>
    </div>
  );
}

export default Logo;




document.addEventListener('DOMContentLoaded', (event) => {
  loadSelections();
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener('change', saveSelection);
  });
});

function saveSelection(event) {
  const questionId = event.target.name;
  const selectedOption = event.target.value;
  localStorage.setItem(questionId, selectedOption);
}

function loadSelections() {
  document.querySelectorAll('.quiz-question').forEach((question) => {
      const questionId = question.getAttribute('data-question-id');
      const savedOption = localStorage.getItem(`q${questionId}`);
      if (savedOption) {
          const radio = question.querySelector(`input[value="${savedOption}"]`);
          if (radio) {
              radio.checked = true;
          }
      }
  });
}

function navigateToNextQuestion() {
  // Implement navigation logic here
  // For example, show/hide different question sections
}

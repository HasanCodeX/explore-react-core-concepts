import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

export default function Friend({ title }) {
  return (
    <div className="friend">
      <h4>{title}</h4> {/* Displaying the title of each friend */}
    </div>
  );
}

// Prop type validation
Friend.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a required string
};

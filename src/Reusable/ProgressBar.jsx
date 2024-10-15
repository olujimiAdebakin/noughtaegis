import React from 'react'
import "./ProgressBar.css"
import PropTypes from 'prop-types';

const ProgressBar = ({ skillName, level }) => {
  return (
    <div className="progress-bar-container">
      <div className='progressive'>
        <span>{skillName}</span>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

    ProgressBar.propTypes = {
      skillName: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    };


export default ProgressBar
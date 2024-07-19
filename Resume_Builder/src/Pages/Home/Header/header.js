import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBriefcase, faGraduationCap, faTools } from '@fortawesome/free-solid-svg-icons';
import '../../../App.css'; // Ensure correct path to App.css

function Header() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faAddressCard} />{' '}
          <NavLink to='/' exact activeClassName="active">Personal Information</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faBriefcase} />{' '}
          <NavLink to='/workExperience' activeClassName="active">Work Experience</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faGraduationCap} />{' '}
          <NavLink to='/education' activeClassName="active">Education</NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faTools} />{' '}
          <NavLink to='/keySkill' activeClassName="active">Key Skill</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

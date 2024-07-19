import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Education() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    type: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  });

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const addUser = () => {
    localStorage.setItem("educationalDetails", JSON.stringify(userInfo));
  };

  const getFormData = (e) => {
    e.preventDefault();
    addUser();
    console.log(`Type: ${userInfo.type}`);
    console.log(`University: ${userInfo.university}`);
    console.log(`Degree: ${userInfo.degree}`);
    console.log(`StartYear: ${userInfo.startYear}`);
    console.log(`EndYear: ${userInfo.endYear}`);
  };

  return (
    <div>
      <form onSubmit={getFormData}>
        <fieldset>
          <legend>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </legend>
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={userInfo.type}
            onChange={handleInputForm}
          />
          <br />
          <br />
          <input
            type="text"
            name="university"
            placeholder="University"
            value={userInfo.university}
            onChange={handleInputForm}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={userInfo.degree}
            onChange={handleInputForm}
          />
          <br />
          <br />
          <input
            type="text"
            name="startYear"
            placeholder="Start Year"
            value={userInfo.startYear}
            onChange={handleInputForm}
          />
          <input
            type="text"
            name="endYear"
            placeholder="End Year"
            value={userInfo.endYear}
            onChange={handleInputForm}
          />
          <br />
          <br />
          <button type="submit">UPDATE</button>
        </fieldset>
        <br />
        <button type="button" onClick={() => navigate(-1)}>Back</button>
        <button type="button" onClick={() => navigate("/keySkill")}>Next</button>
      </form>
    </div>
  );
}

export default Education;

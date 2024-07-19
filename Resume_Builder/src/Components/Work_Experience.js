import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function WorkExperience() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        jobTitle: "",
        organizationName: "",
        startYear: "",
        endYear: "",
    });

    const handleInputForm = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const addUser = () => {
        localStorage.setItem('workExperience', JSON.stringify(userInfo));
    };

    const getFormData = (e) => {
        e.preventDefault();
        addUser();
        console.log(`Job Title: ${userInfo.jobTitle}`);
        console.log(`Organization Name: ${userInfo.organizationName}`);
        console.log(`Start Year: ${userInfo.startYear}`);
        console.log(`End Year: ${userInfo.endYear}`);
    };

    return (
        <div>
            <h1>Work Experience</h1>
            <form onSubmit={getFormData}>
                <fieldset>
                    <legend>
                        <FontAwesomeIcon icon={faBriefcase} /> ( Organization / Company ) 1
                    </legend>
                    <label htmlFor="jobTitle">Job Title</label> <br />
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={userInfo.jobTitle}
                        onChange={handleInputForm}
                    /> <br />
                    <label htmlFor="organizationName">Organization Name</label> <br />
                    <input
                        type="text"
                        name="organizationName"
                        placeholder="Organization Name"
                        value={userInfo.organizationName}
                        onChange={handleInputForm}
                    /> <br /><br />
                    <label htmlFor="startYear">Start Year</label> <br />
                    <input
                        type="text"
                        name="startYear"
                        placeholder="Start Year"
                        value={userInfo.startYear}
                        onChange={handleInputForm}
                    /> <br />
                    <label htmlFor="endYear">End Year</label> <br />
                    <input
                        type="text"
                        name="endYear"
                        placeholder="End Year"
                        value={userInfo.endYear}
                        onChange={handleInputForm}
                    /> <br /><br />
                    <button type="submit">Submit</button>
                </fieldset>
                <br />
                <button type="button" onClick={() => navigate(-1)}>Back</button>
                <button type="button" onClick={() => navigate('/education')}>Next</button>
            </form>
        </div>
    );
}

export default WorkExperience;

import React from 'react';
import './App.css';

const Resume = () => {
  return (
    <div className="resume">
      <h1>Omar Zoghayyer</h1>
      <p>Contact Information:</p>
      <ul>
        <li>Email: sfzoghayyer@gmail.com</li>
        <li>Phone: 415 980 9396</li>
      </ul>
      <p>Summary:</p>
      <p>
       Software Engineer in mind.
      </p>
      <p>Experience:</p>
      <ul>
        <li>
          ELectronic Arts (2020-present)
          <ul>
            <li>Position: Quality Disgner I and  Software Engineer</li>
            <li>
              Responsibilities:
              <ul>
                <li>Developed new features for the company's product</li>
                <li>Fixed bugs and issues reported by customers</li>
                <li>Participated in code reviews and team meetings</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Company B (2018-2020)
          <ul>
            <li>Position: Junior Software Engineer</li>
            <li>
              Responsibilities:
              <ul>
                <li>Assisted in the development of new features</li>
                <li>Helped debug and fix issues</li>
                <li>Learned new technologies and programming languages</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>Education:</p>
      <ul>
        <li>
          University of XYZ (2014-2018)
          <ul>
            <li>Degree: Bachelor's in Computer Science</li>
            <li>GPA: 3.8/4.0</li>
          </ul>
        </li>
      </ul>
      <p>Skills:</p>
      <ul>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    <dev>
      Written by ChatGBT
    </dev>
    </div>
  );
};

export default Resume;
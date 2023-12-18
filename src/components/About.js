import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h4 className="version">Version 1.0.0</h4>
      <p className="paragraph">
        Task Tracker is a simple and efficient application designed to help you manage your tasks
        and stay organized. Whether you're a student, professional, or anyone with a busy schedule,
        Task Tracker is here to streamline your task management process.
      </p>
      <h3 className="sub-header">Key Features</h3>
      <ul className="list">
        <li>Create and delete tasks</li>
        <li>Set reminders for important tasks</li>
        <li>User-friendly interface for easy task management</li>
      </ul>
      <h3 className="sub-header">Technology Stack</h3>
      <p className="paragraph">
        Task Tracker is powered by React for the frontend and uses a JSON server as a mock backend
        to demonstrate data persistence.
      </p>
      <p className="paragraph">
        Feel free to explore the application, add tasks, and utilize the features provided. If you have
        any feedback or questions, we would love to hear from you!
      </p>
      <Link to='/' className="link">Go Back</Link>
    </div>
  );
};

export default About;

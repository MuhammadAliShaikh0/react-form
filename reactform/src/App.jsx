import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    organization: '',
    organizationSize: '',
    industry: '',
    termsAccepted: false,
  });
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      organization: '',
      organizationSize: '',
      industry: '',
      termsAccepted: false,
    });
  };

  return (
    <div className="container">
      <h2>Try <big>Sign</big> free for 14 days</h2>
      <p className="q">
        Already have a Formstack account? <span className="o">start your trial in app</span>
      </p>

      <fieldset>
        <form onSubmit={handleSubmit}>
          <p className="e">
            <span className="dp">FIRST NAME</span>
            <input
              type="text"
              placeholder="JOHN"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <span className="cp">LAST NAME</span>
          </p>

          <input
            type="text"
            placeholder="DOE"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <p className="l">WORK EMAIL</p>
          <input
            type="email"
            placeholder="john@doe.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <p className="r">PASSWORD</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <p className="lp">ORGANIZATION NAME</p>
          <input
            type="text"
            placeholder="ABC Organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />

          <p className="lp">ORGANIZATION SIZE</p>
          <select
            name="organizationSize"
            value={formData.organizationSize}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select size
            </option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201-500">201-500</option>
            <option value="501+">501+</option>
          </select>

          <p className="lp">INDUSTRY</p>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
          </select>

          <p>
            Formstack has updated our terms of service effective January 4, 2023.
            We encourage you to read the documents in its entirety.
          </p>

          <p>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />{' '}
            I understand and agree to the{' '}
            <span className="yu">Formstack Privacy Policy, Software Services Agreement</span>
            and <span className="yu">Acceptable Use Policy.</span>
          </p>

          <button className="nm" type="submit">
            Start Free Trial
          </button>
        </form>
      </fieldset>

      <div className="student-list">
        <h3>Registered Students</h3>
        {students.length > 0 ? (
          <table border={1}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Organization Size</th>
                <th>Industry</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{student.organization}</td>
                  <td>{student.organizationSize}</td>
                  <td>{student.industry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students registered yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;

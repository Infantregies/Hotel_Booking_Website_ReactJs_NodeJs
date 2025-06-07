// components/Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.css'; // adjust this path as needed
import { useTranslation } from 'react-i18next';

function Registration() {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('');

  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log('Generated OTP:', otp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setOtpError('');
    setOtpSuccess('');

    if (otp !== generatedOtp) {
      setOtpError('Invalid OTP');
      return;
    } else {
      setOtpSuccess('Verified successfully');
    }

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('mobileNumber', mobileNumber);
      formData.append('email', email);
      formData.append('otp', otp);
      if (file) {
        formData.append('file', file);
      }

      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful!');
        setUsername('');
        setPassword('');
        setMobileNumber('');
        setEmail('');
        setOtp('');
        setFile(null);
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch');
    }
  };

 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>{t('Register')}</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label htmlFor="register-username">{t('Username')}</label><br />
            <input
              type="text"
              id="register-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="register-password">{t('Password')}</label><br />
            <input
              type="password"
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="register-mobileNumber">{t('Mobile Number')}</label><br />
            <input
              type="text"
              id="register-mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="register-email">{t('Email')}</label><br />
            <input
              type="email"
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputField"
              required
            />
          </div>
          <div className="otpContainer">
            <button
              type="button"
              className="generateOtpButton"
              onClick={generateOtp}
            >
              {t('Generate OTP')}
            </button>
            <br></br>
            <input
              type="text"
              id="register-otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="inputField otpField"
            />
            {otpError && <p className="error">{otpError}</p>}
            {otpSuccess && <p className="success">{otpSuccess}</p>}
          </div>
          
          <button
            type="submit"
            className="submitButton"
          >
            {t('Register')}
          </button>
        </form>
        <div style={{ marginTop: '10px' }}>
          <Link to="/" className="link">{t('Already have an account? Login')}</Link>
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </div>
      <div className="language-buttons">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
      </div>
    </div>
  );
}

export default Registration;

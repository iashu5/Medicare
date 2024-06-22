import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignIn.css'; // Import CSS file for styling
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp
  const [isForget, setIsForget] = useState(false); // State to toggle between SignIn and Forget Password
  const navigate = useNavigate();

  const validateSignIn = () => {
    let errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  const validateSignUp = () => {
    let errors = {};
    if (!signUpUsername) errors.signUpUsername = 'Username is required';
    if (!signUpMobile) errors.signUpMobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(signUpMobile)) errors.signUpMobile = 'Mobile number must be 10 digits';
    if (!signUpEmail) errors.signUpEmail = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(signUpEmail)) errors.signUpEmail = 'Email is invalid';
    if (!signUpPassword) errors.signUpPassword = 'Password is required';
    return errors;
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignIn();
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      // Implement your authentication logic here
      if (username === 'admin' && password === 'password') {
        await Swal.fire({
          icon: 'success',
          title: 'Welcome to MediCare',
          text: 'Authentication successful',
          showConfirmButton: false,
          timer: 2000 // 2 seconds
        });

        setAuth(true);
        navigate('/');
      } else {
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid credentials'
        });
      }
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignUp();
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      // Implement your sign-up logic here
      await Swal.fire({
        icon: 'success',
        title: 'Sign Up Success',
        text: 'Your account has been created successfully',
        showConfirmButton: false,
        timer: 2000 // 2 seconds
      });
      // Clear sign-up form fields after successful sign-up
      setSignUpUsername('');
      setSignUpMobile('');
      setSignUpEmail('');
      setSignUpPassword('');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email format'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Your API call or password reset logic here
        await Swal.fire({
          title: 'Success!',
          text: 'Password reset email sent successfully.',
          icon: 'success',
          timer: 8000, // 8 seconds
        });
        setTimeout(() => {
          navigate('/'); // Redirect to home page
        }, 4000);
      } catch (error) {
        await Swal.fire({
          title: 'Error!',
          text: 'Failed to send password reset email.',
          icon: 'error',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="auth-container">
      <div className="overlay-text">MediCare</div> {/* Add your custom text here */}
      <div className={`auth-card ${isSignUp || isForget ? 'slide-left' : ''}`}>
        {!isSignUp && !isForget && (
          <>
            <h2 className='signin'>Sign In</h2>
            <form onSubmit={handleSignInSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="input-field"
                />
                {errors.username && <span className="error">{errors.username}</span>}
              </div>
              <div className="input-container">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input-field"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <button type="submit" className="submit-button">Sign In</button>
            </form>
            <p onClick={() => setIsSignUp(true)} className="toggle-link">Don't have an account? Sign Up</p>
            <p onClick={() => setIsForget(true)} className="toggle-link">Forget Password</p>
          </>
        )}
        {isSignUp && (
          <>
            <h2 className='signin'>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  value={signUpUsername}
                  onChange={(e) => setSignUpUsername(e.target.value)}
                  placeholder="Username"
                  className="input-field"
                />
                {errors.signUpUsername && <span className="error">{errors.signUpUsername}</span>}
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={signUpMobile}
                  onChange={(e) => setSignUpMobile(e.target.value)}
                  placeholder="Mobile Number"
                  className="input-field"
                />
                {errors.signUpMobile && <span className="error">{errors.signUpMobile}</span>}
              </div>
              <div className="input-container">
                <input
                  type="email"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  placeholder="Email"
                  className="input-field"
                />
                {errors.signUpEmail && <span className="error">{errors.signUpEmail}</span>}
              </div>
              <div className="input-container">
                <input
                  type="password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  placeholder="Password"
                  className="input-field"
                />
                {errors.signUpPassword && <span className="error">{errors.signUpPassword}</span>}
              </div>
              <button type="submit" className="submit-button">Sign Up</button>
            </form>
            <p onClick={() => setIsSignUp(false)} className="toggle-link">Already have an account? Sign In</p>
          </>
        )}
        {isForget && (
          <>
            <h2 className='signin'>Forgot Password</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="input-field"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <span className="error">{formik.errors.email}</span>
                ) : null}
              </div>
              <button type="submit" className="submit-button">Reset Password</button>
            </form>
            <p onClick={() => setIsForget(false)} className="toggle-link">Back to Sign In</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SignIn.css'; // Import CSS file for styling

const SignIn = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp
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

  return (
    <div className="auth-container">
      <div className="overlay-text">MediCare</div> {/* Add your custom text here */}
      <div className={`auth-card ${isSignUp ? 'slide-left' : ''}`}>
        {!isSignUp ? (
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
          </>
        ) : (
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
      </div>
    </div>
  );
};

export default SignIn;

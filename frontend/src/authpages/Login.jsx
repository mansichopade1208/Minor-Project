import { useState } from "react";
import axios from "axios";
import {useNavigate,Link,} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLocked) {
      alert("Too many failed attempts. Please wait 15 minutes before trying again.");
      return;
    }
    
    if (!formData.email || !formData.password) {
      alert("Email and password are required.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful");
      setAttempts(0);
      const redirectPath =
        sessionStorage.getItem(
          "redirectAfterLogin"
          );

if (redirectPath) {
  
  sessionStorage.removeItem(
    "redirectAfterLogin");

  navigate(redirectPath);

} else {

  navigate("/");
}
    }  catch (error) {
  const newAttempts = attempts + 1;
  setAttempts(newAttempts);
  if (newAttempts >= 5) {
    setIsLocked(true);
    alert("Your account has been temporarily locked due to too many failed attempts. Please try again after 15 minutes.");
    setTimeout(() => {
      setIsLocked(false);
      setAttempts(0);
    }, 15 * 60 * 1000);
  } else {
    alert(`Invalid email or password. ${5 - newAttempts} attempts remaining.`);
  }
};

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h2 className="text-center mb-4 fw-bold">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="form-control mb-3"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="form-control mb-3"
                onChange={handleChange}
              />
              <button className="btn btn-dark w-100 rounded-pill" disabled={isLocked}>
                Login
              </button>
            </form>
            <p className="text-center mt-3">
              Don't have account?
              <Link to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}}

export default Login;

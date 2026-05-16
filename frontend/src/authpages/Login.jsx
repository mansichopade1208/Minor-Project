import { useState } from "react";
import axios from "axios";
import {useNavigate,Link,} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");
      const redirectPath =
  localStorage.getItem(
    "redirectAfterLogin"
  );

if (redirectPath) {

  localStorage.removeItem(
    "redirectAfterLogin"
  );

  navigate(redirectPath);

} else {

  navigate("/");
}
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
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
              <button className="btn btn-dark w-100 rounded-pill">
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
}

export default Login;
import React from "react";

const Register: React.FC = () => {
  return (
    <div>
      {/* Injecting same original CSS */}
      <style>{`
        body {
          height: 100vh;
          background: linear-gradient(135deg, #4c6ef5, #b197fc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Segoe UI', sans-serif;
        }

        .register-card {
          width: 420px;
          padding: 35px;
          background: rgba(255, 255, 255, 0.20);
          backdrop-filter: blur(10px);
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .register-card h3 {
          font-weight: 700;
          color: #fff;
        }

        .form-control {
          border-radius: 10px;
          height: 45px;
          border: none;
        }

        .btn-custom {
          height: 45px;
          border-radius: 10px;
          font-weight: 600;
          background: #ffffff;
          color: #4c6ef5;
          transition: 0.3s;
        }

        .btn-custom:hover {
          background: #f1f1f1;
        }

        .text-small a {
          color: #fff;
          opacity: 0.8;
          text-decoration: none;
        }

        .text-small a:hover {
          opacity: 1;
        }
      `}</style>

      {/* UI */}
      <div className="register-card">
        <h3 className="text-center mb-4">Create Account</h3>

        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Phone Number" />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Create Password" />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Confirm Password" />
          </div>

          <button className="btn btn-custom w-100 mt-2">Register</button>

          <p className="text-center mt-3 text-small">
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

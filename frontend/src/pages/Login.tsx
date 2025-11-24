import React from "react";

const Login: React.FC = () => {
  return (
    <>
      {/* 🔥 CSS directly inside component */}
      <style>{`
        .login-wrapper {
          height: 100vh;
          background: linear-gradient(135deg, #4c6ef5, #b197fc);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Segoe UI", sans-serif;
        }

        .login-card {
          width: 380px;
          padding: 35px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.28);
          animation: fadeIn 0.6s ease;
        }

        .login-card h3 {
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .form-control {
          height: 48px;
          border-radius: 12px;
          border: none !important;
          padding-left: 14px;
          font-size: 15px;
        }

        .form-control:focus {
          box-shadow: none;
        }

        .btn-login {
          height: 48px;
          border-radius: 12px;
          font-weight: 600;
          background: #ffffff;
          color: #4c6ef5;
          border: none;
          transition: 0.3s ease;
        }

        .btn-login:hover {
          background: #e7e7e7;
        }

        .text-link {
          color: #fff;
          opacity: 0.8;
          text-decoration: none;
          font-size: 14px;
        }

        .text-link:hover {
          opacity: 1;
        }

        .remember-label {
          color: #fff;
          font-size: 14px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* 🔥 HTML part */}
      <div className="login-wrapper">
        <div className="login-card">
          <h3 className="text-center mb-4">Welcome Back</h3>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="rememberMe" />
                <label className="form-check-label remember-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>

              <a href="#" className="text-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn btn-login w-100 mt-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

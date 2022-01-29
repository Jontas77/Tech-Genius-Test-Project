import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminLogin = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    admin_email: "",
    admin_password: "",
  });

  const { admin_email, admin_password } = inputs;

  const onChange = (e) => {
    setInputs((input) => {
      return { ...input, [e.target.name]: e.target.value };
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { admin_email, admin_password };

      const response = await fetch("/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);

        toast.success("Logged in successfully!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
      <form onSubmit={onSubmitForm}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5"> Admin Login</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="admin_email"
                      value={admin_email}
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Username
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="admin_password"
                      value={admin_password}
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      onChange={(e) => onChange(e)}
                    />
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default AdminLogin;

module.exports = (req, res, next) => {
  const {
    employee_email,
    employee_password,
    manager_email,
    manager_password,
    admin_email,
    admin_password,
  } = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  if (req.path === "/employee/login") {
    if (![employee_email, employee_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(employee_email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  if (req.path === "/manager/login") {
    if (![manager_email, manager_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(manager_email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  if (req.path === "/admin/sign-up") {
    if (![admin_email, admin_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(admin_email)) {
      return res.status(401).json("Invalid Email");
    }
  } else if (req.path === "/admin/login") {
    if (![admin_email, admin_password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if (!validEmail(admin_email)) {
      return res.status(401).json("Invalid Email");
    }
  }
  next();
};

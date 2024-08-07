// import "./login.scss";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import {
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { LoadingButton } from "@mui/lab";
// import { LoginAdmin } from "../../services/auth/authSlice";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const userString = localStorage.getItem("user");
//   const userObject = JSON.parse(userString);
//   useEffect(() => {
//     if (userObject && userObject.role === "admin") {
//       navigate("/admin");
//     }
//     if (userObject && userObject.role === "sale") {
//       navigate("/product");
//     }
//     if (userObject && userObject.role === "cashier") {
//       navigate("/SettingCashier");
//     }
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values, formikHelpers) => {
//       const params = {
//         navigate,
//         user: formik.values,
//       };
//       dispatch(LoginAdmin(params))
//         .unwrap()
//         .then((response) => {
//           if (response) {
//             setError(false);
//             const role = response.user.role;

//             let url = "/";
//             switch (role) {
//               case "sale":
//                 url = "/product";
//                 break;
//               case "admin":
//                 url = "/Admin";
//                 break;
//               case "cashier":
//                 url = "/Event";
//                 break;
//               default:
//                 url = "/";
//                 break;
//             }
//             navigate(url);
//           } else {
//             setError(true);
//           }
//         })
//         .catch(() => {
//           setError(true);
//         });
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Email format is not correct")
//         .required("Please Enter your Email"),
//       password: Yup.string()
//         .required("Please Enter your password")
//         .min(6, "Password should be 6 chars minimum.")
//         .matches(
//           /^(?=.*[a-zA-Z])(?=.*[0-9])/,
//           "Password must contain at least one character and a number"
//         ),
//     }),
//   });

//   return (
//     <div className="">
//       <section className="login-form">
//         <div className="wrapper-unsplashlpbydenbqqg">
//           <img
//             className="unsplashlpbydenbqqg-icon"
//             alt="FPT"
//             src="https://i.imgur.com/WErp8xb.jpeg"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//         <form className="content" onSubmit={formik.handleSubmit}>
//           {error && (
//             <div className="text mt-1 text-red-600 font-semibold">
//               Username or Password invalid
//             </div>
//           )}
//           <h1 className="login2">Login</h1>
//           <div className="content1">
//             <div className="input-field">
//               <div className="email">
//                 <div className="text-field">
//                   <input
//                     id="outlined-basic"
//                     className="inputs"
//                     placeholder="Enter your email"
//                     name="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     error={formik.touched.email && !!formik.errors.email}
//                   />
//                 </div>
//               </div>
//             </div>
//             {formik.errors.email && formik.touched.email && (
//               <div className="Fail">{formik.errors.email}</div>
//             )}
//             <div className="input-field">
//               <FormControl
//                 error={formik.touched.password && !!formik.errors.password}
//               >
//                 <div className="text-field">
//                   <input
//                     className="inputs"
//                     placeholder="Enter your password"
//                     name="password"
//                     id="outlined-adornment-password"
//                     type={showPassword ? "text" : "password"}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 </div>
//               </FormControl>
//             </div>
//             {formik.errors.password && formik.touched.password && (
//               <div className="Fail ">{formik.errors.password}</div>
//             )}
//             <h1 className="welcome-to-event">
//               Welcome to EVENT PAYMENT IMMEDIATE SYSTEM
//             </h1>
//           </div>
//           <div className="button">
//             <LoadingButton
//               fullWidth
//               size="large"
//               type="submit"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00C187",
//                 "&:hover": {
//                   backgroundColor: "#30ca9c",
//                 },
//               }}
//             >
//               Log in
//             </LoadingButton>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import "./login.scss";

// const Login = () => {
//   const [isHost, setIsHost] = useState(true);

//   const hostProps = useSpring({
//     transform: isHost ? "translateX(0%)" : "translateX(-100%)",
//     opacity: isHost ? 1 : 0,
//   });

//   const vendorProps = useSpring({
//     transform: isHost ? "translateX(100%)" : "translateX(0%)",
//     opacity: isHost ? 0 : 1,
//   });

//   const handleToggle = () => {
//     setIsHost(!isHost);
//   };

//   return (
//     <div className="container">
//       <div className="forms-container">
//         <div className="signin-signup">
//           <animated.form className="sign-in-form" style={hostProps}>
//             <h2 className="title">Host Login</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </animated.form>
//           <animated.form className="sign-up-form" style={vendorProps}>
//             <h2 className="title">Vendor Login</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </animated.form>
//         </div>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>Host Login</h3>
//             <p>
//               This is a host login section. You can manage your host account
//               from here.
//             </p>
//             <button
//               className="btn transparent"
//               id="sign-up-btn"
//               onClick={handleToggle}
//             >
//               Vendor Login
//             </button>
//           </div>
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>Vendor Login</h3>
//             <p>
//               This is a vendor login section. You can manage your vendor account
//               from here.
//             </p>
//             <button
//               className="btn transparent"
//               id="sign-in-btn"
//               onClick={handleToggle}
//             >
//               Host Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import styles from "./login.module.scss";

// const Login = () => {
//   const [isHost, setIsHost] = useState(true);

//   const handleToggle = () => {
//     setIsHost(!isHost);
//   };

//   return (
//     <div
//       style={{ maxWidth: "1920px" }}
//       className={`${styles.container1} ${
//         !isHost ? styles["sign-up-mode"] : ""
//       }`}
//     >
//       <div className={styles.formsContainer1}>
//         <div className={styles.signinSignup}>
//           <motion.form
//             className={`${styles.loginForm} ${styles.signInForm}`}
//             initial={{ x: isHost ? "0%" : "-100%", opacity: isHost ? 1 : 0 }}
//             animate={{ x: isHost ? "0%" : "-100%", opacity: isHost ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className={styles.title}>Host Login</h2>
//             <div className={styles.inputField}>
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className={styles.inputField}>
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input
//               type="submit"
//               value="Login"
//               className={`${styles.btn} ${styles.solid}`}
//             />
//           </motion.form>
//           <motion.form
//             className={`${styles.loginForm} ${styles.signUpForm}`}
//             initial={{ x: isHost ? "100%" : "0%", opacity: isHost ? 0 : 1 }}
//             animate={{ x: isHost ? "100%" : "0%", opacity: isHost ? 0 : 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className={styles.title}>Vendor Login</h2>
//             <div className={styles.inputField}>
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className={styles.inputField}>
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input
//               type="submit"
//               value="Login"
//               className={`${styles.btn} ${styles.solid}`}
//             />
//           </motion.form>
//         </div>
//       </div>
//       <div className={styles.panelsContainer1}>
//         <div className={`${styles.panel} ${styles.leftPanel}`}>
//           <div className={styles.content}>
//             <h3>Host Login</h3>
//             <p>
//               This is a host login section. You can manage your host account
//               from here.
//             </p>
//             <button
//               className={`${styles.btn} ${styles.transparent}`}
//               id="sign-up-btn"
//               onClick={handleToggle}
//             >
//               Vendor Login
//             </button>
//           </div>
//         </div>
//         <div className={`${styles.panel} ${styles.rightPanel}`}>
//           <div className={styles.content}>
//             <h3>Vendor Login</h3>
//             <p>
//               This is a vendor login section. You can manage your vendor account
//               from here.
//             </p>
//             <button
//               className={`${styles.btn} ${styles.transparent}`}
//               id="sign-in-btn"
//               onClick={handleToggle}
//             >
//               Host Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import "./login.scss";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import {
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { LoadingButton } from "@mui/lab";
// import { LoginAdmin } from "../../services/auth/authSlice";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const userString = localStorage.getItem("user");
//   const userObject = JSON.parse(userString);
//   useEffect(() => {
//     if (userObject && userObject.role === "admin") {
//       navigate("/admin");
//     }
//     if (userObject && userObject.role === "sale") {
//       navigate("/product");
//     }
//     if (userObject && userObject.role === "cashier") {
//       navigate("/SettingCashier");
//     }
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: async (values, formikHelpers) => {
//       const params = {
//         navigate,
//         user: formik.values,
//       };
//       dispatch(LoginAdmin(params))
//         .unwrap()
//         .then((response) => {
//           if (response) {
//             setError(false);
//             const role = response.user.role;

//             let url = "/";
//             switch (role) {
//               case "sale":
//                 url = "/product";
//                 break;
//               case "admin":
//                 url = "/Admin";
//                 break;
//               case "cashier":
//                 url = "/Event";
//                 break;
//               default:
//                 url = "/";
//                 break;
//             }
//             navigate(url);
//           } else {
//             setError(true);
//           }
//         })
//         .catch(() => {
//           setError(true);
//         });
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Email format is not correct")
//         .required("Please Enter your Email"),
//       password: Yup.string()
//         .required("Please Enter your password")
//         .min(6, "Password should be 6 chars minimum.")
//         .matches(
//           /^(?=.*[a-zA-Z])(?=.*[0-9])/,
//           "Password must contain at least one character and a number"
//         ),
//     }),
//   });

//   return (
//     <div className="">
//       <section className="login-form">
//         <div className="wrapper-unsplashlpbydenbqqg">
//           <img
//             className="unsplashlpbydenbqqg-icon"
//             alt="FPT"
//             src="https://i.imgur.com/WErp8xb.jpeg"
//             style={{ width: "100%", height: "100%" }}
//           />
//         </div>
//         <form className="content" onSubmit={formik.handleSubmit}>
//           {error && (
//             <div className="text mt-1 text-red-600 font-semibold">
//               Username or Password invalid
//             </div>
//           )}
//           <h1 className="login2">Login</h1>
//           <div className="content1">
//             <div className="input-field">
//               <div className="email">
//                 <div className="text-field">
//                   <input
//                     id="outlined-basic"
//                     className="inputs"
//                     placeholder="Enter your email"
//                     name="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     error={formik.touched.email && !!formik.errors.email}
//                   />
//                 </div>
//               </div>
//             </div>
//             {formik.errors.email && formik.touched.email && (
//               <div className="Fail">{formik.errors.email}</div>
//             )}
//             <div className="input-field">
//               <FormControl
//                 error={formik.touched.password && !!formik.errors.password}
//               >
//                 <div className="text-field">
//                   <input
//                     className="inputs"
//                     placeholder="Enter your password"
//                     name="password"
//                     id="outlined-adornment-password"
//                     type={showPassword ? "text" : "password"}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                   />
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 </div>
//               </FormControl>
//             </div>
//             {formik.errors.password && formik.touched.password && (
//               <div className="Fail ">{formik.errors.password}</div>
//             )}
//             <h1 className="welcome-to-event">
//               Welcome to EVENT PAYMENT IMMEDIATE SYSTEM
//             </h1>
//           </div>
//           <div className="button">
//             <LoadingButton
//               fullWidth
//               size="large"
//               type="submit"
//               variant="contained"
//               sx={{
//                 backgroundColor: "#00C187",
//                 "&:hover": {
//                   backgroundColor: "#30ca9c",
//                 },
//               }}
//             >
//               Log in
//             </LoadingButton>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import "./login.scss";

// const Login = () => {
//   const [isHost, setIsHost] = useState(true);

//   const hostProps = useSpring({
//     transform: isHost ? "translateX(0%)" : "translateX(-100%)",
//     opacity: isHost ? 1 : 0,
//   });

//   const vendorProps = useSpring({
//     transform: isHost ? "translateX(100%)" : "translateX(0%)",
//     opacity: isHost ? 0 : 1,
//   });

//   const handleToggle = () => {
//     setIsHost(!isHost);
//   };

//   return (
//     <div className="container">
//       <div className="forms-container">
//         <div className="signin-signup">
//           <animated.form className="sign-in-form" style={hostProps}>
//             <h2 className="title">Host Login</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </animated.form>
//           <animated.form className="sign-up-form" style={vendorProps}>
//             <h2 className="title">Vendor Login</h2>
//             <div className="input-field">
//               <i className="fas fa-user"></i>
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <i className="fas fa-lock"></i>
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//           </animated.form>
//         </div>
//       </div>
//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>Host Login</h3>
//             <p>
//               This is a host login section. You can manage your host account
//               from here.
//             </p>
//             <button
//               className="btn transparent"
//               id="sign-up-btn"
//               onClick={handleToggle}
//             >
//               Vendor Login
//             </button>
//           </div>
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>Vendor Login</h3>
//             <p>
//               This is a vendor login section. You can manage your vendor account
//               from here.
//             </p>
//             <button
//               className="btn transparent"
//               id="sign-in-btn"
//               onClick={handleToggle}
//             >
//               Host Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth/authSlice";
import styles from "./login.module.scss";

const Login = () => {
  const [isHost, setIsHost] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsHost(!isHost);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    console.log("status:", status);
    console.log("user:", user);
    if (status === "succeeded") {
      if (user.role === "host") {
        navigate("/dashboard");
      } else if (user.role === "vendor") {
        navigate("/home");
      }
    }
  }, [status, user, navigate]);

  return (
    <div
      style={{ maxWidth: "1920px" }}
      className={`${styles.container1} ${
        !isHost ? styles["sign-up-mode"] : ""
      }`}
    >
      <div className={styles.formsContainer1}>
        <div className={styles.signinSignup}>
          <motion.form
            className={`${styles.loginForm} ${styles.signInForm}`}
            initial={{ x: isHost ? "0%" : "-100%", opacity: isHost ? 1 : 0 }}
            animate={{ x: isHost ? "0%" : "-100%", opacity: isHost ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleLogin}
          >
            <h2 className={styles.title}>Host Login</h2>
            <div className={styles.inputField}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className={`${styles.btn} ${styles.solid}`}
              disabled={status === "loading"}
            />
            {status === "failed" && <p>{error}</p>}
          </motion.form>
          <motion.form
            className={`${styles.loginForm} ${styles.signUpForm}`}
            initial={{ x: isHost ? "100%" : "0%", opacity: isHost ? 0 : 1 }}
            animate={{ x: isHost ? "100%" : "0%", opacity: isHost ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleLogin}
          >
            <h2 className={styles.title}>Vendor Login</h2>
            <div className={styles.inputField}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.inputField}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className={`${styles.btn} ${styles.solid}`}
              disabled={status === "loading"}
            />
            {status === "failed" && <p>{error}</p>}
          </motion.form>
        </div>
      </div>
      <div className={styles.panelsContainer1}>
        <div className={`${styles.panel} ${styles.leftPanel}`}>
          <div className={styles.content}>
            <h3>Host Login</h3>
            <p>
              Đây là phần đăng nhập của host. Bạn có thể quản lý tài khoản host
              của mình tại đây.
            </p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              id="sign-up-btn"
              onClick={handleToggle}
            >
              Vendor Login
            </button>
          </div>
        </div>
        <div className={`${styles.panel} ${styles.rightPanel}`}>
          <div className={styles.content}>
            <h3>Vendor Login</h3>
            <p>
              Đây là phần đăng nhập của vendor. Bạn có thể quản lý tài khoản
              vendor của mình tại đây.
            </p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              id="sign-in-btn"
              onClick={handleToggle}
            >
              Host Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

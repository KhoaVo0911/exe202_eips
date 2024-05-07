import "./login.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginAsyncApi } from "../../services/login/loginSlice";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    navigate("/product");
  };
  const userString = localStorage.getItem("user");
  const userObject = JSON.parse(userString);
  useEffect(() => {
    if (userObject && userObject.role == "admin") {
      navigate("/admin");
    }
    if (userObject && userObject.role == "sale") {
      navigate("/product");
    }
    if (userObject && userObject.role == "cashier") {
      navigate("/SettingCashier");
    }
  }, []);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, formikHelpers) => {
      console.log("1", values, user);
      dispatch(loginAsyncApi(values))
        .then((response) => {
          if (response.meta.requestStatus == "rejected") {
            setError(true);
          }
          if (response.payload != undefined) {
            setError(false);
            localStorage.setItem("user", JSON.stringify(response.payload));
            // Redirect to the dashboard page after login

            const role = response.payload.role;

            let url = "/";
            switch (role) {
              case "sale":
                url = "/product";
                break;
              case "admin":
                url = "/Admin";
                break;
              case "cashier":
                url = "/Event";
                break;
              default:
                url = "/";
                break;
            }
            navigate(url);
          }
        })
        .catch((error) => {});
      //formikHelpers.resetForm();
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter your Username"),
      password: Yup.string().required("Please Enter your Password"),
    }),
  });

  return (
    <div className="login">
      <section className="login1">
        <div className="wrapper-unsplashlpbydenbqqg">
          <img
            className="unsplashlpbydenbqqg-icon"
            alt="FPT"
            src="https://i.imgur.com/WErp8xb.jpeg"
          />
        </div>
        <form className="content" onSubmit={formik.handleSubmit}>
          {error && (
            <div className="text mt-1 text-red-600 font-semibold">
              Username or Password valid
            </div>
          )}
          <h1 className="login2">Login</h1>
          <div className="content1">
            <div className="headline-and-subhead" />
            <div className="input-field">
              <div className="email">
                <div className="text-field">
                  <input
                    id="outlined-basic"
                    error={
                      formik.touched.username && formik.errors.username
                        ? true
                        : undefined
                    }
                    className="inputs"
                    placeholder="Enter your username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.username && formik.touched.username && (
                    <div className="text mt-1 text-red-600 font-semibold">
                      {formik.errors.username}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <FormControl
              error={
                formik.touched.password && formik.errors.password
                  ? true
                  : undefined
              }
              // className="w-full"
              // variant="outlined"
            >
              {/* <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel> */}

              <div className="text-field">
                <input
                  className="inputs"
                  placeholder="Enter your password"
                  name="password"
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            </FormControl>
            {formik.errors.password && formik.touched.password && (
              <div className="text mt-1 text-red-600 font-semibold">
                {formik.errors.password}
              </div>
            )}

            {/* <div className="email1">
              <div className="label-group">
                <div className="label1">Email address</div>
                <div className="password-hide-see1">
                  <img className="icon1" alt="" src="/icon-1.svg" />
                  <div className="hide1">Hide</div>
                </div>
              </div>
              <div className="text-field1">
                <input
                  className="inputs1"
                  placeholder="Enter your email address"
                  type="text"
                />
                <img className="icons1" alt="" src="/icons.svg" />
              </div>
              <div className="error-message1">Error message</div>
            </div> */}
            <h1 className="welcome-to-event">
              Welcome to EVENT PAYMENT IMMEDIATE SYSTEM
            </h1>
          </div>
          <div className="button">
            <button className="icons-parent" type="submit">
              <div className="sign-up">Log in</div>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useState } from "react";
import logo from "../logo.svg";
import { Alert, Input, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CTA } from "../components/buttons/button";
import colors from "../components/styles/colors";
import spacing from "../components/styles/spacing";
import { H2, P } from "../components/styles/typography";
import { Flex } from "../components/styles/flex";
import { ProjectDetails } from "../components/details/details";
import { loginData } from "../components/details/detailsData";

const checkUser = (values) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (values.username === "omerm" && values.password === "helloworld")
        resolve(true);
      reject(false);
    }, 500);
  });
};

export const Login = (props) => {
  const [open, setOpen] = useState();
  const [error, setError] = useState();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setError(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Must be at least 2 characters or more")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      formik.setSubmitting(true);
      checkUser(values)
        .then(() => {
          setOpen(true);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });
  return (
    <div>
      <Flex
        style={{
          flexDirection: "column",
          gap: spacing.lg,
        }}
      >
        <Flex flexDirection={"column"} alignItems={"center"} gap={spacing.s}>
          <img
            src={logo}
            alt="React Image"
            style={{ width: "100px", height: "100px", padding: "0px" }}
          />
          <H2>Welcome</H2>
          <P>Please use your details to login</P>
        </Flex>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: spacing.lg,
            backgroundColor: colors.midBlue,
          }}
        >
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: spacing.xs,
              maxWidth: 315,
            }}
          >
            <label htmlFor="name">User name</label>

            <Input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{ width: 315, color: colors.purple100 }}
              color={formik.errors.username ? "error" : "primary"}
            />
            {formik.errors.username ? (
              <div style={{ color: colors.red }}>{formik.errors.username}</div>
            ) : null}
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              gap: spacing.xs,
              maxWidth: 315,
            }}
          >
            <label htmlFor="name">Password</label>

            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              value={formik.values.email}
              style={{ width: 315, color: colors.purple100 }}
            />
            {formik.errors.password ? (
              <div style={{ color: colors.red }}>{formik.errors.password}</div>
            ) : null}
          </section>
          <CTA
            variant="primary"
            buttonSize="md"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            style={{
              width: 315,
            }}
          >
            Login
          </CTA>
        </form>
        <div>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            //   message="Note archived"
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Logged-in
            </Alert>
          </Snackbar>
          <Snackbar
            open={error}
            autoHideDuration={4000}
            onClose={handleClose}
            //   message="Note archived"
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              User name and password are incorrect{" "}
            </Alert>
          </Snackbar>
        </div>
      </Flex>
    </div>
  );
};

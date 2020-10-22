import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import { COLOR } from "index";
import React from "react";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import * as yup from "yup";

const homeStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.lightWhite,
    paddingTop: theme.spacing(21),
    paddingBottom: theme.spacing(18),
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  box: {
    border: `2px solid ${COLOR.primary}`,
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
    display: " flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  field: {
    marginBottom: theme.spacing(3),
  },
}));

const helperTextStyles = makeStyles((theme) => ({
  root: {
    color: "red",
  },
}));

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .max(48, "Maxium length is 48")
    .label("Email")
    .email("Invalid email")
    .required("* Email is required"),
  name: yup
    .string()
    .trim()
    .required("* Name is required")
    .matches(
      /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
      {
        message: "Invalid name",
      }
    ),
  subject: yup.string().trim().required("* Subject is required"),
  message: yup.string().trim().required("* Message is required"),
});

function Contact() {
  const classes = homeStyles();
  const helperTextStyle = helperTextStyles();
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  return (
    <div className={classes.root} id="contact">
      <Container maxWidth="lg">
        <Typography variant="h2" style={{ fontWeight: 800, marginBottom: 48 }}>
          Contact Me
        </Typography>
        <div
          className={classes.contact}
          style={{ flexDirection: isDesktopOrLaptop ? "row" : "column" }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div className={classes.box}>
              <div>
                <Typography variant="h6">
                  <strong>LOCATION</strong>
                </Typography>
                <Typography variant="body1">District 4, HCMC</Typography>
              </div>
              <FiMapPin size={48} color={COLOR.primary} />
            </div>
            <div className={classes.box}>
              <div>
                <Typography variant="h6">
                  <strong>EMAIL</strong>
                </Typography>
                <Typography variant="body1">lminhtam99@gmail.com</Typography>
              </div>
              <FiMail size={48} color={COLOR.primary} />
            </div>
            <div className={classes.box}>
              <div>
                <Typography variant="h6">
                  <strong>PHONE</strong>
                </Typography>
                <Typography variant="body1">(+84) 076 7494 146</Typography>
              </div>
              <FiPhoneCall size={48} color={COLOR.primary} />
            </div>
          </div>
          <Formik
            initialValues={{
              email: "",
              name: "",
              subject: "",
              message: "",
            }}
            isInitialValid={false}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isValid,
              errors,
              touched,
              setFieldTouched,
            }) => {
              return (
                <div
                  style={{
                    flex: 2,
                    paddingLeft: isDesktopOrLaptop ? 48 : 0,
                    paddingTop: isDesktopOrLaptop ? 0 : 24,
                  }}
                >
                  <TextField
                    placeholder="Name"
                    variant="outlined"
                    fullWidth
                    className={classes.field}
                    helperText={errors.name && errors.name}
                    FormHelperTextProps={{ classes: helperTextStyle }}
                    value={values.name}
                    onChange={handleChange("name")}
                    onTouchStart={() => setFieldTouched("name")}
                    onBlur={handleBlur("name")}
                  />
                  <TextField
                    placeholder="Email"
                    variant="outlined"
                    fullWidth
                    className={classes.field}
                    helperText={errors.email && errors.email}
                    FormHelperTextProps={{ classes: helperTextStyle }}
                    value={values.email}
                    onChange={handleChange("email")}
                    onTouchStart={() => setFieldTouched("email")}
                    onBlur={handleBlur("email")}
                  />
                  <TextField
                    placeholder="Subject"
                    variant="outlined"
                    fullWidth
                    className={classes.field}
                    helperText={errors.subject && errors.subject}
                    FormHelperTextProps={{ classes: helperTextStyle }}
                    value={values.subject}
                    onChange={handleChange("subject")}
                    onTouchStart={() => setFieldTouched("subject")}
                    onBlur={handleBlur("subject")}
                  />
                  <TextField
                    placeholder="Your message"
                    variant="outlined"
                    fullWidth
                    multiline
                    className={classes.field}
                    helperText={errors.message && errors.message}
                    FormHelperTextProps={{ classes: helperTextStyle }}
                    value={values.message}
                    onChange={handleChange("message")}
                    onTouchStart={() => setFieldTouched("message")}
                    onBlur={handleBlur("message")}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    style={{ marginTop: 16, fontWeight: 700 }}
                  >
                    Send Message
                  </Button>
                </div>
              );
            }}
          </Formik>
        </div>
      </Container>
    </div>
  );
}

export default Contact;

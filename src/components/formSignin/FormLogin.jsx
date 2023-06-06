import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Lock,
} from "@mui/icons-material";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { UseSignin } from "../../hooks/UseUser";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const { createSignin } = UseSignin();
  const navigate = useNavigate();
  const login = {
    email,
    password,
  };
 
  const validateForm = () => {
    if (!email || !password || emailError || passwordError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [email, password, emailError, passwordError]);

  const handlePasswordBlur = () => {
    validatePassword();
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must have at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signin = await createSignin(login);
 
    if (!signin) {
      toast.success("Login successful!", {
        className: "custom-toast",
      });
      setTimeout(() => {
        
        navigate("/");
        window.location.reload()
      }, 1000);
     
    } else {
      toast.success(signin, {
        className: "custom-toast",
      });
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailFocus = () => {
    setEmailPlaceholder("");
  };

  const handleEmailBlur = () => {
    setEmailPlaceholder("Email");
    validateEmail();
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  return (
    <GridContainer container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center" gutterBottom>
          <PersonPinIcon style={{ fontSize: "4.5rem", color: "#423838" }} />
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isFormValid} // Desabilitar o botão caso o formulário não seja válido
              size="small" // Tornar o botão menor
            >
              Login
            </Button>
          </div>
        </Form>
      </Grid>
    </GridContainer>
  );
};

export default FormLogin;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .password-match {
    color: green;
  }
`;

export const GridContainer = styled(Grid)`
  display: flex;
  margin-top: 70px;

  .custom-toast {
    background-color: #fff;
    color: #000;
    font-size: 16px;
  }
`;

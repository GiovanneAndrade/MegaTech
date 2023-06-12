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
  CreditCard,
} from "@mui/icons-material";
import styled from "styled-components";
import LockIcon from "@mui/icons-material/Lock";
import CheckIcon from "@mui/icons-material/Check";
import TextMask from "react-text-mask";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UseUser } from "../../hooks/UseUser";

const UserRegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [cpfPlaceholder, setCpfPlaceholder] = useState("CPF");
  const [emailError, setEmailError] = useState("");
  const [cpfError, setCpfError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const signup = {
    name,
    cpf,
    email,
    password,
    confirmPassword,
    phone: 1243758689,
  };
  const validateForm = () => {
    if (
      !name ||
      !email ||
      !cpf ||
      !password ||
      !confirmPassword ||
      emailError ||
      cpfError ||
      passwordError ||
      confirmPasswordError ||
      !passwordMatch
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [
    name,
    email,
    cpf,
    password,
    confirmPassword,
    emailError,
    cpfError,
    passwordError,
    confirmPasswordError,
    passwordMatch,
  ]);
  const handlePasswordBlur = () => {
    validatePassword();
  };

  const handleConfirmPasswordBlur = () => {
    validateConfirmPassword();
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must have at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validateConfirmPassword(e.target.value);
  };

  const validateConfirmPassword = (confirmPasswordValue) => {
    if (confirmPasswordValue !== password) {
      setConfirmPasswordError("Passwords do not match");
      setPasswordMatch(false);
    } else {
      setConfirmPasswordError("");
      setPasswordMatch(true);
    }
  };
  const { createUser } = UseUser();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const hasError = await createUser(signup);
    if (hasError) {
      toast.error("Erro ao cadastrar usuário", {
        className: "custom-toast",
      });
      return;
    }
    toast.success("Cadastro realizado com sucesso!", {
      className: "custom-toast",
    });
    
    setTimeout(() => {
      navigate("/signin");
    }, 1000); 
  };
  
  

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleNameFocus = () => {
    setNamePlaceholder("");
  };

  const handleNameBlur = () => {
    setNamePlaceholder("Name");
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

  const handleCpfFocus = () => {
    setCpfPlaceholder("");
  };

  const handleCpfBlur = () => {
    setCpfPlaceholder("CPF");
    validateCpf();
  };

  const validateCpf = () => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const unmaskedCpf = cpf.replace(/[.-]/g, ""); // Remove os pontos e traços do CPF
    if (!unmaskedCpf || !cpfRegex.test(cpf)) {
      setCpfError("Invalid CPF format");
    } else {
      setCpfError("");
    }
  };

  return (
    <GridContainer container justifyContent="center" sx={{ padding:'12px'}}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h5" align="center" gutterBottom>
          Registra-se
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
          />
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
            label="CPF"
            fullWidth
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onBlur={handleCpfBlur}
            error={!!cpfError}
            helperText={cpfError}
            InputProps={{
              inputComponent: TextMask,
              inputProps: {
                mask: [
                  /\d/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  ".",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ],
              },
              startAdornment: (
                <InputAdornment position="start">
                  <CreditCard />
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
                  <LockIcon />
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
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            value={confirmPassword}
            onChange={handleConfirmPasswordChange} // Atualizado para chamar a função handleConfirmPasswordChange
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CheckIcon
                    className={passwordMatch ? "password-match" : ""}
                  />{" "}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              Register
            </Button>
          </div>
        </Form>
      </Grid>
    </GridContainer>
  );
};

export default UserRegistrationForm;

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

const NewTextField = styled(TextField)``;

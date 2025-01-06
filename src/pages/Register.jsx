import React, { useState } from "react";
import { TextField, Button, Grid2, Typography, Box } from "@mui/material";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    // Email validation (regex)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailRegex.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }

    // Name validation
    if (!name) {
      formErrors.name = "Name is required.";
    }

    // Username validation (no spaces allowed)
    const usernameRegex = /^\S*$/;
    if (!username || !usernameRegex.test(username)) {
      formErrors.username = "Username cannot contain spaces.";
    }

    // Password validation (regex)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      formErrors.password =
        "Password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    // Confirm Password validation (must match password)
    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(formErrors);

    // If no errors, show the form data in an alert
    if (Object.keys(formErrors).length === 0) {
      const formData = {
        email,
        name,
        username,
        password,
      };
      alert("Form Data Submitted: " + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 3,
      }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid2 container spacing={3}>
          {/* Email */}

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />

          {/* Name */}

          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />

          {/* Username */}

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!errors.username}
            helperText={errors.username}
          />

          {/* Password */}

          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />

          {/* Confirm Password */}

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />

          {/* Submit Button */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ padding: 1.5 }}
          >
            Register
          </Button>
        </Grid2>
      </form>
    </Box>
  );
};

export default RegisterForm;

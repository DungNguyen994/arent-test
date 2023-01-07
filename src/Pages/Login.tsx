import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { ROUTES } from "../routes";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      navigate(ROUTES.HOME);
    }, 1000);
  };
  return (
    <Stack
      sx={{ mt: "10%" }}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      {loading && <LoadingSpinner />}
      <Box component="img" src="/Imagine/logo.png" alt="App Logo" />
      <Stack
        width="50%"
        component="form"
        onSubmit={onLogin}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Stack spacing={3} width={{ xs: "100%", lg: "50%" }} mb={5}>
          <TextField
            label="Username"
            id="username-input"
            variant="standard"
            required
          />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            required
          />
        </Stack>
        <Button className="btn-main" type="submit">
          ログインする
        </Button>
        <Button className="btn-main" onClick={() => navigate(ROUTES.COLUMN)}>
          コラム一覧
        </Button>
      </Stack>
    </Stack>
  );
}

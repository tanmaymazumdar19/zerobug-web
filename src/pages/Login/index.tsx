import { useForm } from "react-hook-form";
import { Box, Stack, Paper, Button, Typography } from "@mui/material";
import InputTypeTextAndEmail from "../../components/Reuseable/Inputcomp";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { storeLoginToken } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.form`
  label {
    top: -4px;
  }

  input {
    background-color: white;
    border-radius: 12px;
  }

  > button[type="submit"] {
    font-size: 14px;
    :hover {
      background-color: rgb(0 138 181);
    }
  }
`;

const defaultValues = {
  email: "",
  password: "",
};
const password = "password";
const email = "email";

function AdminLoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues });

  const loginSectionStyle = {
    backgroundColor: "#b6f0f633",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
  };

  const loginDiv = {
    backgroundColor: "white",
    padding: "2rem",
  };

  const paperStyle = {
    width: "30rem",
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* <NavarLogoImg src={mainLogo} /> */}
      <Box component="section" sx={loginSectionStyle}>
        <Paper elevation={2} sx={paperStyle}>
          <Box sx={loginDiv}>
            <Stack spacing={1} sx={{ mb: 3 }} alignItems="center">
              <Typography
                variant="h1"
                sx={{
                  fontSize: "1.75rem",
                  fontWeight: "var(--font600)",
                }}
              >
                Admin Login
              </Typography>
            </Stack>
            <StyledForm
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  storeLoginToken({
                    token: btoa(`${data?.email}:${data?.password}`),
                    isAdmin: data?.email === "admin@demo.com",
                  })
                );
                reset();
                navigate("/admin");
              })}
            >
              <Stack spacing={2}>
                <InputTypeTextAndEmail
                  type={email}
                  registerWith={email}
                  label="Email Address"
                  control={control}
                  register={register}
                  isError={!!errors?.email?.message}
                  helperText={errors?.email?.message}
                />

                <InputTypeTextAndEmail
                  type={password}
                  label="Password"
                  registerWith={password}
                  watch={watch}
                  control={control}
                  register={register}
                  isError={!!errors?.password?.message}
                  helperText={errors?.password?.message}
                />
              </Stack>

              <Button
                fullWidth
                disableElevation
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#299FB5",
                  mt: 4,
                  borderRadius: "12px",
                  textTransform: "capitalize",
                }}
              >
                CONTINUE
              </Button>
            </StyledForm>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default AdminLoginPage;

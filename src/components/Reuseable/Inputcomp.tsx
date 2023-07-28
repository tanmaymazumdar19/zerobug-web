import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

function InputTypeTextAndEmail({
  type,
  label,
  isError,
  control,
  register,
  helperText,
  registerWith,
}: any) {
  return (
    <Controller
      name={registerWith}
      control={control}
      render={() => {
        return (
          <TextField
            type={type}
            label={label}
            error={isError || false}
            variant="outlined"
            helperText={helperText}
            {...register(registerWith, {
              required: `* ${label} is required`,
              validate:
                type === "email"
                  ? (value: string) =>
                      emailRegex.test(value) ||
                      "* Please enter a Valid Email !!"
                  : null,
            })}
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: isError ? "10px" : 0,
            }}
          />
        );
      }}
    />
  );
}

export default InputTypeTextAndEmail;

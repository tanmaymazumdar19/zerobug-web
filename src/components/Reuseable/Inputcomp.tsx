import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

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
            })}
            sx={{
              width:'100%',
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

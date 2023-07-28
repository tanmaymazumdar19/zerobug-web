import { useForm } from "react-hook-form";
import { Stack, Box, Button } from "@mui/material";

import { StyledForm } from "../../Login/style";
import InputTypeTextAndEmail from "../../../components/Reuseable/Inputcomp";

const defaultValues: any = [
  { name: "empName", value: "", type: "text", label: "Employee Name" },
  { name: "empAge", value: "", type: "text", label: "Employee Age" },
  { name: "empGender", value: "", type: "text", label: "Employee Gender" },
  { name: "compName", value: "", type: "text", label: "Company Name" },
  { name: "role", value: "", type: "text", label: "Role" },
  { name: "techStack", value: "", type: "text", label: "Tech Stack" },
  { name: "experience", value: "", type: "text", label: "Experience" },
  { name: "availability", value: "", type: "text", label: "Availability" },
  { name: "resume", value: "", type: "text", label: "Resume" },
];

const EmployeeDetails = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <Stack spacing={2}>
      <StyledForm
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        {defaultValues.map((item: any) => {
          return (
            <InputTypeTextAndEmail
              type={item.type}
              registerWith={item.name}
              label={item.label}
              control={control}
              register={register}
              isError={!!errors?.name?.message}
              helperText={errors?.name?.message}
            />
          );
        })}
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "flex-end",
            justifyContent: "flex-end",

            button: {
              borderRadius: "8px",
            },
          }}
        >
          <Button variant="outlined">Cancel</Button>
          <Button variant="contained" type="submit" disableElevation>
            Submit
          </Button>
        </Box>
      </StyledForm>
    </Stack>
  );
};

export default EmployeeDetails;

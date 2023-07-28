import React from "react";
import InputTypeTextAndEmail from "../../../components/Reuseable/Inputcomp";
import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { StyledForm } from "../../Login/style";

const defaultValues: any = [
  {name:"empName", value: "", type: "text", label: "Employee Name" },
  {name:"empAge", value: "", type: "text", label: "Employee Age" },
 {name:"empGender", value: "", type: "text", label: "Employee Gender" },
  {name:"compName", value: "", type: "text", label: "Company Name" },
  {name:"role", value: "", type: "text", label: "Role" },
   {name:"techStack", value: "", type: "text", label: "Tech Stack" },
   {name:"experience", value: "", type: "text", label: "Experience" },
   {name:"availability", value: "", type: "text", label: "Availability" },
   {name:"resume", value: "", type: "text", label: "Resume" },
];


const EmployeeDetails = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <Stack spacing={2}>
      <StyledForm
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        {(defaultValues).map((item: any) => {
          console.log("item", item);
          return (
            <InputTypeTextAndEmail
              type={item.type}
              registerWith={item.name}
              label={item.label}
              control={control}
              register={register}
              // isError={!!errors?.[a]?.message}
              // helperText={errors?.email?.message}
            />
          );
        })}
      </StyledForm>
    </Stack>
  );
};

export default EmployeeDetails;

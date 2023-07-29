import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Stack, Box, Button } from "@mui/material";

import { StyledForm } from "../../Login/style";
import { setShowModal } from "../../../redux/slices/modalSlice";
import InputTypeTextAndEmail from "../../../components/Reuseable/Inputcomp";

const EmployeeDetails = ({ userDetails }: any) => {
  const defaultValues = {
    empName: userDetails.empName || "",
    empAge: userDetails.age || "",
    empGender: userDetails.gender || "",
    compName: userDetails.compName || "",
    role: userDetails.role[0] || "",
    techStack: userDetails.techStack[0] || "",
    experience: userDetails.experience || "",
    availability: userDetails.availability || "",
    resume: userDetails.resume?.fileLinks || "",
  };

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });

  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(setShowModal(false));
  };

  return (
    <Stack spacing={2}>
      <StyledForm
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
      >
        <InputTypeTextAndEmail
          type="text"
          registerWith="empName"
          label="Employee Name"
          control={control}
          register={register}
          isError={!!errors?.empName?.message}
          helperText={errors?.empName?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="empAge"
          label="Employee Age"
          control={control}
          register={register}
          isError={!!errors?.empAge?.message}
          helperText={errors?.empAge?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="empGender"
          label="Employee Gender"
          control={control}
          register={register}
          isError={!!errors?.empGender?.message}
          helperText={errors?.empGender?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="compName"
          label="Company Name"
          control={control}
          register={register}
          isError={!!errors?.compName?.message}
          helperText={errors?.compName?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="role"
          label="Role"
          control={control}
          register={register}
          isError={!!errors?.role?.message}
          helperText={errors?.role?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="techStack"
          label="Tech Stack"
          control={control}
          register={register}
          isError={!!errors?.techStack?.message}
          helperText={errors?.techStack?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="experience"
          label="Experience"
          control={control}
          register={register}
          isError={!!errors?.experience?.message}
          helperText={errors?.experience?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="availability"
          label="Availability"
          control={control}
          register={register}
          isError={!!errors?.availability?.message}
          helperText={errors?.availability?.message}
        />

        <InputTypeTextAndEmail
          type="text"
          registerWith="resume"
          label="Resume"
          control={control}
          register={register}
          isError={!!errors?.resume?.message}
          helperText={errors?.resume?.message}
        />

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
          <Button variant="outlined" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" disableElevation>
            Submit
          </Button>
        </Box>
      </StyledForm>
    </Stack>
  );
};

export default EmployeeDetails;

import { styled } from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

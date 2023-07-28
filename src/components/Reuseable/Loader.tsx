import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "styled-components";

function Loader() {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

export default Loader;

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  z-index: 9998;
`;

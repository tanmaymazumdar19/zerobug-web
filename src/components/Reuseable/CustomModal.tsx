import { useDispatch, useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { setShowModal } from "../../redux/slices/modalSlice";

export const batchComponentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#f8f8f8",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "12px",
  outline: "none",
  width: "100%",
  maxWidth: "35rem",
};

function CustomModal({ children }: any) {
  const dispatch = useDispatch();
  const selector = useSelector((store: any) => store);

  const showModal = selector.modalSlice.showModal;

  const handleClose = () => {
    dispatch(setShowModal(false));
  };

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={batchComponentStyle}>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        />
        {children}
      </Box>
    </Modal>
  );
}

export default CustomModal;

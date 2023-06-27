import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LinearProgress from "@mui/material/LinearProgress";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  p: 4,
};

function SendingRequest({ wait, message }) {
  return (
    <div>
      <Modal
        open={wait}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            {message}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default SendingRequest;

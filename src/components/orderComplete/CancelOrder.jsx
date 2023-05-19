import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useCancelOrder } from "../../hooks/UseOrders";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CancelOrder = () => {
  const classes = useStyles();

  const {
    handleOpen,
    handleClose,
    handleCancel,
    open,
    reason,
    message,
    handleReasonChange,
    handleMessageChange,
  } = useCancelOrder();

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Cancelar Pedido
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cancelar Pedido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja realmente cancelar o seu pedido?
          </DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel id="reason-select-label">Motivo</InputLabel>
            <Select
              labelId="reason-select-label"
              id="reason-select"
              value={reason}
              onChange={handleReasonChange}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>Selecione um motivo</em>
              </MenuItem>
              <MenuItem value="Atraso na entrega">Atraso na entrega</MenuItem>
              <MenuItem value="Produto errado">Produto errado</MenuItem>
              <MenuItem value="Produto com defeito">
                Produto com defeito
              </MenuItem>
              <MenuItem value="Outro motivo">Outro motivo</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Mensagem"
            type="text"
            value={message}
            onChange={handleMessageChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleCancel} color="secondary">
            Cancelar Pedido
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CancelOrder;

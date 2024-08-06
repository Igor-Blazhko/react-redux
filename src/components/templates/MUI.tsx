import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

const Mui = () => {
      const [open, setOpen] = useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };
    
    return (
      <>
        <Button onClick={handleClickOpen} color="primary" autoFocus>
          Agree
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="warning">
              Disagree
            </Button>
            <Button onClick={handleClose} color="success" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
}
export default Mui;
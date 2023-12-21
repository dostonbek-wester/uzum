import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import './login.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const emails = [];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Login</DialogTitle>
      <List className='login-page-container'>
          <ListItem>
            <ListItemButton>
            <h2>Telefon raqamingizni tering</h2><br />
              <ListItemText />
              
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <p>sms kodingizni yuboramiz</p><br /><br />
              <ListItemText />
              
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
            <input className='login-page-input' placeholder='+998 00-000-00-00' type='number' maxLength={12} /><br />
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
             <button className='login-page-button'>Kodni olish</button>
              <ListItemText />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton className='login-page-b' >
            <b >       Avtonizatsiyada otish orqali siz shaxsiy <br /> malumotlarni qayta ishlash siyosatiga rozilik <br /> bildirasiz!</b>

              <ListItemText />
            </ListItemButton>
          </ListItem>
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText/>
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
      </Typography>
      <br />
      <Button className='login-page-login' variant="outlined" onClick={handleClickOpen}>
         <PersonOutlineIcon/>Kirish
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}





// import { Input } from '@mui/material'

// import React from 'react'

// function Login() {
//   return (
//     <div>
//         <div className="Login-container">
//             <div className="login-box">
//                 <h2>Telefon raqamingizni tering</h2><br />
//                 <p>sms kodingizni yuboramiz</p><br /><br />
//                 <Input placeholder='+998 00-000-00-00' /><br /><br /><br />
//                 <b>Avtonizatsiyada otish orqali siz shaxsiymalumotlarni qayta ishlash siyosatiga rozilik bildirasiz!</b>
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login
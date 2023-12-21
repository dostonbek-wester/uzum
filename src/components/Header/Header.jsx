
import './header.css'
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Menu } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (




    <div>
      <div className="head">
        <div className="left">
          <img className='uzum-img-icon' src="https://taplink.st/a/f/3/c/4/9f3dc5.jpg?1" alt="" />
          <h1>uzum market</h1>
        </div>
        <div className="uzum-katalog">
          <Button startIcon={<Menu />} variant="outlined" onClick={handleClickOpen}>
            Katalog
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
          >
            <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  save
                </Button>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <NavLink className="navlink-texts" to='/kiyim'>Kiyimlar</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/maishiy'>Maishiy texnika</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/poyobzallar'>Poyabzallar</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/aksesuarlar'>Aksesuarlar</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/gozallik'>Go'zallik</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-text" to='/salomatlik'>Salomatlik</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/uy'>Uy-ro'zg'or buyumlari</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/qurilish'>Qurilish va ta'mirlash</NavLink>

              </ListItem>
              <Divider />
              <ListItem button>
                <NavLink className="navlink-texts" to='/avtotovarlar'>Avtotovarlar</NavLink>

              </ListItem>
              <Divider />

            </List>
          </Dialog>



        </div>

        <div className="inp">
          <input type="text" className='uzum-inp-search' /><SearchIcon />
        </div>

        <div className="right">
          <div className="uzum-right-icons">
            <Button className='uzum-user-icon'><PersonOutlineIcon /><NavLink className="navlink-text" to="/login">Kirish</NavLink></Button>
            <Button className='uzum-like-icon'><FavoriteBorderIcon /><NavLink className="navlink-text" to="/saralanganlar">Saralangan</NavLink></Button>
            <Button className='uzum-shop-icon'><ShoppingBagIcon /><NavLink className="navlink-text" to="/savat">Savat</NavLink></Button>
          </div>

        </div>

      </div>

      <div className="btns">

        <Button><NavLink className="navlink-text" to='/'>Elektronika</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/maishiy'>Maishiy texnika</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/kiyim'>Kiyimlar</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/poyobzallar'>Poyabzallar</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/aksesuarlar'>Aksesuarlar</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/gozallik'>Go'zallik</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/salomatlik'>Salomatlik</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/uy'>Uy-ro'zg'or buyumlari</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/qurilish'>Qurilish va ta'mirlash</NavLink></Button>
        <Button><NavLink className="navlink-text" to='/avtotovarlar'>Avtotovarlar</NavLink></Button>
      </div>
    </div>
  )
}

export default Header





// https://taplink.st/a/f/3/c/4/9f3dc5.jpg?1



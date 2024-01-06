import { useState, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';

import logo from '../assets/5watts_logo_white.png'

const pages = [['Home', ''], ['Wide', 'informations'], ['Spot', 'informations'], ['Hybrid', 'informations'], ['Configurator', 'configurator']];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };
  

  return (
    <Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 0, m: 0, p: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              color="inherit"
              sx={{
                display: { xs: 'block', md: 'none' },
                position: 'absolute',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{m: 0, p: 0}}>

        <Box sx={{ width: '100vw', height: '50px', textAlign: 'center', mt: 0 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <IconButton
            size="large"
            aria-label="close drawer"
            edge="start"
            onClick={toggleDrawer(false)}
            color="inherit"
            sx={{ position: 'absolute', top: '11px', left: '23px' }}
          >
            <MenuIcon />
          </IconButton>
          </Box>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px' }}>
            <img src={logo} style={{ width: '300px', height: '100px', position: 'absolute', top: '10px', left: '65px' }} />
          </div>

          <Box sx={{pt: '40px'}}>
          {pages.map((page) => (
            <Button key={page} component={Link} to={`/${page[1]}`} fullWidth sx={{ color: 'black', pt: 2, fontSize: 17 }}>
              {page[0]}
            </Button>
          ))}
          </Box>
      </Drawer>
    </Fragment>
  );
}

export default Navbar;
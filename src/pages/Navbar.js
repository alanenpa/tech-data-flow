import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, Toolbar, IconButton,Container, Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/5watts_logo_Grey.png';

const pages = [['Home', ''], ['Products', 'informations'], ['Configurator', 'configurator']];

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleButtonClick = () => {
    setIsDrawerOpen(false);
  };

  const calculatedWidth = Math.min(430-130, (windowWidth - 130));

  return (
    <Fragment>
      <AppBar position="static" sx={{ width: '20%', height:'30px', backgroundColor: 'white', color: 'black', boxShadow: 0, m: 0, p: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer(true)}
              color="inherit"
              sx={{
                display: { xs: 'block', md: 'block' },
                position: 'absolute',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} sx={{ m: 0, p: 0 }}>

        <Box sx={{ width: '100vw', height: '50px', textAlign: 'center', mt: 0, maxWidth: 430 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
          <img src={logo} style={{ width: `${calculatedWidth}px`, height: 'auto', position: 'absolute', top: '10px', left: '65px' }} alt="Logo" />
        </div>

        <Box sx={{ pt: '40px' }}>
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={`/${page[1]}`}
              fullWidth
              sx={{ color: 'black', pt: 2, fontSize: 17 }}
              onClick={handleButtonClick}
            >
              {page[0]}
            </Button>
          ))}
        </Box>
      </Drawer>
    </Fragment>
  );
}

export default Navbar;

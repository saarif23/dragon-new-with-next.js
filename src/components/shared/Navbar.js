"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "@/assets/logo.png";
import Image from "next/image";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Header from "./Header";

//drawer
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const drawerWidth = 240;
const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Category",
    pathName: "/categories/news?category=all-news",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", marginTop: "20px" }}
    >
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.pathName}>
            <ListItem
              disablePadding
              sx={{
                "& :hover": {
                  color: "red",
                  fontWeight:"800",
                  textDecoration: "underline",
                },
              }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                }}
              >
                <ListItemText primary={item.route} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Header />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1B4242",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <Image src={logo} width={100} height={100} alt="logo" />
          <Box
            sx={{
              "& button:hover": {
                color: "red",
                textDecoration: "underline",
              },
              display: { xs: "none", md: "block" },
            }}
          >
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button sx={{ color: "white" }}>{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Stack
            direction="row"
            sx={{
              "& SVG": {
                color: "white",
              },
              "& SVG: hover": { color: "blue" },
              display: { xs: "none", md: "block" },
            }}
          >
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <GoogleIcon />
            </IconButton>
          </Stack>
          <div className="max-lg:block lg:hidden">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
export default Navbar;

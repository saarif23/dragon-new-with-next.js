"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Button, IconButton, Stack } from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import Header from "./Header";
const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
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
    
  return (
    <>
      <Header />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1B4242",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo" />
            <Box
              className="w-full text-center"
              sx={{
                "& button:hover": {
                  color: "blue",
                  textDecoration: "underline",
                },
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
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;

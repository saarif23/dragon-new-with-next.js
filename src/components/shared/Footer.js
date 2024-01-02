"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Category",
    pathName: "/category",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];
const Footer = () => {
  return (
    <Box
      className="w-full text-center py-10"
      sx={{
        "& SVG": {
          color: "white",
        },
        "& SVG: hover": { color: "blue" },

        backgroundColor: "#1B4242",
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
      <Box
        className="w-full text-center"
        sx={{
          "& button:hover": { color: "blue", textDecoration: "underline" },
        }}
      >
        {navItems.map((item) => (
          <Link key={item} href={item.pathName}>
            <Button sx={{ color: "white" }}>{item.route}</Button>
          </Link>
        ))}
      </Box>
      <Typography variant="body2" color="whitesmoke">
        @2023 the dragon news design by Arif Hossain
      </Typography>
    </Box>
  );
};

export default Footer;

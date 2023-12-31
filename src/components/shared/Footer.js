"use client"
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';
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
        pathName: "/contact"
    }
];
const Footer = () => {
    return (

        <Box className="w-full text-center  py-10 bg-black"
            sx={{
                "& SVG": {
                    color: 'white'
                }
            }}>
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
            <Box className="w-full text-center">
                {navItems.map((item) => (
                    <Link key={item} href={item.pathName}>
                        <Button className='text-white'>{item.route}</Button>
                    </Link>
                ))}
            </Box>
            <Typography variant="body2" color="gray">
                @2023 the dragon news design by Arif Hossain
            </Typography>
        </Box >


    );
};

export default Footer;
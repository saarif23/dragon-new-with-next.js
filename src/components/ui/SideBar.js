"use client"

import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import sideBarNews from "@/assets/side-top-news.png"
import Image from "next/image";
const SideBar = () => {
    return (
        <Box>
            <Grid item >
                <Card className="my-5">
                    <CardActionArea>
                        <CardMedia>
                            <Image src={sideBarNews} alt="topNews" width={800} height={200} />
                        </CardMedia>
                        <CardContent>
                            <Button size="small" className="bg-red-500 text-white">Technology</Button>
                            <Typography gutterBottom >
                                lorem10
                            </Typography>
                            <Typography gutterBottom variant="body2" color="" >
                                By Arif Hossain - Januar 01 2024
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking at
                                its layout........
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Box>
    );
};

export default SideBar;
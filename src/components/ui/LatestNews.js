import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TopNews1 from '@/assets/top-news.png'
import TopNews2 from '@/assets/top-news2.png'
import Image from "next/image";
const LatestNews = () => {
    return (
        <Box>
            <Card className="my-5">
                <CardMedia>
                    <Image src={TopNews1} alt="topNews" width={800} height={200} />
                </CardMedia>
                <CardContent>
                    <Button size="medium" >Technology</Button>
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

            </Card>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card className="my-5">

                        <CardMedia>
                            <Image src={TopNews2} alt="topNews" width={800} height={200} />
                        </CardMedia>
                        <CardContent>
                            <Button size="small" sx={{
                                backgroundColor: "red"
                            }}>Technology</Button>
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

                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="my-5">

                        <CardMedia>
                            <Image src={TopNews2} alt="topNews" width={800} height={200} />
                        </CardMedia>
                        <CardContent>
                            <Button size="small" sx={{
                                backgroundColor: "red"
                            }}>Technology</Button>
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

                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="my-5">

                        <CardMedia>
                            <Image src={TopNews2} alt="topNews" width={800} height={200} />
                        </CardMedia>
                        <CardContent>
                            <Button size="small" sx={{
                                backgroundColor: "red"
                            }}>Technology</Button>
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

                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className="my-5">

                        <CardMedia>
                            <Image src={TopNews2} alt="topNews" width={800} height={200} />
                        </CardMedia>
                        <CardContent>
                            <Button size="small" sx={{
                                backgroundColor: "red"
                            }}>Technology</Button>
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

                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default LatestNews;
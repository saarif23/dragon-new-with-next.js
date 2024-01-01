import getCategoryNews from "@/utils/getCategoryNews";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "next/image";


const DynamicNewsPage = async ({ searchParams }) => {
    // console.log(searchParams);
    const { data } = await getCategoryNews(searchParams.category);
    console.log(data);
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold text-red-500 uppercase mb-2"> {searchParams.category} News </h1>
            <hr />
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news =>
                        <Grid key={news._id} item xs={6}>
                            <Card className="my-5">
                                <CardMedia sx={{
                                    "& img": {
                                        width: "100%",
                                        height: "250px"
                                    }
                                }}>
                                    <Image src={news.thumbnail_url} alt="topNews" width={600} height={400} />
                                </CardMedia>
                                <CardContent>
                                    <Button size="small" sx={{
                                        bgcolor: "red",
                                        textTransform: "none",
                                        color: "white"
                                    }} >{news.category}</Button>
                                    <Typography variant="h6" gutterBottom >
                                        {news?.title.length > 30
                                            ? news.title.slice(0, 30) + ('...')
                                            : news.title}
                                    </Typography>
                                    <Typography gutterBottom variant="body2"  >
                                        By {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.details.length > 200 ? news.details.slice(0, 200) + ('...') : news.details}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>)
                }

            </Grid>
        </div>
    );
};

export default DynamicNewsPage;
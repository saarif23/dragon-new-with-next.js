import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TopNews2 from "@/assets/top-news2.png";
import Image from "next/image";
import getAllNews from "@/utils/getAllNews";
import Button from "@mui/material/Button";
const LatestNews = async () => {
  const { data: allNews } = await getAllNews();
  return (
    <Box>
      <Card className="my-5">
        <CardMedia>
          <Image
            src={allNews[0].thumbnail_url}
            alt="topNews"
            width={800}
            height={400}
            style={{
              height: "400px",
            }}
          />
        </CardMedia>

        <CardContent>
          <Button
            size="small"
            style={{
              color: "white",
              backgroundColor: "red",
              padding: "5px 8px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            {allNews[0].category}
          </Button>
          <Typography variant="h5" gutterBottom>
            {allNews[0].title}
          </Typography>
          <Typography gutterBottom variant="body2" color="">
            By {allNews[0].author.name} - {allNews[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {allNews[0].details.length > 200
              ? allNews[0].details.slice(0, 200) + "..."
              : allNews[0].details}
          </Typography>
        </CardContent>
      </Card>
      <Grid container lg={12} columnSpacing={2} sx={{
        marginBottom: "10px"
      }}>
        {allNews.slice(0,4).map((news) => (
          <Grid key={news} item xs={12} sm={6} >
            <Card
              sx={{
                width: "100%",
                margin: "10px 0px",
              }}
            >
              <CardMedia>
                <Image
                  src={news.thumbnail_url}
                  alt="topNews"
                  width={400}
                  height={100}
                  style={{
                    width: "100%",
                    height: "200px",
                  }}
                />
              </CardMedia>

              <CardContent>
                <Button
                  size="small"
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "5px 8px",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  {news.category}
                </Button>
                <Typography variant="h6" gutterBottom>
                  {news.title.length > 30
                    ? news.title.slice(0, 30) + ".."
                    : news.title}
                </Typography>
                <Typography gutterBottom variant="body2" color="">
                  By {news.author.name} - {news.author.published_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {news.details.length > 80
                    ? news.details.slice(0, 80) + "..."
                    : news.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;

import getAllNews from "@/utils/getAllNews";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
const page = async () => {
  const { data: allNews } = await getAllNews();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allNews.map((news) => (
          <Grid item xs={2} sm={4} md={4} key={news._id}>
            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
              <Card className="my-5">
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    alt="topNews"
                    width={600}
                    height={400}
                  />
                </CardMedia>
                <CardContent>
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "white",
                      backgroundColor: "red",
                    }}
                  >
                    {news.category}
                  </Button>
                  <Typography variant="h6" gutterBottom>
                    {news?.title.length > 30
                      ? news.title.slice(0, 30) + "..."
                      : news.title}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      textAlign: "justify",
                    }}
                  >
                    {news.details.length > 220
                      ? news.details.slice(0, 220) + "..."
                      : news.details}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default page;

import getSingleNews from "@/utils/getSingleNews";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
const page = async ({ params }) => {
  const { data: news } = await getSingleNews(params.newsId);
  // console.log(params);
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Image
              src={news.thumbnail_url}
              width={800}
              height={400}
              style={{
                height:"300px"
              }}
              alt="news"
            ></Image>
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: "5px",
              }}
            >
              <Grid item lg={6}>
                <Image
                  src={news.image_url}
                  width={800}
                  height={500}
                  alt="news"
                  style={{
                    height:"180px"
                  }}
                ></Image>
              </Grid>
              <Grid item lg={6}>
                <Image
                  src={news.thumbnail_url}
                  width={800}
                  height={500}
                  alt="news"
                  style={{
                    height:"180px"
                  }}
                ></Image>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Typography
              variant="h5"
              color="black"
              sx={{
                fontWeight: "bold",
              }}
            >
              {news.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "10px 0px",
              }}
            >
              <Avatar
                src={news.author.img}
                alt="author"
                sx={{ width: 65, height: 65 }}
              ></Avatar>
              <Box>
                <Typography variant="h6">
                  Author - {news.author.name}
                </Typography>
                <Typography variant="h6">
                  Published - {news.author.published_date}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",
                whiteSpace: "pre-line",
                margin: "10px 0px",
              }}
            >
              {news.details}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default page;

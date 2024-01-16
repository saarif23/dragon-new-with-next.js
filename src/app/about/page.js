/* eslint-disable react/no-unescaped-entities */
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Image from "next/image";
import Grid from "@mui/material/Grid";
const page = () => {
  const teams = [
    {
      name: "Emily Johnson",
      title: "Editor-in-Chief",
      image: "https://i.ibb.co/M1gzY0Z/women3.png",
    },
    {
      name: "Marcus Rodriguez",
      title: "News Director",
      image: "https://i.ibb.co/ZNYrHvH/women2.png",
    },
    {
      name: "Olivia Parker",
      title: "Head of Operations",
      image: "https://i.ibb.co/Y7NXSbH/women5.png",
    },
    {
      name: "Ethan Foster",
      title: "Reporter",
      image: "https://i.ibb.co/M1gzY0Z/women3.png",
    },
    {
      name: "Ava Bennett",
      title: "Reporter",
      image: "https://i.ibb.co/47GxdRG/women4.png",
    },
    {
      name: "Liam Campbell",
      title: "Senior Editor",
      image: "https://i.ibb.co/5shx4MT/women1.png",
    },
    {
      name: "Sophia Reed",
      title: "Reporting Fellow",
      image: "https://i.ibb.co/H74qWp6/women6.png",
    },
    {
      name: "Noah Hughes",
      title: "Support Assistant",
      image: "https://i.ibb.co/bsVQNY4/men3.png",
    },
    {
      name: "Isabella Ward",
      title: "Head of Life and Commerce",
      image: "https://i.ibb.co/nBVj9qf/men2.png",
    },
    {
      name: "Lucas Grayson",
      title: "Parenting Repoter",
      image: "https://i.ibb.co/KDr7C50/men1.png",
    },
  ];
  return (
    <Box sx={{
      marginBottom:"20px"
    }}>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bolder",
        }}
      >
        OUR MISSION
      </Typography>
      <Typography
        variant="body2"
        style={{
          textAlign: "justify",
          marginTop: "5px",
        }}
      >
        we are committed to delivering accurate, diverse, and impactful news.
        Our mission is to serve as a beacon of integrity, providing transparent,
        fact-checked stories that transcend biases. Upholding the highest
        ethical standards, we aim to earn your trust by presenting
        well-researched, verified information. We leverage innovation to reach
        diverse audiences and amplify underrepresented voices. Our focus on
        depth and context empowers readers to grasp the complexities behind each
        headline. Beyond informing, we strive to inspire positive change,
        highlighting stories of resilience and progress. We believe in the power
        of information to shape a more just, equitable, and sustainable world.
        Join us on this journey of enlightenment and transformation as we
        navigate the currents of information together
      </Typography>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bolder",
        }}
      >
        OUR COMMITMENT TO INCLUSIVITY
      </Typography>
      <Typography
        variant="body2"
        style={{
          textAlign: "justify",
          marginTop: "5px",
        }}
      >
        We believe diversity – in who we are, in the audience we write for and
        in whose stories we tell – is critical to our mission. We aim to write
        for, and not just about, those left out of traditional power structures;
        to approach stories inclusively; and to serve a diverse audience with
        stories that matter to them. This means including a diverse range of
        voices in our reporting, actively pursuing diversity in our newsroom,
        and listening to our readers and viewers to make sure we're as open and
        responsive as possible.
      </Typography>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          margin: "20px 0px",
          fontWeight: "bolder",
        }}
      >
        OUR FAMILY
      </Typography>
      <Grid container spacing={2}>
        {teams.map((person) => (
          <Grid key={person.name} item xs={12} sm={6} lg={4}>
            <Card
              sx={{
                backgroundColor: "#1B4242 ",
               
              }}
            >
              <CardMedia>
                <Image
                  src={person.image}
                  alt="tema-member"
                  width="400"
                  height="300"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" color="white" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="white">
                  {person.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default page;

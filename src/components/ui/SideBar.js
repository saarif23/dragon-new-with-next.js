import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import sideBarNews from "@/assets/side-top-news.png";
import Image from "next/image";
import SideBarCard from "./SideBarCard";
import sideBarBottomImage from "@/assets/side-bottom-img.png";

const SideBar = () => {
  return (
    <Box>
      <Grid item>
        <Card className="my-5">
          <CardMedia>
            <Image src={sideBarNews} alt="topNews" width={800} height={200} />
          </CardMedia>
          <CardContent>
            <Button size="small" className="bg-red-500 text-white">
              Technology
            </Button>
            <Typography gutterBottom>lorem10</Typography>
            <Typography gutterBottom variant="body2" color="">
              By Arif Hossain - Januar 01 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <SideBarCard />
      <SideBarCard />
      <SideBarCard />
      <SideBarCard />
     
      <Box>
        <Image
          src={sideBarBottomImage}
          alt="sideBarImage"
          width={800}
          height={200}
        />
      </Box>
    </Box>
  );
};

export default SideBar;

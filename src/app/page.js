import LatestNews from "@/components/ui/LatestNews";
import SideBar from "@/components/ui/SideBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const HomePage =  () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

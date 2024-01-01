import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import blankImage from "@/assets/blankImage.png";
import Image from "next/image";
import Divider from "@mui/material/Divider";
const SideBarCard = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box>
          <Image src={blankImage} alt="image" />
        </Box>
        <Box>
          <Stack rowGap={1}>
            <Typography variant="body1" fontWeight={500}>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it{" "}
            </Typography>
            <Typography variant="body2" color="secondary.main">
              Mar 18 2023
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Divider sx={{ mt: 1, mb: 2 }} />
    </>
  );
};

export default SideBarCard;

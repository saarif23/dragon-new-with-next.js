import GetCurrentDateTime from "@/utils/getCurrentDate";
import { Box, Typography } from "@mui/material";
const Header = () => {
  const currentTime = GetCurrentDateTime();
  return (
    <Box className="w-full mt-1 bg text-center">
      <Typography>{currentTime}</Typography>
    </Box>
  );
};

export default Header;

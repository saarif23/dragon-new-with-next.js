import dragonNewsLogo from '@/assets/dragonNews.png'
import GetCurrentDateTime from '@/utils/getCurrentDate';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
const Header = () => {
    const currentTime = GetCurrentDateTime()
    return (
        <Box className='w-full my-2  text-center'>
            <Image className=' mx-auto' src={dragonNewsLogo} alt='dragonNewsLogo' width={400} height={400} />
            <Typography variant="body2" className='py-2'>
                Journalism Without Fear or Favour
            </Typography>
            <Typography>
                {currentTime}
            </Typography>

        </Box>
    );
};

export default Header;
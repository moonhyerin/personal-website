import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const cardContents = [
  `I'm a curiosity-driven seasoned developer.👩🏼‍💻
  I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me. I sweat the details.
  `,
  `I have a BA in Advertising and Public relations from Dankook University in Korea, a Certificate of Web Development Immersive from KH Academy in Korea.`,
  `I understand the importance of staying up to date with the latest technologies and trends in order to create the best possible products for users. Through continuous learning and hands-on experience, I strive to refine my skills and stay at the forefront of the ever-changing landscape of technology.`,
];
const CustomFontTheme = createTheme({
  typography: {
    fontSize: 15,
    fontFamily: ['Roboto Mono, monospace'].join(','),
  },
});

export default function WorkingPage() {
  const renderCard = () => {
    return cardContents.map((value, i) => (
      <ThemeProvider key={i} theme={CustomFontTheme}>
        <Card
          className='hover:dark:bg-[#fcf2d4] max-w-md h-[300px] lg:h-3/6 m-4 lg:w-1/3'
          sx={{
            ':hover': { boxShadow: 10 },
          }}
        >
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {value}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    ));
  };

  return (
    <div className='my-10 lg:mx-10 h-screen flex flex-col lg:flex-row justify-center items-center'>
      {renderCard()}
    </div>
  );
}

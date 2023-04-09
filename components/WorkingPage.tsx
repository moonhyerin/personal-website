import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const cardContents = [
  `I'm a curiosity-driven seasoned developer.👩🏼‍💻
  With a solid understanding of web development and programming concepts, I have honed my skills in React and JavaScript to develop responsive and dynamic user interfaces.`,
  `I have a BA in Advertising and Public relations from Dankook University in Korea, a Certificate of Web Development Immersive from KH Academy in Korea.`,
  `I am a quick learner and enthusiastic about exploring new technologies and frameworks to stay up-to-date with the latest developments in the field. I enjoy working collaboratively with team members to find creative solutions to complex problems.`,
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
          className='hover:dark:bg-[#fcf2d4] max-w-md h-lg lg:h-3/6 m-4 lg:w-1/3'
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
    <div className='my-10 lg:mx-10 flex flex-col lg:flex-row justify-center items-center'>
      {renderCard()}
    </div>
  );
}

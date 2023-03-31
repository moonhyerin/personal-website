import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const CustomFontTheme = createTheme({
  typography: {
    fontSize: 15,
    fontFamily: ['Roboto Mono, monospace'].join(','),
  },
});

export default function WorkingPage() {
  const renderCard = () => {
    return [1, 2, 3].map((value, i) => (
      <ThemeProvider key={i} theme={CustomFontTheme}>
        <Card
          className='h-[300px] lg:h-3/6 m-4 lg:w-1/3'
          sx={{
            ':hover': { boxShadow: 10 },
          }}
        >
          <CardContent>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ ':hover': { fontWeight: 'bold' } }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              sed suscipit, quasi voluptas itaque hic ipsum corrupti nulla aut
              non mollitia ex, harum obcaecati voluptatem numquam sint
              aspernatur, reiciendis perferendis!
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

  // return <div className={styles.container}>{renderCard()}</div>;
}

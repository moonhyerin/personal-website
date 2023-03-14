import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import styles from './WorkingPage.module.css';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function WorkingPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderCard = () => {
    return [1, 2, 3].map((i) => (
      <Card className={styles.card} sx={{ maxWidth: 345, height: 400 }}>
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            sed suscipit, quasi voluptas itaque hic ipsum corrupti nulla aut non
            mollitia ex, harum obcaecati voluptatem numquam sint aspernatur,
            reiciendis perferendis!
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return <div className={styles.container}>{renderCard()}</div>;
}

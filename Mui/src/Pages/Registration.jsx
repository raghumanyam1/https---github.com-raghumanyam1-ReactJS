import { Typography,Paper,Box,Button, ButtonGroup} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react';

function Registration()
{
    return(
        <>  
         <ButtonGroup size= "large" variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

     <ButtonGroup variant="outlined" aria-label="Loading button group">
      <Button>Submit</Button>
      <Button>Fetch data</Button>
      <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
        Save
      </Button>
    </ButtonGroup>

         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      
      }}
    >
      
      <Paper elevation={6} >
         <Typography variant='h2'>Registration  page</Typography>
           <Typography variant='body1'>Registration  page</Typography>
        </Paper>
    </Box>
        </>
    );
} 

export default Registration; 
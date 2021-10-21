import React from "react";
import {Card, Button, CardContent} from '@mui/material';

function LocationAccessDialog({onAccessLocation}) {
  return (
    <Card sx={{ maxWidth: 405 }}>
      <CardContent style={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <p>Would you like to give us your location?</p>
        <Button variant="contained" onClick={onAccessLocation}>Give my location</Button>
      </CardContent>
    </Card>
  )
}

export default LocationAccessDialog;

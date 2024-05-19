import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

const EventCard = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="path/to/your/image.png" // Replace with your image path
          alt="Hội Xuân Làng Cóc"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hội Xuân Làng Cóc 2024
          </Typography>
          <Typography variant="body2" color="text.secondary">
            LONG PHƯỢNG ĐÌNH MỪNG TẾT ĐẾN XUÂN VỀ TRÊN ĐẠI HỌC TP.HCM
          </Typography>
        </CardContent>
        <Grid container spacing={2} sx={{ padding: 2 }}>
          <Grid item xs={6}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" color="primary">
              Read More
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Search Event"
            variant="outlined"
            fullWidth
            defaultValue="Hội Xuân Làng Cóc"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Place"
            variant="outlined"
            fullWidth
            defaultValue="FPT Ho Chi Minh Campus"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Time"
            variant="outlined"
            fullWidth
            select
            defaultValue="Any date"
          >
            <MenuItem value="Any date">Any date</MenuItem>
            {/* Add other date options here */}
          </TextField>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventCard;

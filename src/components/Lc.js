import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import GradeIcon from "@mui/icons-material/Grade";
import Avatar from '@mui/material/Avatar';
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Lc() {
  const OurReports = [
    {
      name: "AKAZA-TEAM-1-Report",
      duration: "1.30 H",
      link: "https://drive.google.com/file/d/1cCKm7SR_XALjoyJm8RypIZz9A2M7ErYh/view?usp=sharing",
    },
    {
      name: "AKAZA-TEAM-2-Report ",
      duration: "2.00 H",
      link: "https://drive.google.com/file/d/1xtU7We5FXAd-7AdPuYBURJXgr8ceF-LZ/view?usp=sharing",
     
    },
    {
      name: "AKAZA-TEAM-3-Report",
      duration: " none",
      link: "Leader",
    },
    {
      name: "AKAZA-TEAM-4-Report ",
      duration: "none",
      link: "co-Leader",
     
    },
    
  ];
  const allcard = () => {
    var cards = [];
    OurReports.map((report) => {
      cards.push(
        <Grid xs={3.5} justifyContent="center" >
        <Card sx={{ minWidth: 275 }} style={{backgroundColor :"#EAF6F6"}}>
        <CardContent>
          <Typography variant="h5" component="div" paddingBottom={2.5}>
          {report.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {report.duration}
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button size="small">
            <a target='_blank'   style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }}
            href={report.link}>
              Report Link
            </a>
          </Button>
        </CardActions>
      </Card>
      </Grid>
      );
    });
    return cards;
  };
  const cards = allcard();
    return (
      <Grid container xs={12}>
      <Grid xs={11.5} xsOffset={0.5}>
        <Typography style={{ paddingTop: 25, paddingBottom: 25 }} variant="h3">
         Our Reports 
        </Typography>
      </Grid>
      <Grid
        container
        xs={11.7}
        direction="row"
        justifyContent="center"
        rowSpacing={3}
        columnSpacing={3}
        
      >
       {cards}
      </Grid>
    </Grid>
    );
  }
  
  export default Lc;
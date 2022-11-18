import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import GradeIcon from "@mui/icons-material/Grade";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const MembersSquad = [
  {
    familyName: "Meroaune",
    name: "Mohamed Elamine",
    role: "Leader",
    img: "1920_1280.jpg",
    icon: <GradeIcon />,
  },
  {
    familyName: "Benmejahed ",
    name: "abd el samad",
    role: "co-Leader",
    img: "1920_1280.jpg",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "Cherifi",
    name: "meloud",
    role: "co-Leader",
    img: "1920_1280.jpg",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "fettah",
    name: "Lilia",
    role: "member",
    img: "1920_1280.jpg",
    icon: <CardMembershipIcon />,
  },
  {
    familyName: "mehlol",
    name: "hind",
    role: "member",
    img: "1920_1280.jpg",
    icon: <CardMembershipIcon />,
  },
];

function Members() {
  
  const allcard = () => {
    var cards = [];
    MembersSquad.map((member) => {
      cards.push(
        <Grid xs={3.5} justifyContent="center">
          <Card sx={{ minwidth: 300, maxHeight: 410 }}>
            <CardMedia component="img" height="250" image={member.img} />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {member.name + " " + member.familyName}
              </Typography>
              <Grid container direction="row" justifyContent="center">
                <Grid>
                  <Typography variant="body2" color="text.secondary">
                    {member.icon}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                <Link
                  to="/li"
                  style={{
                    textDecoration: "none",
                  }}
                  
                >
                  Individual Deliverable
                </Link>
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
          Members
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

export default Members;

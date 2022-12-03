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

const MembersSquad = [
  {
    familyName: "Meroaune",
    name: "Mohamed Elamine",
    role: "Leader",
    img: "merouane.jpg",
    icon: <GradeIcon />,
  },
  {
    familyName: "Bellemdjahed ",
    name: "Abdelsamed",
    role: "co-Leader",
    img: "abdsamad.jpg",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "Cherifi",
    name: "Miloud",
    role: "co-Leader",
    img: "miloud.jpg",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "Fettah",
    name: "Lilia",
    role: "member",
    img: "fettah.jpg",
    icon: <CardMembershipIcon />,
  },
  {
    familyName: "Mehloul",
    name: "Hind",
    role: "member",
    img: "hind.jpg",
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

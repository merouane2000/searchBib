import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import GradeIcon from "@mui/icons-material/Grade";



const MembersSquad = [
  {
    familyName: "Meroaune",
    name: "Mohamed Elamine",
    role: "Leader",
    img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556778.jpg?w=740&t=st=1670282065~exp=1670282665~hmac=a7673cf0015b00e27883b62a23201bf93a8287f3909617d1e3d833f3a0c7c639",
    icon: <GradeIcon />,
  },
  {
    familyName: "Bellemdjahed ",
    name: "Abdelsamed",
    role: "co-Leader",
    img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1670280777~exp=1670281377~hmac=ac03b57d5316bfd5a122ba4ca537f428e08082cc17302e96e4c645870ba9e8f1",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "Cherifi",
    name: "Miloud",
    role: "co-Leader",
    img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556782.jpg?w=740&t=st=1670281730~exp=1670282330~hmac=3827d29bb56dbc9b7dd56e70318bcffaac6bdf691ecd97acc8d70d7d4d8bbc29",
    icon: <MilitaryTechIcon />,
  },
  {
    familyName: "Fettah",
    name: "Lilia",
    role: "member",
    img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556786.jpg?t=st=1670282065~exp=1670282665~hmac=30f8749cd179fe106ada52f67b574324c1eaba9e1351f573b1015daea6053361",
    icon: <CardMembershipIcon />,
  },
  {
    familyName: "Mehloul",
    name: "Hind",
    role: "member",
    img: "https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556784.jpg",
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

import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function OurProject() {
  return (
    <Grid container xs={12} direction="row">
      <Grid container xs={5} xsOffset={0.5} rowSpacing={2} >
        <Grid>
          <Typography
            style={{ paddingTop: 25, paddingBottom: 25 }}
            variant="h3"
          >
            About The Project
          </Typography>
        </Grid>
        <Grid columnSpacing={2}>
          <Typography variant="subtitle1" color="text.secondary">
            Business intelligence (BI) comprises the strategies and technologies
            used by enterprises for the data analysis and management of business
            information.Common functions of business intelligence technologies
            include reporting, online analytical processing, analytics,
            dashboard development, data mining, process mining, complex event
            processing, business performance management, benchmarking, text
            mining, predictive analytics, and prescriptive analytics.
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="subtitle1" color="text.secondary">
            BI tools can handle large amounts of structured and sometimes
            unstructured data to help identify, develop, and otherwise create
            new strategic business opportunities. They aim to allow for the easy
            interpretation of these big data. Identifying new opportunities and
            implementing an effective strategy based on insights can provide
            businesses with a competitive market advantage and long-term
            stability, and help them take strategic decisions
          </Typography>
        </Grid>

      </Grid>

      <Grid container xs={4} style={{ marginTop: 60 }} xsOffset={2.5}>
        <Card sx={{ maxWidth: 345 , maxHeight:410}}>
          <CardMedia component="img" height="250" image="Bipic.jpg" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              business intelligence
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Business intelligence (BI) leverages software and services to
              transform data into actionable insights that inform an
              organization’s strategic and tactical business decisions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default OurProject;

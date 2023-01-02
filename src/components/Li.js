import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import GradeIcon from "@mui/icons-material/Grade";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    padding: 25,
    backgroundColor: " #99c2ff",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 25,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MembersSquad = [
  {
    familyName: "Meroaune",
    name: "Mohamed Elamine",
    role: "Leader",
    img: "1920_1280.jpg",
    icon: <GradeIcon />,
    individualTask: [
      {
        tsklinck:
          "https://drive.google.com/file/d/1E14b73NBD-YPbFqMDBkUeC9chn14YEbI/view?usp=sharing",
          indName: "Report-1-Meroaune.pdf",
      },
      {
        tsklinck:
          "https://drive.google.com/file/d/1BtjMWm5RphLnM9wVJ-ylBiwFCporJzM4/view?usp=sharing",
          indName: "Report-2-Meroaune.pdf",
      },
    ],
  },
  {
    familyName: "Bellemdjahed ",
    name: "Abdelsamed",
    role: "co-Leader",
    img: "1920_1280.jpg",
    icon: <MilitaryTechIcon />,
    individualTask: [
      {
        tsklinck:
          "https://drive.google.com/file/d/1mJwj9c7U_olh_8QFyhcZtbPwvhzkaf05/view?usp=sharing",
          indName: "Report-1-Bellmdjahed.pdf",
      },
      {
        tsklinck:
          "https://drive.google.com/file/d/1WLDlKwFrLiouT1JvkK-uhjcR157qeOHD/view?usp=sharing",
          indName: "Report-2-Bellmdjahed.pdf",
      },
    ],
 
  },
  {
    familyName: "Cherifi",
    name: "Miloud",
    role: "co-Leader",
    img: "1920_1280.jpg",
    icon: <MilitaryTechIcon />,
    individualTask: [
      {
        tsklinck:
          "https://drive.google.com/file/d/1xuRVSSTgXSzJlcGuEXTS1OeIe_NX76M7/view?usp=sharing",
          indName: "Report-1-Cherifi.pdf",
      }, 
      {
        tsklinck:
          "https://drive.google.com/file/d/1jVZTokcwlGdXIYTExZVaSsqK1mcNHMCk/view?usp=sharing",
          indName: "Report-2-Cherifi.pdf",
      },
    ],
  },
  {
    familyName: "Fettah",
    name: "Lilia",
    role: "member",
    img: "1920_1280.jpg",
    icon: <CardMembershipIcon />,
    individualTask: [
      {
        tsklinck:
          "https://drive.google.com/file/d/13Zw5TXh_j4YqCrQjmQ45xtoaOdEjy0hL/view?usp=sharing",
          indName: "Report-1-Fettah.pdf",
      },
      {
        tsklinck:
          "https://drive.google.com/file/d/1TRQvsfz7Yy4XBVQZmlfoocuIOp9R_Dwg/view?usp=sharing",
          indName: "Report-2-Fettah.pdf",
      },
    ],
  },
  {
    familyName: "Mehloul",
    name: "Hind",
    role: "member",
    img: "1920_1280.jpg",
    icon: <CardMembershipIcon />,
    individualTask: [
      {
        tsklinck:
          "https://drive.google.com/file/d/1pVOnttkgEsUDAx1-aTyVPL-L7WocG-UD/view?usp=sharing",
          indName: "Report-1-Mehloul.pdf",
      },
      {
        tsklinck:
          "https://drive.google.com/file/d/1hpHVo5AVibdI1B1qSyZigovJC2VGW3U0/view?usp=sharing",
          indName: "Report-2-Mehloul.pdf",
      },
    ],
  },
];
export default function CustomizedTables() {
  return (
    <Grid container xs={12} style={{ marginTop: 40, marginBottom: 40 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Family Name</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">Role Icon</StyledTableCell>
              <StyledTableCell align="right">Individual Task</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {MembersSquad.map((row) => (
              <StyledTableRow key={row.familyName}>
                <StyledTableCell component="th" scope="row">
                  {row.familyName}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.role}</StyledTableCell>
                <StyledTableCell align="right">{row.icon}</StyledTableCell>
                <StyledTableCell align="right">
                 { row.individualTask.map((task)=>(
               <div style={{padding:"7px"}}>
                  <a target='_blank'  key={task.indName}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "Bold",
                    }}
                    href={task.tsklinck}
                  >
                    {task.indName}
                  </a>
               </div>
                
                  
                  ))}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

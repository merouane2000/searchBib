import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Unstable_Grid2";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import GradeIcon from "@mui/icons-material/Grade";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    padding:25,
    backgroundColor:" #99c2ff",
    color:"black"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding:25,
   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
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
      individualTask:"https://drive.google.com/file/d/1QlMCPgHQNUZARGj1X--oKwgYEQgZvq7U/view?usp=sharing",
      indName :"akaza.Team"
      
    },
    {
      familyName: "Bellemdjahed ",
      name: "Abdelsamed",
      role: "co-Leader",
      img: "1920_1280.jpg",
      icon: <MilitaryTechIcon />,
      indName :""
    },
    {
      familyName: "Cherifi",
      name: "Miloud",
      role: "co-Leader",
      img: "1920_1280.jpg",
      icon: <MilitaryTechIcon />,
    },
    {
      familyName: "Fettah",
      name: "Lilia",
      role: "member",
      img: "1920_1280.jpg",
      icon: <CardMembershipIcon />,
    },
    {
      familyName: "Mehloul",
      name: "Hind",
      role: "member",
      img: "1920_1280.jpg",
      icon: <CardMembershipIcon />,
    },
  ];
export default function CustomizedTables() {
  return (
    <Grid container xs={12} style={{marginTop:40 ,marginBottom:40}}>

    <TableContainer component={Paper} >
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
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
              <StyledTableCell align="right"><a style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }} href={row.individualTask}>{row.indName}</a></StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}
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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

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
      name: "kkk",
      role: "member",
      img: "1920_1280.jpg",
      icon: <CardMembershipIcon />,
    },
    {
      familyName: "mahlol",
      name: "hind",
      role: "member",
      img: "1920_1280.jpg",
      icon: <CardMembershipIcon />,
    },
  ];
export default function CustomizedTables() {
  return (
    <Grid container xs={12}>

    <TableContainer component={Paper} >
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Family Name</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Role Icon</StyledTableCell>
            <StyledTableCell align="right">Individual Task</StyledTableCell>
            <StyledTableCell align="right">Collective Task</StyledTableCell>
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
              <StyledTableCell align="right">{row.individualTask}</StyledTableCell>
              <StyledTableCell align="right">{row.collectiveTask}</StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}
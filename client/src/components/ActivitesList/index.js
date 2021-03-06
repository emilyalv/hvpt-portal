import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import API from "../../utils/API";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ActivityTable() {
  const classes = useStyles();

  const [activities, setactivities] = useState([]);

  //Populate the Table with Data from an API
  // const [ modules, setModules ] = useState([]);

  // useEffect(() => {
  // const getModules = async () => {
  //   try {
  //     const moduleList = await API.search()
  //     setModules(moduleList.data.results)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // getModules();
  // }, [])

  function createData(module, status, due, user) {
    return { module, status, due, user };
  }

  const rows = [
    createData("Activity 1", "In Progress", "08/21/2021", "Emily"),
    createData("Activity 2", "In Progress", "09/21/2021", "Emily"),
    createData("Activity 3", "Not Started", "10/21/2021", "Emily"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Activity Name</TableCell>
            <TableCell align="right">Activity Type</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((row) => (
            <TableRow key={row.activity}>
              <TableCell align="right">{row.activity_name}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.due_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

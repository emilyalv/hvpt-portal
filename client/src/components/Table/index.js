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

export default function BasicTable() {
  const classes = useStyles();

  //Populate the Table with Data from an API
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const getModules = async () => {
      try {
        const moduleList = await API.getModules();
        console.log(moduleList);
        setModules(moduleList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getModules();
  }, []);

  function createData(module, status, due, user) {
    return { module, status, due, user };
  }

  const rows = [
    createData("Module 1", "In Progress", "08/21/2021", "Emily"),
    createData("Module 2", "In Progress", "09/21/2021", "Emily"),
    createData("Module 3a", "Not Started", "10/21/2021", "Emily"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Module Name</TableCell>
            {/* <TableCell align="right">Completion Status</TableCell>
            <TableCell align="right">Due Date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {modules.map((row) => (
            <TableRow key={row.module}>
              <TableCell align="left">{row.module_name}</TableCell>
              {/* <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.due}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

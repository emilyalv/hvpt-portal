import React, { useEffect, useState } from "react";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import { makeStyles } from "@material-ui/core/styles";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Button } from "@material-ui/core";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//     // cannot get this to work
//     fontFamily: "Montserrat",
//     color: "red",
//   },
// });

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//   },
//   typography: {
//     subtitle1: {
//       fontSize: 300,
//       fontFamily: "Montserrat",
//     },
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

export default function ModuleList() {
  // const classes = useStyles();
  const [modules, setModules] = useState([]);
  // const [expanded, setExpanded] = useState("panel1");

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
    console.log(modules);
  }, []);

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  // return (
  //   <div>
  //     {modules.map((item) => {
  //       return (
  //         <Accordion id="accordion">
  //           <AccordionSummary
  //             className="moduleName"
  //             expandIcon={<ExpandMoreIcon />}
  //             aria-controls="panel1a-content"
  //             id="panel1a-header"
  //           >
  //             <Typography className={classes.heading} >
  //               <span>{item.module_name}</span>
  //             </Typography>
  //           </AccordionSummary>

  //           {item.activities.length > 0 &&
  //             item.activities.map((act) => {
  //               return (
  //                 <AccordionDetails className="details">
  //                   <React.Fragment key={act.id}>
  //                     <Typography variant="subtitle1">
  //                       {act.activity_type} {act.activity_name}
  //                     </Typography>{" "}
  //                     <Link to={"/activity"}>
  //                       <Button
  //                         className="spacing"
  //                         size="small"
  //                         variant="contained"
  //                         color="primary"
  //                         href="#activity"
  //                       >
  //                         Start
  //                       </Button>
  //                     </Link>
  //                   </React.Fragment>
  //                 </AccordionDetails>
  //               );
  //             })}
  //         </Accordion>
  //       );
  //     })}
  //   </div>
  // );
  return (
    <div>
      {modules.map((item) => {
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>{item.module_name}</span>
              </Accordion.Header>
              {item.activities.length > 0 &&
                item.activities.map((act) => {
                  return (
                    <Accordion.Body>
                      <React.Fragment key={act.id}>
                        {act.activity_type} {act.activity_name}
                      </React.Fragment>
                      <Button className="actBtn" variant="primary">
                        Start
                      </Button>{" "}
                    </Accordion.Body>
                  );
                })}
            </Accordion.Item>
          </Accordion>
        );
      })}
    </div>
  );
}

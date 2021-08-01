import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  typography: {
    subtitle1: {
      fontSize: 300,
      fontFamily: "Montserrat",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ModuleList() {
  const classes = useStyles();
  const [modules, setModules] = useState([]);
  const [expanded, setExpanded] = useState("panel1");

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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {modules.map((item) => {
        return (
          <Accordion id="accordion">
            <AccordionSummary
              className="moduleName"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <span>{item.module_name}</span>
              </Typography>
            </AccordionSummary>

            {item.activities.length > 0 &&
              item.activities.map((act) => {
                return (
                  <AccordionDetails className="details">
                    <React.Fragment key={act.id}>
                      <Typography variant="subtitle1">
                        {act.activity_type} {act.activity_name}
                      </Typography>{" "}
                      <Link to={"/activity"}>
                        <Button
                          className="spacing"
                          size="small"
                          variant="contained"
                          color="primary"
                          href="#activity"
                        >
                          Start
                        </Button>
                      </Link>
                    </React.Fragment>
                  </AccordionDetails>
                );
              })}
          </Accordion>
        );
      })}
    </div>
  );
}

import * as React from 'react';
import { useState } from "react";
import "../App.css";
import Leagues from "./Leagues";
import Standings from "./Standings";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Content = () => {

    const [active, setActive] =useState(true);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography component={'span'}>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };

    return (
        <div className="content-container">
            <Tabs className="Tabs" value={value} onChange={handleChange}>
                <Tab label="Leagues" {...a11yProps(0)} />
                <Tab label="Standings" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Leagues />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Standings />
            </TabPanel>
        </div>
    );
};

export default Content;
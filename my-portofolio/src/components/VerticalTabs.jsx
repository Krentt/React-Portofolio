import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContent from "./TabContent";
import { getData } from "../data";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experiences = getData();
  const smallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Box className="md:flex grow">
      <Tabs
        orientation={smallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          "& button.Mui-selected": { fontWeight: "bold", color: "#6b7280" },
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#6b7280",
          },
        }}
      >
        {experiences.map((experience) => (
          <Tab
            key={experience.id}
            label={experience.location}
            {...a11yProps(experience.id)}
          />
        ))}
      </Tabs>
      {experiences.map((experience, index) => (
        <TabPanel key={experience.id} value={value} index={index} className="w-full">
          <TabContent {...experience} />
        </TabPanel>
      ))}
    </Box>
  );
}

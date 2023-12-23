import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value, description }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 6"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor="grey"
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h6">{description}</Typography>
        <Typography
          variant="h4"
          fontWeight="600"
          sx={{ color: theme.palette.secondary[200] }}
        >
          {title}
        </Typography>
      </FlexBetween>

      <FlexBetween>
        <Box></Box>
        <Typography
          variant="h3"
          fontWeight="600"
          sx={{ color: theme.palette.grey[500] }}
        >
          {value}
        </Typography>
      </FlexBetween>
      {/* <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween> */}
    </Box>
  );
};

export default StatBox;

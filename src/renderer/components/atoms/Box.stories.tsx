import React from "react";
import Box from "./Box";

export default {
  component: Box,
  title: "Atoms/Box",
};

export const box = () => (
  <Box bgColor="#242424" width="150px" border={2} pa={5}>
    Box
  </Box>
);

export const width = () => (
  <div>
    <Box bgColor="#242424" width="150px" mb={5}>
      Width 150px
    </Box>
    <Box bgColor="#242424" width="300px" mb={5}>
      Width 300px
    </Box>
    <Box bgColor="#242424" width="75%" mb={5}>
      Width 75%
    </Box>
    <Box bgColor="#242424" width="auto" mb={5}>
      Width auto
    </Box>
  </div>
);

const commonPropsForHeight = {
  bgColor: "#242424",
  width: "120px",
  mr: 5,
};

export const height = () => (
  <Box height="300px" display="flex">
    <Box height="100px" {...commonPropsForHeight}>
      Height 100px
    </Box>
    <Box height="200px" {...commonPropsForHeight}>
      Height 200px
    </Box>
    <Box height="75%" {...commonPropsForHeight}>
      Height 75%
    </Box>
    <Box height="auto" {...commonPropsForHeight}>
      Height auto
    </Box>
  </Box>
);

const commonPropsForBorder = {
  bgColor: "#242424",
  width: "100px",
  height: "100px",
  mx: 5,
};

export const border = () => (
  <div>
    <Box display="flex" justifyContent="center" my={20}>
      <Box borderTop={2} {...commonPropsForBorder} />
      <Box borderRight={5} {...commonPropsForBorder} />
      <Box borderBottom={10} {...commonPropsForBorder} />
      <Box borderLeft={20} {...commonPropsForBorder} />
    </Box>
    <Box display="flex" justifyContent="center" my={20}>
      <Box borderColor="red" border={2} {...commonPropsForBorder} />
      <Box borderColor="green" border={2} {...commonPropsForBorder} />
      <Box borderColor="blue" border={2} {...commonPropsForBorder} />
    </Box>
    <Box display="flex" justifyContent="center" my={20}>
      <Box borderRadius="50%" {...commonPropsForBorder} />
      <Box borderRadius="5px" {...commonPropsForBorder} />
      <Box borderRadius="20px" {...commonPropsForBorder} />
    </Box>
    <Box display="flex" justifyContent="center" my={20}>
      <Box border={5} borderStyle="dotted" {...commonPropsForBorder} />
      <Box border={5} borderStyle="double" {...commonPropsForBorder} />
      <Box border={5} borderStyle="dashed" {...commonPropsForBorder} />
    </Box>
  </div>
);

const commonPropsForDisplay = {
  bgColor: "#242424",
};
export const display = () => (
  <div>
    <Box mb={20}>
      <Box display="inline" ma={5} {...commonPropsForDisplay}>
        inline
      </Box>
      <Box display="inline" ma={5} {...commonPropsForDisplay}>
        inline
      </Box>
    </Box>
    <Box my={20}>
      <Box display="block" ma={5} {...commonPropsForDisplay}>
        block
      </Box>
      <Box display="block" ma={5} {...commonPropsForDisplay}>
        block
      </Box>
    </Box>
    <Box my={20} whiteSpace="nowrap">
      <Box overflow="hidden" width="100px" ma={5} {...commonPropsForDisplay}>
        Overflow Hidden. Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box overflow="auto" width="100px" ma={5} {...commonPropsForDisplay}>
        Overflow Auto. Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </Box>
    <Box my={20} whiteSpace="nowrap">
      <Box
        textOverflow="clip"
        overflow="hidden"
        width="100px"
        ma={5}
        {...commonPropsForDisplay}
      >
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box
        textOverflow="ellipsis"
        overflow="hidden"
        width="100px"
        ma={5}
        {...commonPropsForDisplay}
      >
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </Box>
  </div>
);

const commonPropsForShadow = {
  bgColor: "#242424",
  width: "100px",
  height: "80px",
  mx: 10,
  pa: 10,
};

export const shadow = () => (
  <Box display="flex">
    <Box dp={0} {...commonPropsForShadow}>
      0
    </Box>
    <Box dp={1} {...commonPropsForShadow}>
      1
    </Box>
    <Box dp={2} {...commonPropsForShadow}>
      2
    </Box>
    <Box dp={3} {...commonPropsForShadow}>
      3
    </Box>
    <Box dp={4} {...commonPropsForShadow}>
      4
    </Box>
    <Box dp={8} {...commonPropsForShadow}>
      8
    </Box>
  </Box>
);

export const palette = () => (
  <div>
    <Box color="red" my={5}>
      Red
    </Box>
    <Box color="green" my={5}>
      Green
    </Box>
    <Box color="blue" my={5}>
      Blue
    </Box>
    <Box bgColor="red" my={5}>
      Red
    </Box>
    <Box bgColor="green" my={5}>
      Green
    </Box>
    <Box bgColor="blue" my={5}>
      Blue
    </Box>
  </div>
);

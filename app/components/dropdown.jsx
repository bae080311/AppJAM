import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WritePage from "../write/page";

export default function BasicSelect() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
    <WritePage sort={sort} />;
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">음식종류</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="음식종류"
          onChange={handleChange}
        >
          <MenuItem value={"한식"}>한식</MenuItem>
          <MenuItem value={"중식"}>중식</MenuItem>
          <MenuItem value={"일식"}>일식</MenuItem>
          <MenuItem value={"양식"}>양식</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

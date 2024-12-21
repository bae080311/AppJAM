import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WritePage from "../write/page";

export default function BasicSelect() {
  const [meal, setMeal] = React.useState("");

  const handleChange = (event) => {
    setMeal(event.target.value);
    <WritePage meal={meal} />;
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">식사</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={meal}
          label="식사"
          onChange={handleChange}
        >
          <MenuItem value={"한식"}>아침</MenuItem>
          <MenuItem value={"중식"}>점심</MenuItem>
          <MenuItem value={"저녁"}>저녁</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

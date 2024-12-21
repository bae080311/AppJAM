"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ setMeal }) {
  // 로컬 상태 선언
  const [localMeal, setLocalMeal] = React.useState("");

  const handleChange = (event) => {
    const selectedMeal = event.target.value;
    setLocalMeal(selectedMeal); // 로컬 상태 업데이트
    setMeal(selectedMeal); // 부모 컴포넌트에 전달
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">식사</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={localMeal} // 로컬 상태와 연결
          label="식사"
          onChange={handleChange}
        >
          <MenuItem value={"아침"}>아침</MenuItem>
          <MenuItem value={"점심"}>점심</MenuItem>
          <MenuItem value={"저녁"}>저녁</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ setSort }) {
  // 내부에서 sort 상태 관리
  const [localSort, setLocalSort] = useState("");

  const handleChange = (event) => {
    const selectedSort = event.target.value;
    setLocalSort(selectedSort); // 로컬 상태 업데이트
    setSort(selectedSort); // 부모 컴포넌트에 전달
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">음식 종류</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={localSort}
          label="음식 종류"
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

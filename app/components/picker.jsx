"use client";

import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export default function BasicDateTimePicker({ setDate }) {
  const [value, setValue] = useState(dayjs("2024-12-10T12:43:08.798Z"));

  const formatDate = (date) => dayjs(date).format("YYYY-MM-DD HH:mm:ss");

  const handleChange = (newValue) => {
    setValue(newValue);

    const formattedDate = formatDate(newValue);
    setDate(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          sx={{ width: 300 }}
          label="날짜를 선택해주세요"
          value={value}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

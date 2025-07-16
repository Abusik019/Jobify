import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const DatePickerItem = ({ value, onChange }) => (
    <DatePicker
        value={value ? dayjs(value, "DD-MM-YYYY") : null}
        onChange={onChange}
        style={{ width: "229px", height: "46px", borderRadius: "10px", opacity: "1", backgroundColor: 'transparent'}}
        format="DD-MM-YYYY"
        placeholder="dd-mm-yyyy"
    />
);

export default DatePickerItem;

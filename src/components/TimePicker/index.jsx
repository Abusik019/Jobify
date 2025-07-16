import { Space, TimePicker } from "antd";
import dayjs from "dayjs";

const TimePickerItem = ({ value, onChange }) => {
    return (
        <Space>
            <TimePicker
                value={value ? dayjs(value, "HH:mm:ss") : null}
                onChange={onChange}
                style={{
                    width: "229px",
                    height: "46px",
                    borderRadius: "10px",
                    opacity: "1",
                    backgroundColor: "transparent",
                }}
            />
        </Space>
    );
};

export default TimePickerItem;

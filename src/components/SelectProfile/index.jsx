import { Select, Space } from "antd";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const ProfileSelect = () => (
    <Space wrap>
        <Select
            defaultValue="Выполненные работы"
            style={{
                width: 220,
                marginTop: 40,
            }}
            onChange={handleChange}
            options={[
                {
                    value: "Выполненные работы",
                    label: "Выполненные работы",
                },
                {
                    value: "jack",
                    label: "Jack",
                },
                {
                    value: "Yiminghe",
                    label: "yiminghe",
                },
            ]}
        />
    </Space>
);

export default ProfileSelect;

import { Select, Space } from "antd";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const ReviewsSelect = () => (
    <Space wrap>
        <Select
            defaultValue="Положительные(10)"
            style={{
                width: 220,
                marginTop: 40,
            }}
            onChange={handleChange}
            options={[
                {
                    value: "Положительные(10)",
                    label: "Положительные(10)",
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

export default ReviewsSelect;

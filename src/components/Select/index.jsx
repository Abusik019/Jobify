import { Select, Space } from "antd";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const SelectItem = ({ defaultValue, values, styles = {} }) => (
    <Space wrap>
        <Select
            defaultValue={defaultValue}
            style={styles}
            onChange={handleChange}
            options={values.map(item => ({
                label: item,
                value: item
            }))}
        />
    </Space>
);

export default SelectItem;

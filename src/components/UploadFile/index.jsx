import React from "react";
import { Upload } from "antd";
const { Dragger } = Upload;

const UploadFile = ({ setFile }) => (
    <Dragger
        customRequest={({ file, onSuccess }) => {
            console.log("Файл получен, но не отправляется:", file);
            onSuccess("ok");
        }}
        onDrop={(e) => {
            e.preventDefault(); 
            const droppedFile = e.dataTransfer.files[0];
            console.log("Добавленный файл:", droppedFile);
            if (droppedFile) {
                setFile(droppedFile);
            }
        }}
        beforeUpload={(file) => {
            setFile(file);
            return false; 
        }}
        style={{
            width: "100%",
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: '#EAEAEA40',
            borderColor: '#000',
            borderStyle: 'dashed',
        }}
    >
        <p className="ant-upload-text">
            Нажмите для загрузки или перетащите файл
        </p>
        <p className="ant-upload-text">Максимальный размер файла 100МБ</p>
    </Dragger>
);

export default UploadFile;
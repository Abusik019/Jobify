import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './style.css'
import fileImg from '../../assets/icons/file.svg';
import imageImg from '../../assets/icons/dragImage.svg';

const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "PDF"];

function DragDrop({ setFiles }) {
    const handleChange = (newFile) => {
        setFiles(prevFiles => [...prevFiles, newFile]);
    };

    return (
        <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            uploadedLabel=""
            hoverTitle=""
            label=""
            children={
                <div className="uploaderContent">
                    <div className="uploadImageBlock">
                        <img
                            src={fileImg}
                            width={36}
                            height={36}
                            alt="file" 
                        />
                        <span>или</span>
                        <img 
                            src={imageImg}
                            width={36}
                            height={36}
                            alt="image"
                        />
                    </div>
                    <p>Добавьте вложения, доступные форматы - pdf, png, jpg, jpeg, gif</p>
                </div>
            }
        />
    );
}

export default DragDrop;

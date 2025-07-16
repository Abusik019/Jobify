import { FileUploader } from "react-drag-drop-files";
import './style.css'
import plusImg from '../../assets/icons/plus.svg';


const fileTypes = ["JPG", "PNG", "GIF", "JPEG", "PDF"];

function SmallDragDrop({ setFiles }) {
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
                <div className="addImage">
                    <img
                        src={plusImg}
                        width={20}
                        height={20}
                        alt="plus" 
                    />
                </div>
            }
        />
    );
}

export default SmallDragDrop;

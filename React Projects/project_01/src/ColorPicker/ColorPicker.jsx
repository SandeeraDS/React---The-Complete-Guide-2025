import { useState } from "react";
import moduleStyles from "./ColorPicker.module.css";

export default function ColorPicker() {

    const[color,setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return(
        <div className={moduleStyles.colorPickerContainer}>
            <h1>Color Picker</h1>
            <div className={moduleStyles.colorDisplay} style={{backgroundColor:color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>
                Select a Color :
            </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}
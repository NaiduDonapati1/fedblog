import React,{useState} from "react";
import '../myStyles.css';
import Sidebar from "./Sidebar";
import DatePicker from "react-date-picker";  
const Main = () => {
    const [value, onChange] = useState(new Date());
    return (

    <div>

  <div className="article">
    <h1>React Date Picker</h1>
    <DatePicker onChange={onChange} value={value} /> 
  </div>
    <Sidebar />
    </div>
    )
};

export default Main;

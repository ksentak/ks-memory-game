import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className= {props.waggleWrapper==="true" ? "wrapperShake" : "wrapper"}>{props.pictures}</div>;

export default Wrapper;

import React from 'react'
import "./style.css";
import classes from "./style.module.css";


export default function Contact() {
  return (
    <div>Contact
    {/* // css examples */}
    <p className="demo-para">External Css</p>
    <p className={classes.module_css}>Module Css</p>
    <p className={`${classes.module_css} font-bold`}>Both css</p>
    </div>
  )
}

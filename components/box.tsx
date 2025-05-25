import React, { ReactNode } from "react";
import styles from "./styles/box.module.scss";

const Box = (boxProps : {id : string, title? : string, children? : React.ReactNode}) => {
    return <div className={styles.box}>
        <h1>{boxProps.title}</h1>
        {boxProps.children}
    </div>
};

export default Box;
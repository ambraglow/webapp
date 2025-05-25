import React from "react";
import Box from "./box";
import styles from "./styles/footer.module.scss";

const Footer = () => {
    return <footer id={styles.footer}><Box id="Footer-container" title="This is the Footer!"/></footer>;
};

export default Footer;
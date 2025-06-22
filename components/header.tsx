import React from "react";
import Link from 'next/link'
import Box from "./box";
import styles from "./styles/header.module.scss";

const Header = () => {
    return <header id={styles.header}>
    <Box id="Header-container" title="Welcome to love.gothfeet.nl!">
        <h2>this site is WIP</h2>
    </Box>
    </header>;
};

export default Header;
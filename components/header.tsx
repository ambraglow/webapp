import React from "react";
import Link from 'next/link'
import Box from "./box";
import styles from "./styles/header.module.scss";

const Header = () => {
    return <header id={styles.header}>
    <Box id="Header-container" title="This is the Header!">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </Box>
    </header>;
};

export default Header;
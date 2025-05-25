import HomePage from "./index";
import Image from 'next/image';
import Box from "../components/box";
import styles from "./styles/about.module.scss";

const About = () => {
    return <HomePage>
        <div id={styles.about}>
            <Image src="/images/adhdgirl.png" alt="me" width="64" height="64" />
            <Box id="Profileabout" title="About"> 
                <p>Lorem ipsum your mom 3.14159</p>
            </Box>
            <Box id="Profilestatus" title="Status">
                <p>Lorem ipsum your mom 3.14159</p>
            </Box>
        </div>
    </HomePage>
}

export default About;
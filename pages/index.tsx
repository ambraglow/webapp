import HomePage from "./homepage";
import Image from 'next/image';
import Box from "../components/box";
import styles from "./styles/index.module.scss";


const Index = () => {
    return <HomePage>
        <div id={styles.index}>
            <Image src="/images/frierenfeet.gif" alt="frierenfeet" width="640" height="640" />
        </div>
    </HomePage>
}

export default Index;

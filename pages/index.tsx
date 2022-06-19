import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// import { Button, Form } from 'semantic-ui-react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

const Home: NextPage = () => {
    return (
        <div className={styles.background}>
            <Image
                src="/images/itplayground.jpg"
                alt="메인 배경 이미지"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
    );
};

export default Home;

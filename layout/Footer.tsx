import styles from '../styles/Home.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <a href="https://www.vaatz.com" target="_blank" rel="noopener noreferrer">
                    Copyright ⓒ Vaatz플랫폼팀. All rights reserved.{' '}
                    {/* <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span> */}
                </a>
            </footer>
        </div>
    );
};

export default Footer;

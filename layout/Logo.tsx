import Image from 'next/image';

const Logo = () => {
    return (
        <div style={{ display: 'felx', paddingTop: 20 }}>
            <div style={{ flex: '100px 0 0' }}>
                {/* <img src="/images/logo.jpg" alt="logo" style={{ display: 'block', width: 80 }} /> */}
                <Image src="/images/logo.jpg" alt="logo" width={80} height={50} />
            </div>
        </div>
    );
};

export default Logo;

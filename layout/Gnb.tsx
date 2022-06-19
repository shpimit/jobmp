import { Menu } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Gnb = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    let activeItem;

    if (router.pathname === '/') {
        activeItem = 'home';
    } else if (router.pathname === '/about') {
        activeItem = 'about';
    } else if (router.pathname === '/admin') {
        activeItem = 'admin';
    }

    function goLink(e: any, data: any) {
        if (data.name === 'home') {
            router.push('/');
        } else if (data.name === 'about') {
            router.push('/About');
        } else if (data.name === 'login') {
            router.push('/Login');
        } else if (data.name === 'profile') {
            router.push('/Profile');
        }
    }

    return (
        <Menu inverted>
            <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
            <Menu.Item name="about" active={activeItem === 'about'} onClick={goLink} />
            <Menu.Item name="profile" active={activeItem === 'profile'} onClick={goLink} />
            {status === 'authenticated' ? (
                <Menu.Item name="logout" active={activeItem === 'logout'} onClick={goLink} />
            ) : (
                <Menu.Item name="login" active={activeItem === 'login'} onClick={goLink} />
            )}
        </Menu>
    );
};

export default Gnb;

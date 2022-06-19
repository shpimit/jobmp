import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import type { AppProps } from 'next/app';
import Footer from '../layout/Footer';
import Gnb from '../layout/Gnb';
import HeadInfo from '../layout/HeadInfo';
import Logo from '../layout/Logo';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider>
            <div style={{ width: 1500, margin: '0 auto' }}>
                <HeadInfo title="IT PlayGround" />
                <Logo />
                <Gnb />
                <Component {...pageProps} />
                <Footer />
            </div>
        </SessionProvider>
    );
}

export default MyApp;

/*
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1. 정적 생성
2. Server Side Rendering(SSR, Dynamic Rendering)

차이점은 언제 html 파일을 생성하는가

[정적 생성]
- 프로젝트가 빌드하는 시점에 html 파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- get StaticProps / getStaticPaths

[서버사이드 렌더링]은 매 요청마다 html을 생성
- 항상 최신 상태 유지
- getServerSideProps
*/

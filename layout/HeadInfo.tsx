import Head from "next/head";

// 아래 meta tag keyword, contents 오류로 추가 함
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      keyword?: string;
      contents?: string;
    }
}

interface HeadInfoProps {
    title: string,
    keyword: string,
    contents: string,
}

const HeadInfo = ({ title, keyword, contents } : HeadInfoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "IT Playground",
  keyword: "IT Playground powered by Next js",
  contents: "IT Playground contents",
};

export default HeadInfo;
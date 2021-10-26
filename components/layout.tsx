import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';

export const siteTitle = 'TEAVAGYAPP';

type Props = {
  children: React.ReactNode;
  home?: boolean;
};
export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={'/tevagyapp.png'} />
        <meta name="description" content="The OG tool for telling someone who one is!" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>TEVAGY[APP]</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

// https://og-image.vercel.app/tevagyapp.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg

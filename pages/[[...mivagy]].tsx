import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { useRouter } from 'next/router';
// import utilStyles from '../styles/utils.module.css';

import styles from '../styles/mivagy.module.css';
import github from '../assets/GitHub-WHITE.svg';

export default function Home() {
  const router = useRouter();
  const [mivagy] = router.query.mivagy ?? [];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles['mivagy-container']}>
        <div className={`${styles['github-logo']} ${styles['glowing-border']}`}>
          <Link href="https://github.com/atesztoth/tevagya">
            <a target="_blank" rel="noreferrer">
              <Image src={github} objectFit="cover" alt="GitHub" />
            </a>
          </Link>
        </div>
        <div className={styles['mivagy-inside-container']}>
          {!mivagy && <h1>Nem tevagya.</h1>}
          {mivagy && (
            <>
              <h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>TEVAGYA</h1>
              <div style={{ textTransform: 'uppercase', fontSize: '4em', textAlign: 'center' }}>
                {mivagy}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

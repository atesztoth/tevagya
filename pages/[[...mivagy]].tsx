import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useRouter } from "next/router";
import styles from '../styles/mivagy.module.css'

export default function Home() {

  const router = useRouter()
  const [mivagy] = router.query.mivagy ?? []

  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      { !mivagy && <h1>Szia :)</h1> }
      <div className={ styles.mivagyContainer }>
        <div>
          { mivagy && <>
            <h1>TEVAGYA</h1>
            <span className={ utilStyles.swing }>{ mivagy }</span>
          </> }
        </div>
      </div>
    </Layout>
  )
}

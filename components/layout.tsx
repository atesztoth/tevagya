import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'TEAVAGYAPP'

type Props = {
  children: React.ReactNode
  home?: boolean
}
export default function Layout(props: Props) {
  const { children } = props

  return (
    <div className={ styles.container }>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={ siteTitle }/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <main className={ styles.main }>{ children }</main>
    </div>
  )
}

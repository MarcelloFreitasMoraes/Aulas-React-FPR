import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Filter</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
    </div>
  )
}

import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Click, Teste } from '@/global/utils'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Filter</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form className={styles.box}>
      <label>Digite Aqui:</label>
      <input type="text" onChange={(e: any) => {Teste(e.target.value)}} />
      <button onClick={(e) => {Click('marcelo')}}>Enviar</button>
     </form>
    </div>
  )
}

import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Click, Teste } from '@/global/utils'

export default function Home() {

 // criar uma função externa que chame o numero digitado no input no console log acrescentando
  // a mensagem --é muito louco--

  //passar duas variaveis para um segunda função aonde elas retornem dentro de um alert depois do click
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Filter</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <form>
      <label>Digite Aqui:</label>
      <input type="text" onChange={(e: any) => {Teste(e.target.value)}} />
      <button onClick={(e) => {Click('marcelo')}}>Enviar</button>
     </form>
    </div>
  )
}

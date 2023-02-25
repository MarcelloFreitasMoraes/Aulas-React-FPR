import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { Click, Consol } from '@/global/utils'

export default function Home() {

 // criar uma função externa que chame o numero digitado no input no console log acrescentando
  // a mensagem --é muito louco--

  //passar duas variaveis para um segunda função aonde elas retornem dentro de um alert depois do click
  
  const menssagem = 'O'
const subMensagem = 'Marcelo'

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Função</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <form>
      <label>Digite Aqui</label>
      <input onChange={(e) => { Consol(e.target.value) }} />
      <button onClick={() => { Click(menssagem, subMensagem) }}>Enviar</button>
    </form>
    </div>
  )
}
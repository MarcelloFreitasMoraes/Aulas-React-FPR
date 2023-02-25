import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
 // onClick no click
  // onChange na mudança

  // fazer um input com onChange que o a pessoa digitar ele vai somar com uma varivael
  // com o valor 4 e vai retornar o alert com o resultado


//fazer um click numa div com texto qualquer que retorne um alert o texto "Você conseguiu" 
// de uma variavel
const message = "Você conseguiu"
const number = 4

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | onChange e onClick</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <form className={styles.box}>
      <label>Digite um número:</label>
      <input type="text" onChange={(e) => { alert(JSON.parse(e.target.value) + number) }} />
      <div className={styles.boxDiv} onClick={() => {alert(message)}}>Click Aqui</div>
     </form>
    </div>
  )
} 
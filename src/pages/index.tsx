import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {
 // onClick no click
  // onChange na mudança

  // fazer um input com onChange que o a pessoa digitar ele vai somar com uma varivael
  // com o valor 4 e vai retornar o alert com o resultado


//fazer um click numa div com texto qualquer que retorne um alert o texto "Você conseguiu" 
// de uma variavel
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Filter</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <form className={styles.box}>
      <label>Nome:</label>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={() => {alert('você enviou a requisição')}}>Enviar</button>
     </form>
     <p onClick={() => {alert('você enviou a requisição')}}>texto de click</p>
    </div>
  )
} 
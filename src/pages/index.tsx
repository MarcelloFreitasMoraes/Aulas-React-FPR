import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  const lista = [
    {
      nome: 'Marcelo',
      email: 'programadormarcelo01@gmail.com',
      elegal: false,
      estadoCivil: 'Casado',
    },
    {
      nome: 'Karina',
      email: 'kadudavitheo@gmail.com',
      elegal: null,
      estadoCivil: 'Casada',
    },
    {
      nome: 'Théo',
      email: 'programadormarcelo01@gmail.com',
      elegal: true,
      estadoCivil: 'Solteiro',
    },
    {
      nome: 'Davi Marcelo',
      email: 'programadormarcelo01@gmail.com',
      elegal: true,
      estadoCivil: 'Solteiro',
    }
  ]

  const filtrando = lista.filter(item => {
    return item.elegal === true || item.elegal === null
  })

  console.log(filtrando, 'filtrando2');

//Listagem com 4 objetos cada objeto contendo 3 itens diversos e item boolean
//só 2 sejam true

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Filter</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {filtrando.map((item, index) => {
        return (
          <div className={styles.box}
            key={index}>
            <p>{item.nome}</p>
          </div>
        )
      })}
    </div>
  )
}

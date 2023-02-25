import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  const celulas = [
    {
      nome: 'Marcelo',
      idade: '31 anos',
      data_de_nascimento: '14/01/1922',
      nome_mae: 'Maria Elena',
      nome_pai: 'Marcelo',
    },
    {
      nome: 'Karina',
      idade: '26 anos',
      data_de_nascimento: '17/06/1996',
      nome_mae: 'Valdirene',
      nome_pai: 'Sebastião',
    },
    {
      nome: 'Théo',
      idade: '4 anos',
      data_de_nascimento: '17/03/2018',
      nome_mae: 'Marcelo',
      nome_pai: 'Karina',
    },
    {
      nome: 'Eduarda',
      idade: '11 anos',
      data_de_nascimento: '30/06/2011',
      nome_mae: 'Karina',
    },
    {
      nome: 'Davi Marcelo',
      idade: '8 anos',
      data_de_nascimento: '15/06/2014',
      nome_mae: 'Karina',
    }
  ]
//exibir uma lista mostrando o nome de 5 pessoas com o nome, idade, data de nascimento e nome da mãe, e para 3 pessoas
//o nome do Pai porem quem não tiver o pai não tem o titulo pai

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Map</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {celulas.map((item, index) =>{
        return(
          <div 
          className={styles.box}
          key={index}>
            <p>{item.nome}</p>
            <p>{item.idade}</p>
            <p>{item.data_de_nascimento}</p>
            <p>{item.nome_mae}</p>
            <p>{item.nome_pai}</p>
          </div>
        )
      })}
    </div>
  )
}

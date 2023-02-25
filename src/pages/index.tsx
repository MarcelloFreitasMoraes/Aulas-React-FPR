import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  const familia = [
    {
      nome: 'Marcelo',
      idade: '31 anos',
      data_de_nascimento: '14/01/1922',
      nome_mae: 'Maria Elena',
      trabalha: true
    },
    {
      nome: 'Karina',
      idade: '26 anos',
      data_de_nascimento: '17/06/1996',
      nome_mae: 'Valdirene',
      trabalha: true
    },
    {
      nome: 'Eduarda',
      idade: '11 anos',
      data_de_nascimento: '30/06/2011',
      nome_mae: 'Karina',
      trabalha: false
    },
    {
      nome: 'Davi Marcelo',
      idade: '8 anos',
      data_de_nascimento: '15/06/2014',
      nome_mae: 'Karina',
      trabalha: false
    }
  ]

  const favorito = [
    {
      nome: 'Marcelo',
      fruta: 'ABACAXI',
      data_de_nascimento: '14/01/1922',
    },
    {
      nome: 'Karina',
      fruta: 'ABACAXI',
      data_de_nascimento: '17/06/1996'      
    },
    {
      nome: 'Eduarda',
      fruta: 'UVA',
      data_de_nascimento: '30/06/2011'    
    },
 
  ]

  const filtrando = familia.filter(item => {
    return item.trabalha === false 
  })
  
  const filtrandoFruta = favorito.filter(item => {
    return item.fruta === 'ABACAXI' 
  })

  console.log(filtrando, 'filtrando2');

//Listagem com 4 objetos cada objeto contendo 3 itens diversos e item boolean
//só 2 sejam true e 2 vao ser false e que exiba os itens que tem "false"

//outra lista que tenha 3 objetos com 3 string e só vão dois itens que a string sejá abacaxi

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
            <p>{item.data_de_nascimento}</p>
            <p>{item.nome_mae}</p>
          </div>
        )
      })}

       {filtrandoFruta.map((item, index) => {
        return (
          <div className={styles.box}
            key={index}>
            <p>{item.nome}</p>
            <p>{item.fruta}</p>
            <p>{item.data_de_nascimento}</p>
          </div>
        )
      })}
    </div>
  )
}

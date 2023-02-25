import Head from 'next/head'
import styles from '@/styles/Home.module.scss'

export default function Home() {

  const celulas = [
    {
      lider: 'Fulano',
      numero_celula: 10,
      mais_de_10: true,
      membros: ['abreu']
    },
    {
      lider: "Fulano 2",
      numero_celula: 11,
      mais_de_10: false,
      membros: ["joao", "maria", "zezinho"]
    },
    {
      lider: "Fulano 3",
      numero_celula: 12,
      mais_de_10: false,
      membros: ["jose", "mario", "luiza"]
    }
  ]
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
            <p>{item.lider}</p>
            <p>{item.numero_celula}</p>
            {item.mais_de_10 && <span>Lider Bom</span>}
          </div>
        )
      })}
    </div>
  )
}

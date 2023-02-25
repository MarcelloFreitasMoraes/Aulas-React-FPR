import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Hearder from '@/global/components/Hearder'

export default function Home() {

//vai fazer 4 cards que usem o mesmo componente porem mostre texto diferentes
//mostrar 2 links que consomem o mesmo componente que vai seter passado um booleano por props, se
//eu passar true exibe o link, seu eu passar false ou nao passar nada, nao exibe o link

  return (
    <div className={styles.container}>
      <Head>
        <title>Aula-React-FPR | Props e Componentização</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hearder textHeader={true} section1={true} section2={true} footer={true} link1={true} link2={false}/>       
    </div>
  )
}

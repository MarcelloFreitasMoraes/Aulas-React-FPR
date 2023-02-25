import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Hearder from '@/global/components/Hearder'
import Section1 from '@/global/components/Section1'
import Section2 from '@/global/components/Section2'
import Footer from '@/global/components/Footer'

export default function Home() {
const mostrar = false
const textHeader = 'esse é o texto do Header'
  return (
    <div>
      <Head>
        <title>Aula-React-FPR | Props e Componentização</title>
        <meta name="description" content="Aula-React-FPR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Hearder textHeader={textHeader}/>
     <Section1 text={'esse é o texto da seção 1'}/>
     <Section2 text={'esse é o texto da seção 2'}/>
      <Footer/>      
    </div>
  )
}

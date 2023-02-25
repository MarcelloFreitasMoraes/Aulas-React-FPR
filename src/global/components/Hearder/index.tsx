import { Fragment } from 'react';
import { HeaderProps } from '@/global/@types/types';
import Link from 'next/link';

const Hearder = ({ textHeader, section1, section2, footer, link1, link2 }: HeaderProps) => {
    return (
        <Fragment>
            {textHeader === true && (
                <header><strong>DESCRIÇÃO</strong><br />Monkey D. Luffy, também conhecido como Luffy Chapéu de Palha ou Chapéu de Palha, é um pirata e o protagonista do anime e mangá One Piece. Ele é o fundador e o capitão do cada vez mais infame e poderoso Piratas do Chapéu de Palha, bem como um de seus principais lutadores. Seu sonho de vida é se tornar o Rei dos Piratas, encontrando o lendário tesouro deixado pelo falecido Rei dos Piratas, Gol D. Roger. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.
                </header>
            )}
            <br />
            {section1 === true && (
                <section><strong>ESSA É A PRIMEIRA SEÇÃO</strong><br />Roronoa Zoro, também conhecido como Caçador de Piratas Zoro, é o combatente dos Piratas do Chapéu de Palha e um ex-caçador de recompensas. Ele foi o primeiro membro a juntar-se à tripulação. Sua fama como mestre espadachim e sua grande força, juntamente com as ações de seu capitão, às vezes levaram os outros a acreditar que ele era o verdadeiro capitão da tripulação antes deste obter sua primeira recompensa, enquanto algumas pessoas acreditam que ele seja o imediato. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Sanji e Jinbe, e seu sonho é se tornar o maior espadachim do mundo. Zoro também é considerado como um dos doze piratas que são referidos como A Pior Geração. Ele atualmente tem uma recompensa de 1.111.000.000.
                </section>
            )}
            <br />
            {section2 === true && (
                <section><strong>ESSA É A SEGUNDA SEÇÃO</strong><br />Perna Preta Sanji, nascido como Vinsmoke Sanji, e também é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. Ele também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes. Apesar de Sanji renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula como parte de seu nome em seu pôster de procurado. Ele é oficialmente o quinto membro da tripulação e o quarto a se juntar, fazendo isso no final do Arco Baratie. Uma vez que ele nasceu no North Blue, ele é o primeiro Chapéu de Palha a não se originar do East Blue. Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Zoro e Jinbe. Seu sonho é encontrar o paraíso dos chefes, All Blue, sendo esse o lugar onde o East Blue, o West Blue, o North Blue e o South Blue se encontram, juntamente com sua vida selvagem. Devido aos eventos na Ilha Whole Cake, sua recompensa atual é de 1.032.000.000, dando-lhe a quarta maior recompensa na tripulação, ficando atrás apenas de Luffy, Zoro e Jinbe.
                </section>
            )}
            <br />
            {footer === true && (
                <footer><strong>ESSE É O FOOTER</strong><br />
                    It s the age of pirates! Luffy, a mischievous boy, dreams of becoming become the king of pirates by finding One Piece, a fabulous and mysterious treasure. But, inadvertently, Luffy one day swallowed a Magic devil fruit that turned him into a rubber man. Since then, he manages to contort his elastic body in all directions, but lost the ability to swim, the height of a pirate! Along more and more incredible adventures and chance encounters, Luffy goes to the few composing its crew and multiplying friendships with the peoples that find out, while facing formidable enemies.</footer>
            )}
            <br />
            {link1 === true && (
                <Link href={'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png'}><strong>Monkey D Luffy</strong></Link>
            )}
            <br />
            {link2 === true && (
                <Link href={'https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png'}><strong>Zoro</strong></Link>
            )}
        </Fragment>
    );
}

export default Hearder;
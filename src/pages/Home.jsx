import cards from '../datas/data'
import Banner from '../components/Banner'
import LinkCards from '../components/LinkCards'
import '../style/pages/_home.scss'

import bannerForet from '../assets/banner-foret.png';

function Home() {
  return (
    <div className='container-home'>
      <Banner image={bannerForet} text="Chez vous, partout et ailleurs" />
      <ul className='home-box-flat'>
        {cards.map((elem, index) => {
          return (
            <li key={elem.id}>
              <LinkCards imageURL={cards[index].pictures[0]} title={cards[index].title} id={elem.id} /></li>
          )
        })}
      </ul>
    </div>
  );
}
export default Home;
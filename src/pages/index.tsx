import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Carousel } from '@/components/Carousel/Carousel';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ivi-clone</title>
        <meta name="description" content="Ivi clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Carousel
          isMultiple={false}
          itemRightPadding={16}
          showArrows={'always'}
          isInfinite={true}
          autoPlay={true}
        >
          {[...new Array(4)].map((_, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '523px',
                backgroundColor: 'Grey',
                fontSize: '45px',
                textAlign: 'center',
              }}
            >
              Not multiple {index + 1}, Not multiple {index + 1}, Not multiple {index + 1}, Not
              multiple {index + 1}, Not multiple {index + 1}, Not multiple {index + 1}
            </div>
          ))}
        </Carousel>
        <Carousel initialViewingItems={7}>
          {[...new Array(20)].map((_, index) => (
            <div key={index} style={{ width: '100%', height: '250px', backgroundColor: 'green' }}>
              CarouselItem{index + 1}
            </div>
          ))}
          <div style={{ width: '100%', height: '250px', backgroundColor: 'lightGrey' }}>Last</div>
        </Carousel>
        <Carousel initialViewingItems={5}>
          {[...new Array(10)].map((_, index) => (
            <div
              key={index}
              style={{ width: '100%', height: '456px', backgroundColor: 'darkcyan' }}
            >
              TopTen{index + 1}
            </div>
          ))}
        </Carousel>
        <Carousel widthByContent={true} arrowSize={'small'} itemRightPadding={12}>
          {[
            '2020 год',
            '2022 год',
            'Русские фильмы',
            'Зарубежные фильмы',
            'Советские фильмы',
            'Американские фильмы',
            'Мультфильмы',
            'Сериалы',
            'Комедии',
            'Фантастические',
            'Триллеры',
            'Драмы',
            'Документальные',
            'Исторические',
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: '6px 16px',
                borderRadius: '14px',
                width: 'max-content',
                backgroundColor: 'darkorange',
              }}
            >
              {item}
            </div>
          ))}
        </Carousel>
        <Footer />
      </main>
    </>
  );
};
export default Home;

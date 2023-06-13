import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { filmPageSlice } from '@/store/reducers/filmPageReducer';
import { useAppDispatch } from '@/store/hooks/hooks';
import { useWindowSize } from '@/hooks/useWindowSize ';
import useScrollPosition from '@/hooks/useScrollPosition ';
import { IFilm, IReviews } from '@/shared/Interfaces/FilmPageInterfaces';
import { ONE_FILM_ROUTE } from '@/shared/constants/routes';
import Modal from '@/components/Modal/Modal';
import ModalTrailer from '../FilmTrailer/ModalTrailer/ModalTrailer';
import SmallFilmCard from '../../SmallFilmCard/SmallFilmCard';
import PersonSmallCard from './SmallPersonCard/PersonSmallCard';
import TrailerSmallCard from './TrailerSmallCard/TrailerSmallCard';
import WatchAllDevices from './WatchAllDevices/WatchAllDevices';
import PersonsModal from './PersonsModal/PersonsModal';
import Reviews from '@/components/Reviews/Reviews';
import Button from '@/components/Button/Button';
import { Carousel } from '@/components/Carousel/Carousel';
import styles from './FilmContent.module.scss';

const reviewsData: IReviews = {
  id: 1,
  entityKinopoiskId: 435,
  entityJSON: [
    {
      author: 'grishatavro',
      title: '',
      text: 'Финчер — один из лучших постановщиков современного кинематографа. Он всегда умеет сделать чертовски привлекательное кино, мастерски управляя настроением зрителя в данный момент времени. Особенно он хорош в создании атмосферы саспенса, что не устаёт доказывать в каждом своём фильме, «Девушка с татуировкой дракона» — яркий, но типичный представитель финчеровского кино во всех проявлениях.\n\nГерои Дэниеля Крейга и Руни Мары погружены в расследование убийства сорокалетней давности. В этом расследовании Крейг имеет максимально творческую роль, а Руни Мара всё умеет. Можно было бы назвать её читерским персонажем (в целом, это так и есть), если бы к моменту осознания данного факта зритель не проникся её характером и игрой актрисы. В целом, это главная и единственная существенная слабость фильма — всемогущество главной героини. \n\nВсё действие по своему духу напоминает некую сказку. Но страшную, сказку для взрослых, с обязательным грустным концом. Как первоисточники сказок братьев Гримм — там тоже хватало мрака. Финчер делает всё, чтобы в ненапряжной сцене потрепать зрителю нервы, часто гиперболизируя значимость сцены, используя звук и ракурс съёмки. Наравне с этим он сбрасывает напряжение после страшных сцен, маневрируя между линиями Крейга и Руни Мары при помощи превосходного монтажа. Но вот наступает момент, когда на обоих ветках действие накалено или наоборот, и в дело вступает эта сказочная атмосфера — непонятная сущность, проворачивающая невероятные сценарные финты, заставляющая героев действовать иррационально и генерирующая странные случайности. При этом не всегда это идёт на пользу фильму — кульминацию испортило именно нежелание бороться с костылями сценария.\n\nПока темы семьи, сексуальных домоганий и одиночества от разных персонажей переплетаются между собой в замысловатые зарисовки, фильм как художественное произведение стоит на месте. С одной стороны, в нём можно увидеть одновременно что угодно, а другой стороны ничего конкретного. Что хотели сказать авторы фильма? Что огромные корпорации — зло? Что нельзя замалчивать проблему насилия? Или что просто есть люди не от мира сего? Как итог имеем 2 поломанных жизни главных героинь и 0 ответов на вопросы зрителя. Я тоже не имею ответов, а хотелось бы. Как ни ломай голову, цельная картина не складывается. В столь превосходную ленту хочется копнуть глубже, снять верхний уровень и наградить её ещё и Оскаром за лучший полёт мысли, потому что на эмоциональном уровне кино цепляет. Можно сколько угодно вертеть финальную фигуру по всем четырём измерениям, но я прихожу к выводу, что кажущаяся на первый взгляд многогранность фильма — лишь миф.\n\nБольше о фильме мне сказать нечего. Он просто невероятно красиво выглядит. Красиво именно с художественной точки зрения: постановка, монтаж. И визуальная часть имеет под собой крепкую основу в виде сильного сценария. Несмотря на то, что под сценарием нет крепкой идеи, «Девушка с татуировкой дракона» остаётся превосходной картиной.\n\n8 из 10',
      reviewId: 3023304,
      userId: 15579515,
      reviewDate: '05 мая 2021',
      comments: [
        {
          commentId: 1,
          author: 'Anna',
          text: 'Хм фильм на реальных событиях, при чем тут «авторы наделили огромными финансовыми возможностями»?',
          commentDate: '12 декабря 2013',
        },
        {
          commentId: 1,
          author: 'Anna',
          text: 'Хм фильм на реальных событиях, при чем тут «авторы наделили огромными финансовыми возможностями»?',
          commentDate: '12 декабря 2013',
        },
        {
          commentId: 2,
          author: 'Max',
          text: 'Хм фильм на реальных событиях, при чем тут «авторы наделили огромными финансовыми возможностями»?',
          commentDate: '12 декабря 2013',
        },
        {
          commentId: 3,
          author: 'Leo',
          text: 'Хм фильм на реальных событиях, при чем тут «авторы наделили огромными финансовыми возможностями»?',
          commentDate: '12 декабря 2013',
        },
      ],
    },
    {
      author: 'masha-pervushina2003',
      title: 'Ларссон и Финчер — два разных мира',
      text: 'Фильмы, снятые по книгам, никогда не бывают лучше самих книг — этот закон нерушим со времён сотворения вселенной. Если всё хорошо складывается, экранизация может стать отдельным, самостоятельным произведением, не лучше и не хуже — как это было, например, с финчеровским «Бойцовским клубом». Финчер вообще мастер создавать на основе уже существующего что-то принципиально новое, и об этом важно помнить, если смотришь «Девушку с татуировкой дракона» уже после того, как её же прочитал. Потому что иначе риск остаться разочарованным очень велик.\n\nСюжет вплоть до последнего поворота полностью совпадает с книжным, разве что значительно подсокращён и ускорен. Обвинённый в клевете и похоронивший свою карьеру экономический журналист Микаэль Блумквист по заказу финансового магната расследует убийство, совершённое в самом сердце семейного гнезда. Любимую внучатую племянницу главы огромного концерна убил кто-то из ближайших родственников и уже сорок лет изводит старика, посылая ему «подарки».\n\nВ расследование Блумквист втягивает хакершу-социопатку Лисбет Саландер, гениальную и недееспособную. В фильме этот странноватый и до жути притягательный дуэт сыгран Дэниелом Крейгом и Руни Марой, и сыгран просто блестяще — при последующем чтении представить себе на месте главных героев кого-то другого уже не получится. \n\nНа этом сходства фильма с книгой и заканчиваются. Помимо тысячи прибавленных и додуманных сценаристами мелочей, здесь кардинально различается основной посыл — да и вся атмосфера в целом. Значительная роль в действии книги отведена поиску улик, но всё-таки самое важное для расследования — старательное копание в запутанных семейных связях аристократического клана — кто кого ненавидит, кто с кем не разговаривает. Внешнее благополучие большой и дружной семьи — не более чем пшик, красивая картинка для прикрытия адских глубин. Экранизация же являет собой квинтэссенцию ужаса самого по себе, неразбавленного и не особо старательно привязанного ко внутренним семейным разборкам. Точкой отсчёта здесь служит не род, а пол — между мужчиной и женщиной идёт непрекращающаяся война, причём война не на жизнь, а на смерть. О понимании, на которое хоть как-то может надеяться любая мало-мальская семья — где все ненавистные, но всё-таки «свои» — здесь и речи не идёт. Это война не внутри, а между, и она, может быть, куда более разрушительна. \n\nОсновная мысль фильма проста и зла, как удар клюшкой в висок: it’s a bad man’s world, мир плохих мужчин, и женщине в нём отведена роль жертвы — просто потому что она слабее. Как ей спастись? Бить в ответ. Тщедушная Лисбет виртуозно лупасит обидчиков, и зритель наблюдает за этим с почти нескрываемым мстительным удовольствием, а главный герой-плейбой очень быстро оказывается разжалован до звания девушки Бонда — пребывает в постоянном замешательстве и откровенно нуждается в том, чтобы кто-нибудь сильный его спас. Чем Лисбет в конечном итоге и занимается. \n\nТакая перестановка сил немного пугает, но всё-таки маняще хороша — пора бы уже мужчине побыть на месте слабого, прочувствовать «всё это» на своей шкуре — а женщине, в самом деле, пора уже долбануть насильника электрошокером и показать, кто в доме хозяин. Замкнутая система, где всё запущено в обратном направлении, завораживает с чисто эстетической точки зрения, бьёт точно и наповал: мир повернулся вспять — и внезапно спасся. Финчер — мастер не такта, но ритма, его фильмы входят в сознание через звуки и монтаж, вливаются, как пуля, и застревают там надолго. Невысказанный вслух месседж впаян в эстетику мира, а значит, оказывается его основой. Ощущения в финчеровском фильме неотделимы от сути, и для детективной составляющей места просто не остаётся — она болтается где-то сбоку. Семейные дрязги отправлены туда же, а вместе с ними и целый пласт проблем, толкований и смыслов, волнующих Ларссона — но не Финчера. \n\nВ книге, конечно, всё это есть — и злое отчаянное мщение, и раскол между двумя мирами — не зря в оригинале роман называется «Мужчины, которые ненавидят женщин». Лисбет Саландер бьёт с надрывом, с задушенным в горле страшным криком — в отличие от садистов-насильников, она не наслаждается, а именно ненавидит. Экранизация — сборник пугающе сильных и упивающихся своей силой монстров, с которыми поделать ничего нельзя, кроме как заколотить поглубже в землю. Роман — материя более тонкая, вместо чистого зла, так хорошо смотрящегося на экране, здесь всё-таки настоящая человеческая ненависть — мужчин к женщинам, женщин к мужчинам, всех друг к другу. Дать отпор, превратиться из жертвы в мстителя — безусловно, первый шаг на пути к спасению, но далеко не единственный; если ограничиться только им, рано или поздно мститель сам превратится в насильника.\n\nФильм этот вопрос оставляет за кадром, книга развивает и тянет за самые разные ниточки; одна из особенно важных тем — возможность говорить о том, что происходит. Месть совершается так же тихо, скрытно — никто не должен знать о кошмарах, творящихся со мной, и никто не должен знать о том, что я творю с другими. Воющая от боли Лисбет Саландер в этот момент оказывается в одной лодке с маньяком-убийцей, которого годами насиловал собственный отец. И абсолютная тишина там, где так нужен душераздирающий крик, — вот что по-настоящему страшно. \n\nЗаложники этой тишины — молчаливые дети, вырастающие в бессловесных взрослых, огромный семейный клан, мучительно хранящий внешнее благополучие и зарывающий свои скелеты поглубже в подвал. Заложники тишины — Микаэль Блумквист, Лисбет Саландер, Швеция и весь мир. В итоге этой тишине они проигрывают, но впереди ещё две книги, и борьба ещё не окончена — идейным лидером её становится вовсе не ангел мщения, а по-общечеловечески слабый журналист. Всю дорогу он мучается от собственного бессилия, но раз за разом стоически его принимает — может быть, единственный из всех героев книги. За ним будущее — не война амазонок с людоедами, а возможность рассказать о своей боли и быть услышанным. \n\nУ фильма же и задача, и подача совершенно другие — нет смысла снимать то, что уже и так написано, лучше создать что-то своё. Новая концепция, новое видение — всё это увлекает, завораживает, пугает, загружается в мозг по гигабайту в секунду. Не стоит ждать от экранизации книжных достоинств хорошего детектива, не стоит искать разумных ответов на серьёзные вопросы. В отличие от романной кропотливой работы журналиста, погружённого в недра человеческой боли, фильм — это звенящая от напряжения нить, хлёсткий удар по щеке и на полной скорости несущийся по ночному шоссе мотоцикл. Это «Мужчины, которые ненавидят женщин» глазами Лисбет Саландер, она здесь главный герой, и именно она мчится на этом мотоцикле к свободе, добытой злостью и местью.',
      reviewId: 2967818,
      userId: 35809955,
      reviewDate: '23 ноября 2020',
      comments: [],
    },
    {
      author: 'Mister_Christmas',
      title: "#сел_посмотреть 'Девушка с татуировкой дракона'",
      text: 'WARNING: оригинальный роман Стига Ларсона я не читал, ровно как и не смотрел шведскую экранизацию. Не сочтите это очередным приступом фанатизма по Дэвиду Финчеру, просто перед тем, как начать публиковать посты про фильмы, данная рецензия была черновиком. Сейчас я немного довел текст до ума, но руки до вышеуказанных предшественников все равно не дошли. Так что данная кинолента рассматривается исключительно как самобытный продукт.\n\nИ признаюсь честно — я остался доволен прежде всего не столько картинкой, построенной по канонам режиссера, сколько персонажами. Михаэль Блюмквист, сыгранный Дэниелом Крейгом — журналист, который покатил бочку на одного шведского толстосума, получил проигрыш в суде и теперь ему предстоит на некоторое время исчезнуть с радаров. В этот момент с ним на связь выходит промышленник Хенрик Вагнер. Хенрик просит журналиста расследовать дело о таинственном убийстве его племянницы, случившемся 40 лет назад. Журналист Блюмквист переквалифицируется в детектива Бонда (не прием фильма, я сам его так называю), и занимается расследованием происшествия, в то время как кто-то не очень хороший мешает ему спокойно жить.\n\nВ данном пересказе сюжет напоминает детектив Агаты Кристи, а фамилия Блюмквист отсылает к творчеству еще одной шведской писательницы — Астрид Линдгрен. Однако главным отличием от банальной истории про «убийцу-дворецкого» становится персонаж Лисбет Саландер — компьютерный гений с татуировкой дракона на всю спину и внешностью репликанта-гота. У Дэвида Финчера развито чувство иронии, раз он решил взять на роль хакерши актрису Руни Мара, которая в «Социальной сети» того же Финчера играла девушку главного героя, также помешанного на компьютерах. Правда, несмотря на звучное название фильма, сама Лисбет отходит на второй план, при этом не теряя свою сюжетную линию. Она сталкивается с проблемами, теряя своего отчима, её новый опекун из тех, что «любит пожестче», но Лисбет находит способ достаточно больной мести. Вообще, персонаж Саландер при всей своей асоциальности, мизантропии и определенному пофигизму воспринимается поживее, чем детектив Бонд, который так же сохраняет спокойствие вне зависимости ситуации, но эта фишка с ним не работает. Руни Мара хоть и держит 90% экранного времени одно лицо, но здесь это персонаж с таким характером. А то я помню пофигизм персонажа Руни в богопротивном ремейке «Кошмара на улице Вязов», но там все подошли на «отвали».\n\nЛабиринт повествования остается темным. В ходе расследования всплывают библейские тексты, нацистские связи, семейные конфликты… Финчер открывает обнаженку в своей фильмографии, вот только сцены сближения Лисбет и Михаэля ни разу не намекают на «любовь, отношения и дела херувимов». Есть симпатия, проявление доброты и «предательство». Стоит также отметить важность персонажей в исполнении Робин Райт, Кристофера Пламмера и Стеллана «символа всего шведского кинематографа» Скасгарда. Взаимодействие главных героев с ними двигает сюжет, из-за чего вроде как закрытый триллер, сосредотачивающий внимание на коттедже посреди острова, где живут Михаэль и Лисбет, проворачивает действия в открытом мире.\n\nИнтересно, что при дословном переводе роман называется «Мужчины, которые ненавидят женщин». Не знаю, что там по поводу мужчин, но Саландер предстает в образе сильной девушки, и это не учитывая элемент расправы по отношению к определенным ублюдкам. И она цепляет не вызывающей внешностью. Просто в киноперсонажах-асоциалах определенно есть нечто притягательное. Примите сие утверждение как факт.',
      reviewId: 2876938,
      userId: 17209163,
      reviewDate: '08 февраля 2020',
      comments: [],
    },
  ],
};

const FilmContent: FC<IFilm> = (movie) => {
  const [isOpenTrailers, setIsOpenTrailers] = useState<boolean>(false);
  const router = useRouter();
  const { SET_MODAL_TYPE, SET_OPEN } = filmPageSlice.actions;
  const [personCardsCount, setPersonCardsCount] = useState<number>(10);
  const windowWidth = useWindowSize();
  const scrollPosition = useScrollPosition();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (windowWidth !== null) {
      if (windowWidth < 385) {
        setPersonCardsCount(2);
      } else if (windowWidth < 473) {
        setPersonCardsCount(3);
      } else if (windowWidth < 563) {
        setPersonCardsCount(4);
      } else if (windowWidth < 600) {
        setPersonCardsCount(5);
      } else if (windowWidth < 613) {
        setPersonCardsCount(3);
      } else if (windowWidth < 725) {
        setPersonCardsCount(4);
      } else if (windowWidth < 837) {
        setPersonCardsCount(5);
      } else if (windowWidth < 949) {
        setPersonCardsCount(6);
      } else if (windowWidth < 1060) {
        setPersonCardsCount(7);
      } else if (windowWidth < 1160) {
        setPersonCardsCount(8);
      } else if (windowWidth < 1299) {
        setPersonCardsCount(9);
      } else {
        setPersonCardsCount(10);
      }
    }
  }, [windowWidth]);

  return (
    <div className={styles.filmContent}>
      <section className={styles.filmContent__films}>
        <div className={styles.filmContent__container}>
          <h2 className={styles.filmContent__title}>С фильмом «{movie.name}» смотрят</h2>
          <div className={styles.filmContent__slider}>
            <Carousel initialViewingItems={7}>
              {movie.similarMovies.map((movie) => {
                return (
                  <SmallFilmCard key={movie.similarKinopoiskId} movie={movie} type={'posterInfo'} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section className={styles.filmContent__persons}>
        <div className={styles.filmContent__container}>
          <Link
            href={`${ONE_FILM_ROUTE}/${movie.kinopoiskId}/person`}
            shallow={true}
            className={`${styles.filmContent__title} ${styles.title_link}`}
            onClick={() => dispatch(SET_MODAL_TYPE('persons'))}
          >
            Актёры и создатели
          </Link>
          <div className={styles.filmContent__list}>
            {[movie.director[0], ...movie.actors].splice(0, personCardsCount).map((person) => {
              return (
                <PersonSmallCard
                  key={person.personKinopoiskId}
                  person={person}
                  size={
                    !windowWidth || (windowWidth !== null && windowWidth > 599) ? 'small' : 'xs'
                  }
                />
              );
            })}
            <Link
              href={`${ONE_FILM_ROUTE}/${movie.kinopoiskId}/person`}
              shallow={true}
              className={styles.roundButton}
              onClick={() => {
                dispatch(SET_MODAL_TYPE('persons'));
              }}
            >
              Ещё
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.filmContent__trailers}>
        <div className={styles.filmContent__container}>
          <h2 className={styles.filmContent__title}>
            <Link
              onClick={() => {
                dispatch(SET_MODAL_TYPE('trailers'));
              }}
              href={`${ONE_FILM_ROUTE}/${movie.kinopoiskId}/person`}
              shallow={true}
              className={`${styles.filmContent__title} ${styles.title_link}`}
            >
              Трейлеры
            </Link>{' '}
            и доп. материалы
          </h2>
          <div className={styles.filmContent__slider}>
            <Carousel initialViewingItems={4}>
              {[movie.trailerLink, movie.trailerLink, movie.trailerLink].map((trailer) => {
                return (
                  <TrailerSmallCard
                    key={movie.name}
                    poster={movie.poster}
                    movieName={movie.name}
                    onClickHandler={setIsOpenTrailers}
                    trailer={trailer}
                    carousel={true}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section className={styles.filmContent__comments}>
        <div className={styles.filmContent__container}>
          <div className={styles.filmContent__comments_header}>
            <Link
              onClick={() => {
                dispatch(SET_MODAL_TYPE('reviews'));
              }}
              href={`${ONE_FILM_ROUTE}/${movie.kinopoiskId}/person`}
              shallow={true}
              className={`${styles.filmContent__title} ${styles.title_link}`}
            >
              Рецензии<sup className={styles.sup}>{reviewsData.entityJSON.length}</sup>
            </Link>
            <Button
              border={'1px solid #a5a1b2'}
              bgColor={'transparent'}
              height={'37px'}
              radius={'8px'}
              width={'173px'}
              as={'link'}
              href={`/film/${movie.kinopoiskId}/person`}
              hoverBorder={'1px solid #fff'}
              target={'_self'}
              onClick={() => {
                dispatch(SET_MODAL_TYPE('reviews'));
              }}
            >
              Оставить рецезию
            </Button>
          </div>
          <Reviews {...reviewsData} />
          <div className={styles.bigCommentBtn}>
            <Button
              border={'1px solid #a5a1b2'}
              bgColor={'transparent'}
              height={'37px'}
              radius={'8px'}
              width={'100%'}
              as={'link'}
              href={`/film/${movie.kinopoiskId}/person`}
              hoverBorder={'1px solid #fff'}
              target={'_self'}
              onClick={() => {
                dispatch(SET_MODAL_TYPE('reviews'));
              }}
            >
              Оставить рецензию
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.filmContent__section}>
        <div className={styles.filmContent__container}>
          <WatchAllDevices movieName={movie.name} poster={movie.poster} />
        </div>
      </section>
      {scrollPosition !== null && scrollPosition > 500 && (
        <div className={styles.filmContent__watchButton}>
          <Button
            border={'1px solid #ea003d'}
            bgColor={'#ea003d'}
            height={'48px'}
            radius={'8px'}
            width={'100%'}
            as={'link'}
            href={'https://www.ivi.ru/subscribe'}
            hoverBg={'#ff0f4d'}
            hoverBorder={'1px solid #ff0f4d'}
            target="_self"
          >
            <div className={styles.describe}>
              <p className={styles.filmContent__text_bold}>Смотреть</p>
              <p className={styles.filmContent__text_small}>по подписке Иви</p>
            </div>
          </Button>
        </div>
      )}
      <Modal
        open={router.pathname.includes('person') || isOpenTrailers}
        onClose={
          isOpenTrailers
            ? () => setIsOpenTrailers(false)
            : () => {
                router.push(`${ONE_FILM_ROUTE}/${movie.kinopoiskId}`);
                dispatch(SET_OPEN(false));
              }
        }
      >
        {isOpenTrailers ? (
          <ModalTrailer
            onClose={() => setIsOpenTrailers(false)}
            trailer={movie.trailerLink}
            ageRating={movie.ageRating}
            name={movie.name}
          />
        ) : (
          <PersonsModal
            onClose={() => {
              dispatch(SET_OPEN(false));
              router.push(`${ONE_FILM_ROUTE}/${movie.kinopoiskId}`);
            }}
            movie={movie}
            comments={reviewsData}
          />
        )}
      </Modal>
    </div>
  );
};

export default FilmContent;

<template>
  <div class="home">
    <mainHeader/>
    <eventFilter/>
    <mainSlider/>
    <div class="container">
      <h1 class="main-title">Ипользуя наш сервис вы получаете</h1>
      <div class="row features">
        <div class="col-md-3">
          <div class="feature-item">
            <div class="feature-item-icon">
              <img src="/icons/rocket.svg" alt="">
            </div>
            <div class="feature-item-description">Быстрый поиск и покупка билетов без комиссии</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="feature-item">
            <div class="feature-item-icon">
              <img src="/icons/bilet.svg" alt="">
            </div>
            <div class="feature-item-description">Вы платите только за билет без наценок и прочих сборов</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="feature-item">
            <div class="feature-item-icon">
              <img src="/icons/phone.svg" alt="">
            </div>
            <div class="feature-item-description">не надо искать принтер - Покажите билет на смартфоне</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="feature-item">
            <div class="feature-item-icon">
              <img src="/icons/gift.svg" alt="">
            </div>
            <div class="feature-item-description">покупай билет для близких и отправляй им на телефон </div>
          </div>
        </div>
      </div>

      <h1 class="main-title">Афиша концертов Москвы на 2019 год</h1>
      <div class="row events">
        <div class="col-md-3" v-for="event in concerts" :key="event.title">
          <div class="event-item">
            <div class="event-item-header d-table">
              <div class="d-table-cell align-middle">
                {{event.title}}
              </div>
              <div class="event-agelimit d-table-cell align-middle">{{event.agelimit}}+</div>
            </div>
            <div class="event-item-body">
              <div class="event-image">
                <img :src="event.image" alt="">
              </div>
              <div class="event-info">
                <div class="event-info-item date">{{event.date}}</div>
                <div class="event-info-item location">{{event.location}}</div>
                <div class="event-info-item price">{{event.price}}  ₽</div>
              </div>
              <a href="#" class="event-buy-btn btn">Купить билет</a>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="pseudo-link mb-5">Показать больше</a>

      <h1 class="main-title">Афиша спортивных меропритий в  Москве на 2019 год</h1>
      <div class="row events">
        <div class="col-md-3" v-for="event in sports" :key="event.title">
          <div class="event-item">
            <div class="event-item-header d-table">
              <div class="d-table-cell align-middle">
                {{event.title}}
              </div>
              <div class="event-agelimit d-table-cell align-middle">{{event.agelimit}}+</div>
            </div>
            <div class="event-item-body">
              <div class="event-image">
                <img :src="event.image" alt="">
              </div>
              <div class="event-info">
                <div class="event-info-item date">{{event.date}}</div>
                <div class="event-info-item location">{{event.location}}</div>
                <div class="event-info-item price">{{event.price}}  ₽</div>
              </div>
              <a href="#" class="event-buy-btn btn">Купить билет</a>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="pseudo-link mb-5">Показать больше</a>

      <h1 class="main-title">Афиша экскурсий в  Москве на 2019 год</h1>
      <div class="row events">
        <div class="col-md-3" v-for="event in theatrs" :key="event.title">
          <div class="event-item">
            <div class="event-item-header d-table">
              <div class="d-table-cell align-middle">
                {{event.title}}
              </div>
              <div class="event-agelimit d-table-cell align-middle">{{event.agelimit}}+</div>
            </div>
            <div class="event-item-body">
              <div class="event-image">
                <img :src="event.image" alt="">
              </div>
              <div class="event-info">
                <div class="event-info-item date">{{event.date}}</div>
                <div class="event-info-item location">{{event.location}}</div>
                <div class="event-info-item price">{{event.price}}  ₽</div>
              </div>
              <a href="#" class="event-buy-btn btn">Купить билет</a>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="pseudo-link mb-5">Показать больше</a>

    </div>

    <subscribeBox />
    <mainFooter />

  </div>
</template>

<script>
// import { HTTP } from '@/http-common'
import mainHeader from '@/components/mainHeader.vue'
import eventFilter from '@/components/eventFilter.vue'
import mainSlider from '@/components/mainSlider.vue'
import subscribeBox from '@/components/subscribeBox.vue'
import mainFooter from '@/components/mainFooter.vue'

export default {
  name: 'home',
  components: {
    mainHeader,
    eventFilter,
    mainSlider,
    subscribeBox,
    mainFooter
  },
  data(){
    return {
      concerts: [
        {
            "_id":"5dd2d89ce7a0002f00c3ab2e",
            "type":"Концерт",
            "title":"Шок Концерт",
            "date":"5.12.2019",
            "location":"МКК \"Роза Холл\"",
            "price":"1800-8000",
            "image":"https://vokrug.tv/pic/news/0/b/5/4/0b54f7210798ffaf80928c672b407b47.jpg",
            "agelimit":18
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab2e",
            "type":"Концерт",
            "title":"Однажды в России. Новогодний концерт",
            "date":"7.12.2019",
            "location":"МКК \"Роза Холл\"",
            "price":"1800-8000",
            "image":"http://glamur.co.il/wp-content/uploads/2015/06/2015-Approved-Photo-1.jpg",
            "agelimit":18
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab2e",
            "type":"Концерт",
            "title":"Хип-Хоп и толерантность",
            "date":"8.12.2019",
            "location":"Олимпийский",
            "price":"1000-500",
            "image":"https://kudaufa.ru/uploads/eb0c3005d8357259b29f00e9b4de7783.jpg",
            "agelimit":18
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab2e",
            "type":"Концерт",
            "title":"Дети будущего",
            "date":"12.12.2019",
            "location":"Летняя арена",
            "price":"1200-5000",
            "image":"https://bel.cultreg.ru/uploads/d3cd75f5e1e7e132fb912639860e93b1_w540_h360.jpeg",
            "agelimit":18
        }
      ],
      sports: [
        {
            "_id":"5dd2d89ce7a0002f00c3ab2b",
            "type":"Спорт",
            "title":"Футбольный фестиваль",
            "date":"2.12.2019",
            "location":"Дворец спорта \"Большой\"",
            "price":"200-500",
            "image":"https://icdn.lenta.ru/images/2018/06/14/17/20180614172652615/pic_fa4344b22953ed72a5f0dbf27ac111b0.jpg",
            "agelimit":18
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab30",
            "type":"Спорт",
            "title":"ХК Сочи - Северсталь",
            "date":"9.12.2019",
            "location":"Дворец спорта \"Большой\"",
            "price":"300-4500",
            "image":"https://cdn.kassir.ru/sochi/poster/ba/baa99101ad5b051ec3bfd2d9a420a30e.jpg",
            "agelimit":18
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab30",
            "type":"Спорт",
            "title":"Мастер-класс по футболу",
            "date":"10.12.2019",
            "location":"Стадион большой",
            "price":"500-5500",
            "image":"https://img.fifa.com/image/upload/t_p3/n0fcvbahk1yel0ususiz.jpg",
            "agelimit":16
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab3d",
            "type":"Спорт",
            "title":"Встреча фанклуба Барселоны",
            "date":"16.12.2019",
            "location":"Барселона",
            "price":"100-4000",
            "image":"http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/2019-03-02T212206Z_386770805_RC1B4DF2D500_RTRMADP_3_SOCCER-SPAIN-MAD-FCB.jpg?itok=2odSf4b-",
            "agelimit":16
        }
      ],
      theatrs: [
        {
            "_id":"5dd2d89ce7a0002f00c3ab4c",
            "type":"Экскурсия",
            "title":"Добро пожаловать в Рим",
            "date":"3.12.2019",
            "location":"Рим",
            "price":"1000-5000",
            "image":"https://www.weandworld.com/wp-content/uploads/2013/01/forumroma.jpg",
            "agelimit":12
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab4c",
            "type":"Экскурсия",
            "title":"Доисторический музей",
            "date":"5.12.2019",
            "location":"Москва",
            "price":"150-500",
            "image":"https://100-travel.ru/images/foto-menu/ekskursii.jpg",
            "agelimit":13
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab4c",
            "type":"Экскурсия",
            "title":"Гуляем по Амстердаму",
            "date":"8.12.2019",
            "location":"Амстердам",
            "price":"100-500",
            "image":"https://justtravel.me/wp-content/uploads/2019/08/amsterdam-houses-apartments-920x500.jpg",
            "agelimit":12
        },
        {
            "_id":"5dd2d89ce7a0002f00c3ab4c",
            "type":"Экскурсия",
            "title":"Удивительный Шанхай",
            "date":"12.12.2019",
            "location":"Шанхай",
            "price":"500-1500",
            "image":"https://fregataero.ru/media/com_mtree/images/listings/m/3131.jpg",
            "agelimit":6
        }
      ]
    }
  },
  methods: {
    // getEvents () {
    //   HTTP.get('/events')
    //   .then(response => {
    //     console.log(response.data)
    //   })
    //   .catch(e => {
    //     console.log('Error - ' + e)
    //     // this.error = e
    //   })
    // }
  },
  created() {
    // this.getEvents()
  }
}
</script>

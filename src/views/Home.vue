<template>
  <div class="home">
    <mainHeader v-if="!hideHeader"/>
    <!--<eventFilter/>-->
    <mainSlider :event="events[0]"/>
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


      <h1 class="main-title">Куда сходить в {{cityName}}</h1>
      <div class="row events">
        <div class="col-md-3" v-for="event in events" :key="event.title">
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
              <div class="event-buy-btn btn" @click="addToCart(event)" style="cursor:pointer">Купить билет</div>
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
import { HTTP } from '@/http-common'
import mainHeader from '@/components/mainHeader.vue'
//import eventFilter from '@/components/eventFilter.vue'
import mainSlider from '@/components/mainSlider.vue'
import subscribeBox from '@/components/subscribeBox.vue'
import mainFooter from '@/components/mainFooter.vue'

export default {
  name: 'home',
  components: {
    mainHeader,
    //eventFilter,
    mainSlider,
    subscribeBox,
    mainFooter
  },
  data(){
    return {
      cityName:"Сочи",
      hideHeader:false,
      events: [],
      misc:[
        {
            "_id":"1",
            "type":"Музей",
            "title":"Видовая башня на горе Большой Ахун",
            "date":"Ежедневно: 09.00-21.00",
            "location":"г. Сочи, Хостинский район, гора Большой Ахун",
            "price":"100",
            "image":"http://krasotyrossii.ru/wp-content/uploads/2015/09/%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B1%D0%B0%D1%88%D0%BD%D1%8F-%D0%BD%D0%B0-%D0%B3%D0%BE%D1%80%D0%B5-%D0%90%D1%85%D1%83%D0%BD-%D0%A1%D0%BE%D1%87%D0%B8-%D1%84%D0%BE%D1%82%D0%BE.jpg",
            "agelimit":0
        },
                {
            "_id":"2",
            "type":"Природный объект",
            "title":"Водопады Псыдах и Шапсуг",
            "date":"Ежедневно: 09.00-21.00",
            "location":"г. Сочи, Лазаревский район, п. Калеж, стоянка Аше",
            "price":"100",
            "image":"http://npsochi.ru/images/IMG_20180420_114759.jpg",
            "agelimit":0
        },
                {
            "_id":"3",
            "type":"Музей",
            "title":"Византийский храм",
            "date":"Ежедневно: 09.00-21.00",
            "location":"г. Сочи, Лазаревский район, п. Лоо, ул. Таллинская",
            "price":"100",
            "image":"http://npsochi.ru/images/ekoprosveshchenie/razdel-o-turizme-i-marshrutakh/vizantijskij-khram/24.jpg",
            "agelimit":0
        },
                {
            "_id":"4",
            "type":"Природный объект",
            "title":"Змейковские водопады",
            "date":"Ежедневно: 08.00-19.00",
            "location":"г. Сочи, Хостинский район, п. Измайловка, Змейковские водопады",
            "price":"100",
            "image":"http://npsochi.ru/images/novosti/zmeiki/zmeiki-04.JPG",
            "agelimit":0
        },
        {
            "_id":"5",
            "type":"Музей",
            "title":"Музей природы",
            "date":"Ежедневно: 09.00-18.00",
            "location":"г. Сочи, Адлерский район, Краснополянское лесничество",
            "price":"100",
            "image":"http://npsochi.ru/images/ekoprosveshchenie/razdel-o-turizme-i-marshrutakh/muzej-prirody/219.jpg",
            "agelimit":0
        },
                {
            "_id":"6",
            "type":"Природный объект",
            "title":"Хмелевские озера",
            "date":"Ежедневно: 09.00-21.00",
            "location":"г. Сочи, Адлерский район, Краснополянское лесничество",
            "price":"100",
            "image":"http://npsochi.ru/images/ekoprosveshchenie/razdel-o-turizme-i-marshrutakh/khmelevskie-ozera/167.jpg",
            "agelimit":0
        },
                {
            "_id":"7",
            "type":"Природный объект",
            "title":"Водопад Девичьи Слёзы",
            "date":"Ежедневно: 09.00-21.00",
            "location":"г. Сочи, Адлерский район, по старой дороге в Красную поляну",
            "price":"100",
            "image":"http://npsochi.ru/images/ekoprosveshchenie/razdel-o-turizme-i-marshrutakh/vodopad-devichi-sljozy/191.jpg",
            "agelimit":0
        },
        {
            "_id":"8",
            "type":"Природный объект",
            "title":"Агурский водопад",
            "date":"Ежедневно: 08.00-19.00",
            "location":'г. Сочи, Адлерский район, СОК "Спутник"',
            "price":"100",
            "image":"http://npsochi.ru/images/ekoprosveshchenie/razdel-o-turizme-i-marshrutakh/agurskij-vodopad/268.jpg",
            "agelimit":0
        }
      ],
    }
  },
  methods: {
    getEvents () {
      HTTP.get('/events')
      .then(response => {
        this.events = response.data
        // console.log(response.data)
      })
      .catch(e => {
        console.log('Error - ' + e)
        // this.error = e
      })
    },
    addToCart (event) {
      if (localStorage.cart) {
        localStorage.cart = localStorage.cart + ',' + event._id
      } else {
        localStorage.cart = event._id
      }
      
    }
  },
  created() {
    this.getEvents()

    let getQueryString=document.location.href.split('?')[1];
    if (getQueryString) {
      let params=getQueryString.split('&');
      params.forEach((p)=> {
        let args=p.split('=')
        if ((args[0].toUpperCase()=="MOBILE")&&(args[1].toUpperCase()=="TRUE")) {
          this.hideHeader=true
        }
      })
    }

  }
}
</script>

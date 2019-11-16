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
              <a href="#" class="event-buy-btn btn">Купить билет</a>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="pseudo-link mb-5">Показать больше</a>

      <h1 class="main-title">Афиша спортивных меропритий в  Москве на 2019 год</h1>
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
              <a href="#" class="event-buy-btn btn">Купить билет</a>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="pseudo-link mb-5">Показать больше</a>

      <h1 class="main-title">Афиша экскурсий в  Москве на 2019 год</h1>
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
      events: [
        {
          title: 'The Vamps',
          agelimit: '12',
          date: '14 ноября, чт 20:00',
          location: 'Adrenaline Stadium',
          price: '2 500 — 8 000',
          image: 'https://i.pinimg.com/736x/32/7c/df/327cdff1a4ceb9be191034a5c857fc20.jpg'
        },
        {
          title: 'The Queen & Scorpions Symphony Tribute',
          agelimit: '18',
          date: '13 ноября, чт 20:00',
          location: 'Adrenaline Stadium',
          price: '1 000 — 5 000',
          image: 'https://i.pinimg.com/736x/32/7c/df/327cdff1a4ceb9be191034a5c857fc20.jpg'
        },
        {
          title: 'Голос в Крокусе',
          agelimit: '14',
          date: '15 ноября, чт 20:00',
          location: 'Adrenaline Stadium',
          price: '4 700',
          image: 'https://i.pinimg.com/736x/32/7c/df/327cdff1a4ceb9be191034a5c857fc20.jpg'
        },
        {
          title: 'Моральный кодекс',
          agelimit: '13',
          date: '18 ноября, чт 20:00',
          location: 'Adrenaline Stadium',
          price: '5 500 — 10 000',
          image: 'https://i.pinimg.com/736x/32/7c/df/327cdff1a4ceb9be191034a5c857fc20.jpg'
        }
      ]
    }
  }
}
</script>

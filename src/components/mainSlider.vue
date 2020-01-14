<template>
  <section class="mainSlider">
    <div class="container">
      <br>
      <h1 class="main-title">Быстрый поиск и покупка билетов без комиссии</h1>

      <div class="row">
        <div class="col-md-12">
          <div class="slider-event">
            <div class="event-item">
              
              <div class="event-image">
                <img :src="event.image" alt="">
              </div>
              <div class="event-item-body">
                <div class="event-item-header">
                  <div class="event-item-type">{{event.type}}</div>
                  <div class="event-item-agelimit">{{event.agelimit}}+</div>
                </div>
                <div class="event-item-title">
                  {{event.title}}
                </div>
                <!-- <div class="text-center" @click="openForeignLink(event.aboutLink)" style="cursor:pointer">
                  <u>Посмотреть подробную информацию</u><br>
                  <img src='http://sochiru.ru/upload/iblock/94f/94fb9cc1c23ee339134bbc29e4097a02.svg' height="32px" style="margin-bottom:10px"/><br>

                </div> -->

                <div class="event-info">
                  <div class="event-info-item date" v-if="event.date!=''">{{event.date}}</div>
                  <div class="event-info-item location">{{event.location}}</div>
                  <div class="event-info-item price">{{event.price}}  ₽</div>
                </div>
                <router-link class="event-buy-btn btn"  :to="`events/${event._id}`">Купить билеты</router-link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: 'Slider',
  props: ['event'],
  data() {
    return {
      sliderEvents: [
        {
          id: '',
          type: '',
          title: '',
          agelimit: '',
          date: '',
          location: '',
          price: '',
          image: '',
          aboutLink: ''
        }
      ]
    }
  },
  methods: {
    buyTicket() {

    },
    openForeignLink(url) {
      document.location=url
    }
   }
}
</script>
<style lang="scss" scoped>
  .mainSlider {

    .slider-event {
      border: 1px solid #E8E8E8;
      border-radius: 5px;
      overflow: hidden;
      padding: 30px 70px;
      margin-bottom: 70px;
    }

    .event-image {
      float: left;
      width: 665px;
      height: 447px;
      overflow: hidden;
      text-align: center;
      margin-top: 7px;
      img {
        height: 100%;
      }
    }

    .event-item-body {
      margin-left: 731px;
      width: 320px;
      .event-item-title {
        font-size: 1.4rem;
        text-transform: uppercase;
        font-weight: 800;
        margin-bottom: 3.2rem;
      }

      .event-item-header {
        overflow: hidden;
        margin-bottom: 3.7rem;
        .event-item-type {
          float: left;
          font-size: 1.5rem;
        }
        .event-item-agelimit {
          float: right;
          font-size: 1.3rem;
          margin: 3px 7px 0 0;
        }
      }
      .event-info {
        margin-bottom: 1.6rem;
        .event-info-item {
          margin-bottom: 10px;
          font-size: 1.1rem;
          padding-left: 2.4rem;
          background-position: 7px 6px;
          background-repeat: no-repeat;
          &.date {
            background-image: url('/img/icons/date.svg');
          }
          &.location {
            background-image: url('/img/icons/location.svg');
          }
          &.price {
            background-image: url('/img/icons/price.svg');
          }
        }
      }
      .event-buy-btn {
        background: #3400DA;
        padding: 27px;
        text-transform: uppercase;
        color: #fff;
        width: 100%;
        border-radius: 2px;
        text-decoration: none;
        border: 0;
        font-size: 1.2rem;
        &:hover {
          color: #fff;
          background: #3400da;
          background: linear-gradient(160deg, #3400da 0%, #3400da 51%, #b1f8d8 100%);
        }
        cursor: pointer;
      }
    }
    
  }
</style>
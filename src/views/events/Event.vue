<template>
  <div class="home">
    <mainHeader v-if="!hideHeader"/>
    <br>
    <div class="container">
      <div class="row events">
        <div class="col-md-12">
          <div class="event-item">
            <div class="event-item-header d-table">
              <div class="d-table-cell align-middle">
                <!-- {{event.title}} -->
              </div>
              <div class="event-agelimit d-table-cell align-middle">{{event.agelimit}}+</div>
            </div>
            <div class="event-item-body">
              <div class="row">
                <div class="event-image col-md-6">
                  <img :src="event.image" alt="">
                </div>
                <div class="event-info col-md-6">
                  <h1 class="main-title">{{event.title}}</h1>
                  <div class="event-info-item date">{{event.date}}</div>
                  <div class="event-info-item location">{{event.location}}</div>
                  <div class="event-info-item price">{{event.price}}  ₽</div>
                </div>
              </div>

              <hr>

              <div class="row">
                <form class="customer_form col-md-6">

                  <div class="form-group">
                    <label for="firtst_name">Фамилия</label>
                    <input required type="text" class="form-control" id="firtst_name" placeholder="Фамилия" v-model="firtst_name">
                  </div>

                  <div class="form-group">
                    <label for="second_name">Имя</label>
                    <input required type="text" class="form-control" id="second_name" placeholder="Имя" v-model="second_name">
                  </div>

                  <div class="form-group">
                    <label for="surname">Отчество</label>
                    <input required type="text" class="form-control" id="surname" placeholder="Отчество" v-model="surname">
                  </div>

                  <div class="form-group">
                    <label for="docnum">Серия и номер паспорта</label>
                    <input required type="text" class="form-control" id="docnum" placeholder="Серия и номер паспорта" v-model="docnum">
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input required type="text" class="form-control" id="email" placeholder="Ваш email" v-model="email">
                  </div>

                </form>

                <form class="payment_form col-md-6">

                  <div class="form-group">
                    <label for="cardNum">Номер карты</label>
                    <input required type="text" class="form-control" id="cardNum" placeholder="Номер вашей карты" v-model="payment.cardNum">
                  </div>

                  <div class="form-group">
                    <label for="valid">Срок действия</label>
                    <input type="text" class="form-control" id="valid" placeholder="Срок вашей действия" v-model="payment.valid">
                  </div>

                  <div class="form-group">
                    <label for="cardholdername">Имя на карте</label>
                    <input required type="text" class="form-control" id="cardholdername" placeholder="Имя на карте" v-model="payment.cardholdername">
                  </div>

                  <div class="form-group">
                    <label for="cvc">Cvc - код</label>
                    <input required type="text" class="form-control" id="cvc" placeholder="cvc" v-model="payment.cvc">
                  </div>

                  <a class="event-buy-btn btn" @click="buyTicket()" style="cursor:pointer">Получить билет</a>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="ticketModal" v-if="showTicket">

      <div class="content">
        <div class="event-info">
          <h1 class="main-title">{{event.title}}</h1>
          <div class="event-info-item date">{{event.date}}</div>
          <div class="event-info-item location">{{event.location}}</div>
          <div class="event-info-item price">{{event.price}}  ₽</div>
        </div>
        
        <img :src="qr_code" alt="">

        <a href="/" type="button" class="btn btn-primary">Вернуться к списку</a>
        
      </div>

    </div>

    <mainFooter />

  </div>
</template>

<script>
import { HTTP } from '@/http-common'
import mainHeader from '@/components/mainHeader.vue'
//import eventFilter from '@/components/eventFilter.vue'
import mainFooter from '@/components/mainFooter.vue'

export default {
  name: 'home',
  props: ['id'],
  components: {
    mainHeader,
    mainFooter
  },
  data(){
    return {
      showTicket: false,
      cityName:"Сочи",
      hideHeader:false,
      events: [],
      event: {},
      firtst_name: '',
      second_name: '',
      surname: '',
      docnum: '',
      email: '',
      payment: {
        cardNum: '',
        valid: '',
        cardholdername: '',
        cvc: ''
      },
      qr_code: ''
    }
  },
  methods: {
    getEvents () {
      HTTP.get('/events')
      .then(response => {
        let event_index = response.data.findIndex(x => x._id === this.id);
        this.event = response.data[event_index]
      })
      .catch(e => {
        console.log('Error - ' + e)
      })
    },

    buyTicket () {
      let request = {
        order: {
          customer: {
            F: this.firtst_name,
            I: this.second_name,
            O: this.surname,
            doctype: 'ПАСПОРТ РФ',
            docnum: this.docnum,
            email: this.email
          },
          email: this.email,
          tickets: [
            {
              eventId: this.id,
              date: this.event.date,
              details: '',
              price: this.event.price
            }
          ],
          payment: this.payment
        }
      }
      console.log(request)

      HTTP.post('/buytickets', request)
      .then(response => {
        // console.log(response.data)
        this.qr_code = response.data.tickets[0].ticket
        this.showTicket = true
      })
      .catch(e => {
        console.log('Error - ' + e)
        // this.error = e
      })
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

<style lang="scss" scoped>

  .event-item-body {
    overflow: hidden;
  }

  .events .event-item .event-item-body .event-image {
    margin: auto !important;
    margin-bottom: 40px;
    img {
      height: auto !important;
      width: 100%;
    }
  }

  .event-info {
  }

  .events .event-item .event-item-body .event-buy-btn {
    clear: both;
    width: auto !important;
    padding: 10px 20px !important;
    margin-top: 24px;
  }

  .ticketModal {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba($color: #000000, $alpha: 0.7);
      z-index: 1;
    }
    .content {
      position: fixed;
      z-index: 2;
      top: 50%;
      left: 50%;
      margin-left: -200px;
      margin-top: -300px;
      padding: 20px;
      width: 400px;
      height: 630px;
      background: #fff;
      box-shadow: 0 0 10 #000;
      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      img {
        max-width: 100%;
        margin-bottom: 20px;
      }
      .event-info {
        margin-bottom: 1.6rem;
        .event-info-item {
          margin-bottom: 10px;
          font-size: 0.9rem;
          padding-left: 2rem;
          background-position: 0 4px;
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
    }
  }

</style>
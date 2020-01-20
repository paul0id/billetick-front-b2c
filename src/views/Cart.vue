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
                Корзина
              </div>
            </div>
            <div class="event-item-body">
              <div class="row crat_item" v-for="(item, i) in items" :key="i">
                <div class="event-image col-md-3">
                  <img :src="item.image" alt="">
                </div>
                <div class="event-info col-md-9">
                  <h1 class="main-title">{{item.title}}</h1>
                  <div class="event-info-item date">{{item.date}}</div>
                  <div class="event-info-item location">{{item.location}}</div>
                  <div class="event-info-item price">{{item.price}}  ₽</div>
                </div>
              </div>

              <hr>

              <div class="row">
                <form class="customer_form col-md-6">

                  <h2 class="cart_header">Информация о клиенте</h2>

                  <div class="form-group">
                    <label for="firtst_name">Фамилия</label>
                    <input required type="text" class="form-control" id="firtst_name" placeholder="Фамилия" v-model="customer.F">
                  </div>

                  <div class="form-group">
                    <label for="second_name">Имя</label>
                    <input required type="text" class="form-control" id="second_name" placeholder="Имя" v-model="customer.I">
                  </div>

                  <div class="form-group">
                    <label for="surname">Отчество</label>
                    <input required type="text" class="form-control" id="surname" placeholder="Отчество" v-model="customer.O">
                  </div>

                  <div class="form-group">
                    <label for="docnum">Тип документа</label>
                    <select id="select" name="select" v-model="customer.doctype" class="form-control">
                      <option value="ПАСПОРТ РФ">ПАСПОРТ РФ</option>
                      <option value="ЗАГРАНИЧНЫЙ ПАСПОРТ">ЗАГРАНИЧНЫЙ ПАСПОРТ</option>
                      <option value="ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ">ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ</option>
                      <option value="ДРУГОЕ">ДРУГОЕ</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="docnum">Серия и номер документа</label>
                    <input required type="text" class="form-control" id="docnum" placeholder="Серия и номер паспорта" v-model="customer.docnum">
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input required type="text" class="form-control" id="email" placeholder="Ваш email" v-model="email">
                  </div>

                </form>

                <form class="payment_form col-md-6">

                  <h2 class="cart_header">Платежная информация</h2>

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

                  <div class="form-group">
                    <label for="agree" class="agree">
                      <input type="checkbox" name="agree" id="agree" style="margin-right: 10px;">
                      Даю согласие на обработку персональных данных
                    </label>
                  </div>

                </form>

              </div>

              <div class="row">
                <div class="col-md-6">
                  <span class="total_price">
                    Общая стоимость: {{totalPrice}} руб.
                  </span>
                </div>
                <div class="col-md-6 text-right">
                  <a class="event-buy-btn btn" @click="buyTicket()" style="cursor:pointer" disabled>Оплатить билет</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="ticketModal" v-if="showTicket">

      <div class="content">

        <h1>Уважаемый {{second_name}} {{surname}}!</h1>
        Ваши билеты успешно приобретены!
        
        <img :src="qr_code" alt="">

        <p class="desc">Cохраните QR-код! <br> Билет отправлен вам на почту {{email}}.</p>

        <a href="/" type="button" class="btn btn-primary">Вернуться к покупкам</a>
        
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
      items: [],
      totalPrice: 0,
      showTicket: false,
      cityName:"Сочи",
      hideHeader:false,
      events: [],
      event: {},
      firtst_name: '',
      second_name: '',
      surname: '',
      doctype: '',
      docnum: '',
      email: 'iii@gmail.com',
      customer: {
        F:'Иванов',
        I:'Иван',
        O:'Иванович',
        doctype: 'ПАСПОРТ РФ',
        docnum: '1122334455' 
      },
      payment: {
        cardNum: '1234123412341234',
        valid: '07/2020',
        cardholdername: 'IVANOV IVAN',
        cvc: '111'
      },
      qr_code: ''
    }
  },
  methods: {
    getEvents () {
      HTTP.get('/events')
      .then(response => {
        let cart_items = []
        let price = 0
        let items_ids = localStorage.cart.split(",")
        items_ids.forEach(function(id){
          let item = response.data.find(x => x._id === id)
          cart_items.push(item)
          price += parseInt(item.price)
        })
        this.items = cart_items
        this.totalPrice = price
      })
      .catch(e => {
        console.log('Error - ' + e)
      })
    },

    buyTicket () {
      let request = {
        order: {
          customer: this.customer,
          email: this.email,
          tickets: this.items,
          payment: this.payment,
          details: ""
        }
      }
      // console.log(request)
      HTTP.post('/buytickets', request)
      .then(response => {
        // console.log(response.data)
        this.qr_code = response.data.tickets[0].ticket
        this.showTicket = true
        localStorage.cart = ''
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

  .crat_item {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .event-item-body {
    overflow: hidden;
  }

  .events .event-item .event-item-body .event-image {
    margin: 0 !important;
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
      height: 670px;
      background: #fff;
      box-shadow: 0 0 10 #000;
      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
      img {
        max-width: 100%;
      }
      .desc {
        color: orange;
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

  .cart_header {
    color: orange;
    margin: 1.2rem 0 1rem;
    font-size: 1.4rem
  }
  .total_price {
    font-size: 1.6rem;
    margin: 25px 0 0;
    display: block;
  }
  .agree {
    margin-top: 36px;
  }

</style>
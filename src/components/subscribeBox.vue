<template>
  <section class="subscribeBox">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h2 class="subscribe-title">Хочешь быть первым в курсе всех мероприятий? <br> Подпишись и мы поможем решить куда сходить в Сочи!</h2>
          <div class="form-group">
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Как тебя зовут">
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Напиши  еmail">
              </div>
            </div>
            <p class="subscribe-desc">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
            <button type="submit" class="btn subscribe-btn">Подписаться</button>
          </div>
        </div>
        <div class="col-md-5">
          <h2 class="subscribe-title">Мы в соцсетях:</h2>
          <button type="submit" class="btn social-subscribe-btn">Facebook</button>
          <button type="submit" class="btn social-subscribe-btn">ВКОНТАКТЕ</button>
          <button type="submit" class="btn social-subscribe-btn">INSTAGRAM</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .subscribeBox {
    background: #3400da;
    background: linear-gradient(160deg, #3400da 0%, #3400da 51%, #b1f8d8 100%);
    color: #fff;
    padding: 30px 0;

    .subscribe-title {
      font-size: 24px;
      margin-bottom: 38px;
    }
    .subscribe-desc {
      font-size: 0.69rem;
      font-weight: 100;
      margin: 1rem 0 1.6rem;
    }
    .form-group {
      margin: 0 30px 0 0;
      .form-control {
        border: 1px solid #E8E8E8;
        border-radius: 2px;
        background: #fff;
        font-style: italic;
        &:active {
          outline: none;
        }
      }
    }
    .btn {
      color: #000;
      background: #B1F8D8;
      border-radius: 2px;
      text-transform: uppercase;
      &.subscribe-btn {
        padding: 12px 64px;
        font-size: 0.98rem;
      }
      &.social-subscribe-btn {
        padding: 11px 29px;
        font-size: 0.6rem;
        margin: 28px 32px 0 0;
        font-weight: 800;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
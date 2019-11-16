<template>
  <header class="mainHeader">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a href="/" class="logo">
            <img src="../assets/logo.svg" alt="">
          </a>
          <a href="#" class="pseudo-link location-link">Москва</a>
        </div>
        <div class="col-md-8 text-right">
          <a href="#" class="pseudo-link create-event-link">Создать мероприятие</a>
          <a href="#" class="pseudo-link profile-link">Войти</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
</script>
<style lang="scss" scoped>
  .mainHeader {
    height: 3.4rem;
    padding: 0.99rem 0;
    color: #fff;
    background: rgb(52,0,218);
    background: linear-gradient(160deg, rgba(52,0,218,1) 0%, rgba(52,0,218,1) 51%, rgba(177,248,216,1) 100%);

    .logo {
      display: inline-block;
      text-decoration: none;
    }

    .pseudo-link {
      color: #fff;
      border-bottom: 2px dashed #fff;
      margin-left: 60px;
      &:hover {
        color: #fff;
      }
      &.create-event-link:before {
        position: absolute;
        content: '';
        left: -18px;
        top: 2px;
        width: 11px;
        height: 11px;
        background: url('/img/icons/star.svg') 0 0 no-repeat;
        color: #fff;
      }
      &.profile-link:before {
        position: absolute;
        content: '';
        left: -18px;
        top: 2px;
        width: 11px;
        height: 11px;
        background: url('/img/icons/profile.svg') 0 0 no-repeat;
        color: #fff;
      }
      &.location-link:before {
        position: absolute;
        content: '';
        left: -18px;
        top: 2px;
        width: 11px;
        height: 18px;
        background: url('/img/icons/location.svg') 0 0 no-repeat;
        color: #fff;
      }
    }
  }
</style>
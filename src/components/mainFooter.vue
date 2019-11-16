<template>
  <footer class="mainFooter">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <ul class="footer-menu">
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Все мероприятия</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Концерты</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Спорт</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Экскурсии</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="footer-menu">
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Создать меропричтие</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Реклама на BILLETIK.RU</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="footer-menu">
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">О нас</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Парнерство</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Вакансии</a>
            </li>
            <li class="footer-menu-item">
              <a href="#" class="footer-menu-item-link">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="footer-desc">© Биллетик 2010 <br>Продолжая работу с нашим сайтом, вы подтверждаете согласие с правилами его использования</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .mainFooter {
    background: #F1F0F5;
    padding: 72px 0;

    .footer-menu {
      margin: 0 0 61px;
      padding: 0;
      list-style-type: none;

      .footer-menu-item {
        margin: 0;
        padding: 0;

        .footer-menu-item-link {
          color: #000;
          text-decoration: underline;
          font-size: 0.9rem;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
    .footer-desc {
      font-size: 14px;
      line-height: 0.98rem;
    }
  }

</style>
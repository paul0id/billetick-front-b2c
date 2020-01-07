<template>
  <section class="eventsFilter">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
        </div>
      </div>

      <div class="btn filter-btn">
        Все мероприятия
      </div>

      <div class="btn filter-btn">
        Концерты
      </div>

      <div class="btn filter-btn">
        Спорт
      </div>

      <div class="btn filter-btn">
        Экскурсии
      </div>

    </div>
  </section>
</template>
<script>
</script>
<style lang="scss" scoped>
  .eventsFilter {
    // height: 7rem;
    margin-bottom: 2rem;
    background: #F2F2F2;
    padding: 33px 0;

    .btn {
      cursor: pointer;
      &.filter-btn {
        position: relative;
        background: #fff !important;
        color: #333;
        font-weight: bold;
        padding: 11px 46px 12px 10px;
        margin-right: 14px;
        text-transform: uppercase;
        font-size: 0.86rem;
        &::after {
          content: '';
          position: absolute;
          right: 16px;
          top: 18px;
          width: 12px;
          height: 7px;
          background: url('/img/icons/dropdown.svg') 0 0 no-repeat;
        }
      }
    }
  }
</style>
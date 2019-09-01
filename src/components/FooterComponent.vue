<template>
  <section class="sec_footer">
    <footer class="footer">
      <div class="div_footer">
        <div class="div_img grid-3">
          <img src="../assets/logo.png" alt="Bakey" />
        </div>
        <div class="div_li grid-4">
          <ul>
            <li>HOME</li>
            <li>SOBRE</li>
            <li>RECEITAS</li>
            <li>NOTÍCIAS</li>
            <li>CONTATO</li>
          </ul>
        </div>
        <div class="div_info grid-5">
          <h3>
            <img class="img_contato" src="../assets/contato.png" alt /> CONTATO
          </h3>
          <span>(99) 99999-9999 | (99) 99999-9999</span>

          <h3>
            <img class="img_localizacao" src="../assets/localizacao.png" alt /> LOCALIZAÇÃO
          </h3>
          <span>Nam porttitor diam in eleifend fringilla, 3180.</span>
        </div>
        <img class="img_ow" src="../assets/ow.png" alt />
      </div>
    </footer>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sec_footer {
  background-color: #403225;
  color: #f9f9f9;
  height: 250px;
  .footer {
    @include container;
    padding-top: 30px;
    padding-left: 60px;
    .div_img {
      text-align: center;
    }
    .div_li {
      font-weight: 100;
      line-height: 30px;
      padding-left: 150px;
      font-size: 14px;
      border-left: #f9f9f9 solid 1px;
      border-right: #f9f9f9 solid 0.1em;
    }
    .div_info {
      font-size: 0.8rem;
      font-weight: 300;
      padding-left: 20px;
      h3 {
        margin: 15px 0 15px 0;
        font-weight: bold;
      }
    }
  }
}

.img_ow {
  margin-left: 300px;
}
</style>
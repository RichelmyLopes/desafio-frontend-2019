<template>
  <section class="sec_noticias">
    <div class="noticias">
      <div class="img_noticia grid-3">
        <img src="../assets/about.png" alt="Bakety" />
      </div>
      <div class="div_sobre grid-5">
        <h2>SOBRE A BAKERY</h2>
        <p class="p_sobre">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna
          aliqua. Ut enim ad minim veniam.
        </p>
        <a href>Conheça mais ➞</a>
        <a href></a>
      </div>
      <div id="noticia" class="div_noticias grid-4">
        <h2>ÚLTIMAS NOTICIAS</h2>
        <ul>
          <li v-for="{published_at, title, id} in dadosNoticias" :key="id" class="p_noticias">
            <h3>{{published_at}}</h3>
            <p class="p_title">{{title}}</p>
          </li>
        </ul>

        <a href>Conheça mais ➞</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NoticiasComponent",
  data() {
    return {
      dadosNoticias: {}
    };
  },
  methods: {
    puxaMsgSobre() {
      fetch("https://api.myjson.com/bins/11qq59")
        .then(r => r.json())
        .then(r => {
          this.dadosNoticias = r;
        });
    }
  },
  created() {
    this.puxaMsgSobre();
  }
};
</script>

<style lang="scss">
/* NOTICIAS E SOBRE */

.sec_noticias {
  margin-bottom: 90px;
  margin-top: 90px;
}

.noticias {
  @include container;
  .img_noticia img {
    max-width: 300px;
    height: 350px;
    padding-left: 35px;
  }
}

.div_sobre {
  padding-left: 80px !important;
  h2 {
    margin-bottom: 40px;
  }
  .p_sobre {
    @include font_padrao;
    max-width: 380px;
    font-weight: 100;
    letter-spacing: 0.5px;
  }

  a {
    color: #a67b52;
  }
}

.div_noticias {
  max-width: 380px;
  padding-left: 40px;
  h2 {
    margin-bottom: 40px;
    color: #d1bba6;
  }
  ul {
    padding-bottom: 70px;
  }
  li {
    font-weight: 100;
    color: #a0a0a0;
    line-height: 1.3rem;
    max-width: 380px;
    font-size: 14px;
    margin-bottom: 12px;
  }
  a {
    color: #a67b52;
  }
  h3 {
    font-size: 11px;
    margin-bottom: 5px;
    color: #a67b52;
    font-weight: bold;
  }
  .p_title {
    font-weight: 100;
    font-size: 14px;
    color: #a0a0a0;
  }
}
</style>
<template>
  <section class="sec_banner_nextNav">
    <img class="banner_img1" :src="dadosBanner[0].image_url" alt />
    <div class="botoes_banner">
      <button></button>
      <button></button>
      <button></button>
    </div>
    <div class="produtos">
      <div class="div_produtos">
        <img
          v-for="{image_url,name} in dadosBannerProdutos"
          :src="image_url"
          :key="name"
          alt="CURABITOR"
        />
        <h2 v-for="{name, id} in dadosBannerProdutos" :key="id+name">{{name}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      dadosBanner: [],
      dadosBannerProdutos: []
    };
  },
  methods: {
    buscaDadosBanner() {
      fetch("https://api.myjson.com/bins/y3zct")
        .then(r => r.json())
        .then(r => {
          this.dadosBanner = r;
        });
    },
    buscaDadosProdutos() {
      fetch("https://api.myjson.com/bins/dbycd")
        .then(r => r.json())
        .then(r => {
          this.dadosBannerProdutos = r;
        });
    }
  },
  created() {
    this.buscaDadosBanner();
    this.buscaDadosProdutos();
  }
};
</script>

<style lang="scss">
/*BANNER */
.banner_img1 {
  width: 100%;
  height: 420px;
}

.botoes_banner {
  @include container;
  button {
    @include botoes;
    overflow: hidden;
    position: relative;
    bottom: 100px;
    left: 550px;
    margin-right: 15px;
    border: 1px solid #a67b52;
  }
  :hover {
    background: #f9f9f9;
  }
}

/* PRODUTOS */

.div_produtos {
  position: relative;
  bottom: 80px;
  left: 40px;
  @include container;
  h2 {
    display: inline-block;
    padding-left: 80px;
    text-align: center;
    padding-right: 35px;
    position: relative;
    bottom: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #f9f9f9;
  }
  img {
    margin-right: -5px;
    cursor: pointer;
    filter: contrast(50%);
  }
  :hover {
    transform: scale(1.1);
    transition: ease 0.3s;
    filter: contrast(100%);
  }
}
</style>
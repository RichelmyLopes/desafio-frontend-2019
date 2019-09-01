<template>
  <section id="parceiros" class="sec_parceiros">
    <div class="div_parceiros">
      <h2>PARCEIROS</h2>
      <div class="div_img_parceiros">
        <div id="slider">
          <div v-show="ativa_img1" class="imgs">
            <img class="img" :src="imgsParceiros[0].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[1].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[2].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[3].image_url" alt="Parceiros" />
          </div>
          <div v-show="ativa_img2" class="imgs">
            <img class="img" :src="imgsParceiros[0].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[1].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[2].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[3].image_url" alt="Parceiros" />
          </div>
          <div v-show="ativa_img3" class="imgs">
            <img class="img" :src="imgsParceiros[0].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[1].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[2].image_url" alt="Parceiros" />
            <img class="img" :src="imgsParceiros[3].image_url" alt="Parceiros" />
          </div>
          <div class="botoes">
            <button @click.prevent="ativaImg1" href="#"></button>
            <button @click.prevent="ativaImg2" href="#"></button>
            <button @click.prevent="ativaImg3" href="#"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ParceirosComponent",
  data() {
    return {
      imgsParceiros: {},
      ativa_img1: true,
      ativa_img2: false,
      ativa_img3: false
    };
  },
  methods: {
    puxaImgParceiros() {
      fetch("https://api.myjson.com/bins/qfhnh")
        .then(r => r.json())
        .then(r => {
          this.imgsParceiros = r;
        });
    },
    ativaImg1() {
      this.ativa_img1 = true;
      this.ativa_img2 = false;
      this.ativa_img3 = false;
      if (this.ativa_img2 && this.ativa_img3 === false) {
        setTimeout(this.ativaImg1, 4000);
      }
    },
    ativaImg2() {
      this.ativa_img1 = false;
      this.ativa_img2 = true;
      this.ativa_img3 = false;
      if (this.ativa_img1 && this.ativa_img3 === false) {
        setTimeout(this.ativaImg1, 4000);
      }
    },
    ativaImg3() {
      this.ativa_img1 = false;
      this.ativa_img2 = false;
      this.ativa_img3 = true;
      if (this.ativa_img1 && this.ativa_img2 === false) {
        setTimeout(this.ativaImg1, 4000);
      }
    }
  },
  created() {
    this.puxaImgParceiros();
    this.ativaImg2();
  }
};
</script>

<style lang="scss">
/* PARCEIROS */

.sec_noticias {
  height: 400px;
}

.sec_parceiros {
  background: #f4f4f4;
  height: 400px;
}

.div_parceiros {
  @include container;
  text-align: center;
  .div_img_parceiros {
    @include container;
  }
  h2 {
    padding: 30px 0 60px 0;
    font-weight: bold;
  }
}

.imgs {
  animation: fadeInDown 0.3s;
}

.img {
  margin-left: 80px;
  margin-bottom: 120px;
  margin-top: 20px;
}

@keyframes fadeInDown {
  from {
    transform: translate3d(1000px, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.botoes button {
  @include botoes;
  margin-left: 15px;
  border: 1px solid #a67b52;
  background: #fff;
}
</style>
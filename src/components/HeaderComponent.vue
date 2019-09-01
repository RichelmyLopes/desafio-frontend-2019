<template>
  <header>
    <section class="header">
      <div class="div_header">
        <img class="img_logo" src="../assets/logo.png" alt="Bakery" />
        <nav class="nav_menu">
          <ul class="lista_menu">
            <div class="div_menu">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">SOBRE</a>
              </li>
              <li>
                <a href="#">RECEITAS</a>
              </li>
              <li>
                <a href="#">NOTÍCIAS</a>
              </li>
              <li>
                <a href="#">CONTATO</a>
              </li>
            </div>
            <img src="../assets/img.png" />
          </ul>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
};
</script>

<style lang="scss">
/* ESTILO HEADER */
.header {
  width: 100%;
  height: 100px;
}

.div_header {
  @include container;
  padding-left: 60px;
  img {
    height: 90px;
    padding-top: 10px;
  }
}

.nav_menu {
  display: block;
  float: right;
}

.div_menu {
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 55px 30px 40px 30px;
    font-size: 15px;
  }
  a {
    color: #515151;
  }
  li:first-child a {
    color: #a67b52;
  }
  :hover {
    color: #a67b52;
  }
}

.lista_menu {
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 55px 30px 60px 30px;
    font-size: 15px;
  }
  a {
    color: #515151;
  }
  li:first-child a {
    color: #a67b52;
  }
  :hover {
    color: #a67b52;
  }
  li:last-child {
    padding-right: 30px;
    border-right: 1px solid #515151;
  }
}

.lista_menu img {
  height: 20px;
  padding-top: 53px;
  cursor: pointer;
  padding: auto 40000px;
}
</style>

<template>
  <section class="sec_contato">
    <div class="div_contato">
      <H2>CONTATO</H2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="grid-6 div_dados">
        <label>Nome*</label>
        <br />
        <input placeholder="Nome" type="text" />
        <br />
        <label>E-mail*</label>
        <br />
        <input placeholder="E-mail" type="text" />
        <br />
        <label>Cidade</label>
        <br />
        <input placeholder="Cidade" type="text" />
        <br />
        <label>Telefone*</label>
        <br />
        <input placeholder="Telefone" type="text" />
      </div>
      <div class="grid-5 div_mensagem">
        <label for>Assunto*</label>
        <input type="text" placeholder="Assunto" />
        <label for>Mensagem*</label>
        <textarea placeholder="Mensagem" name id cols="30" rows="10"></textarea>
        <button class="botao_contato">Enviar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sec_contato {
  @include container;
  height: 500px;
  .div_contato {
    margin: 100px 0px 0px 60px;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 40px;
  }
  p {
    @include font_padrao;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 30px;
  }
}

.div_dados {
  margin-right: 40px;
}

label {
  font-weight: 200;
  font-family: "Montserrat", sans-serif;
}

input,
textarea {
  width: 100%;
  margin-bottom: 20px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Montserrat", sans-serif;
  border-radius: 2px;
  color: #404040;
  font-weight: 200;
  font-size: 14px;
}

::placeholder {
  color: #a0a0a0;
}

.botao_contato {
  width: 130px;
  height: 35px;
  padding: 5px;
  font-size: 0.9rem;
  background-color: #403225;
  outline: none;
  border: none;
  color: #f9f9f9;
  float: right;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
}
</style>
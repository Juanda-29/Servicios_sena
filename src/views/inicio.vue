<template>
  <q-page class="inicio">
    <div class="presentacion">
      <q-avatar size="100px" class="logo">
        <img src="../assets/img/Logosimbolo-SENA-PRINCIPAL.png" alt="Logo SENA">
      </q-avatar>

      <h1>Centro Agroturístico SENA</h1>
      <h2>Servicios del Centro</h2>

      <p>
        Bienvenido a la aplicación de servicios del Centro Agroturístico SENA.
        Aquí podrás consultar de manera rápida y sencilla la información de
        Enfermería, Bienestar, Biblioteca, Cafetería y Coordinación.
      </p>

      <q-btn
        label="Conocer los servicios"
        icon="arrow_forward"
        color="green-8"
        unelevated
        rounded
        size="md"
        to="/bienestar"
      />
    </div>

    <div class="imagen">
      <q-img
        src="../assets/img/senasangil.jpg"
        alt="Centro Agroturístico SENA"
        fit="contain"
      />
    </div>
  </q-page>
</template>

<style scoped>
.inicio {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 40px;
  background: #f7f9f5;
}
.presentacion {
  max-width: 520px;
  text-align: center;
}
.logo {
  background: white;
  border: 3px solid #e0a458;
  margin-bottom: 15px;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
h1 {
  margin: 5px 0;
  color: #2f5233;
  font-size: 34px;
}
h2 {
  margin: 8px 0 18px;
  color: #4f7942;
  font-size: 22px;
}
p {
  color: #666;
  line-height: 1.7;
  font-size: 16px;
  margin-bottom: 25px;
}
.imagen {
  width: 480px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 5px 18px rgba(0,0,0,.10);
}
.imagen .q-img {
  width: 100%;
  height: 100%;
}
@media (max-width: 800px) {
  .inicio {
    flex-direction: column;
    gap: 25px;
    padding: 25px 15px;
  }
  .imagen {
    width: 100%;
    max-width: 500px;
    height: 280px;
  }
  h1 {
    font-size: 28px;
  }
}
</style>
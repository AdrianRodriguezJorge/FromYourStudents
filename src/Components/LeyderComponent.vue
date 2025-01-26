<script>
import NextPrevComponent from './NextPrevComponent.vue';
export default {
  data() {
    return {
      images: [
        '/LeyderImg/1.jpg',
        '/LeyderImg/pyimageeditor.png',
        '/LeyderImg/5(2).jpg',
        '/LeyderImg/3.png',
        '/LeyderImg/4.jpg',
        '/LeyderImg/5.jpg',
      ]
    }
  },
  components: {
    NextPrevComponent,
  }
};

</script>


<template>
  <div class="background-image"></div>
  <div class="background-container">
    <div class="content">
      <h1>De mí, pa' tí, con amol</h1>
      <p class="text">Hola ;), yo soy el mejor stalker que tiene el grupo 31. Vengo a decirte que gracias a tus
        conocimientos,
        dedicación y paciencia, aprendí a dar mis primeros pasos en PW. Cada manera de retarnos, de hacer que nos
        esforzáramos más cada día llevó a cada uno de nosotros a donde está hoy por hoy. Y pues te quiero dar las
        gracias,
        gracias por ser como eres, por ser diferente, por romper la barrera de lo tradicional y por compartir las MIELES
        con nosotros.
      </p>


      <el-carousel :interval="5000" type="card" height="300px">
        <el-carousel-item v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Imagen del carrusel" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <NextPrevComponent />
  
  
</template>



<style scoped>
/* Estilo para ocultar la imagen en items laterales */
.el-carousel__item.is-in-stage {
  opacity: 0;
}

.el-carousel__item.is-active {
  opacity: 1;
  /* Muestra el ítem activo (central) */
}

.content h1 {
  margin: 30px;
}

.background-container {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
}

.background-image {
  background-image: url('/LeyderImg/LP1.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  filter: brightness(20%);
  /* Aplica el filtro oscuro solo a la imagen de fondo */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.carousel-image {
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.text {
  max-width: 1000px;
  margin: 20px auto;
  color: #c5badf;
  font-size: 20px;
  font-family: "Segoe UI";
  text-align: justify;
}

.content {
  color: rgb(127, 90, 212);
  /* Cambia el color según tus necesidades */
  margin: 0 7px 100px 7px;
  font-size: 2em;
  text-align: center;
  /* position: relative; */
  /* Asegura que el contenido se posicione correctamente */
  /* z-index: 2; */
  /* Asegura que el contenido esté por encima de la imagen de fondo */
}
</style>

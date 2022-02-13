<template>
<v-container>
  <v-row align="center" justify="center">
    <h1>
      Choisis ta destiné
    </h1>
  </v-row>
  <v-row align="center" justify="center">
    <v-spacer></v-spacer>
    <Choice img="https://www.carre-rg.fr/wp-content/uploads/2019/03/AdobeStock_157089549-sans-apport-1024x682.jpeg" imgLabel="Pauvre" next="/game/poor"></Choice>
    <v-spacer></v-spacer>
    <Choice img="https://play-lh.googleusercontent.com/JGEYhHyRfpw1KfBwMHmViYY1lLbZWV_hTKmxA1NKhBmX9BR98xEz3D1yN7mrWFeAfs8" imgLabel="Riche" next="/game/rich"></Choice>
    <v-spacer></v-spacer>
    <Choice img="https://img-15.stickers.cloud/packs/e9a07fd0-82b8-4fcb-9323-40098b3a396e/webp/f5f75e52-1373-4ea7-98fd-52aaae2c147a.webp" imgLabel="GROS BG" next="/game/bg"></Choice>
    <v-spacer></v-spacer>
  </v-row>
</v-container>
</template>

<script>
import Choice from '@/componants/choice.vue'
export default {
  components: {
    Choice
  }
}
</script>

<style>
h1 {
color: white;
text-align: center;
}
</style>

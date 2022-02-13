<template>
  <div class="choice">
    <v-row style="height: 300px" align="center" justify="center">
      <img :src="img" alt="vil gueux">
    </v-row>
    <div style="text-align: center">
      <v-btn outlined class="mt-5" color="grey" :href="next">
        <h2>
          {{imgLabel}}
        </h2>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['img', 'next', 'imgLabel']
}
</script>

<style>
.choice {
display: flex;
flex-direction: column;
}
h2 {
color: white;
text-align: center;
}
img {
  max-height: 300px;
  max-width: 300px;
}
</style>

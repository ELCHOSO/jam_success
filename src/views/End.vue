<template>
  <div>
    <v-row justify="center" align="center" style="display: flex; flex-direction: column; margin-top: 30px">
      <img :src="image" :alt="image" style="max-width: 350px; max-height: 500px">
      <h2 style="color: white" class="mt-10">{{description}}</h2>
      <v-btn color="green" dark class="mt-12" href="/birth">
        Recommencer
      </v-btn>
      <v-btn color="#FFD700" class="ma-12" href="/success">
        Success
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import Text from '@/texts.json'
export default {
  data: () => {
    return ({
      image: '',
      description: ''
    })
  },
  created () {
    switch (this.$route.params.end) {
      case 'alone':
        this.image = Text.alone.image
        this.description = Text.alone.description
        break
      case 'couple':
        this.image = Text.couple.image
        this.description = Text.couple.description
        break
      case 'couple_and_children':
        this.image = Text.couple_and_children.image
        this.description = Text.couple_and_children.description
        break
    }
  }
}
</script>

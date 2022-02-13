<template>
<v-container>
  <v-row align="center" justify="center" class="mb-10">
    <h1>
      {{ question.description }}
    </h1>
  </v-row>
  <v-row align="center" justify="center">
    <v-spacer></v-spacer>
    <Choice :img="question.img1" :imgLabel="question.label1" :next="'/game/' + question.next1"></Choice>
    <v-spacer></v-spacer>
    <Choice :img="question.img2" :imgLabel="question.label2" :next="'/game/' + question.next2"></Choice>
    <v-spacer></v-spacer>
  </v-row>
</v-container>
</template>

<script>
import Text from '@/texts.json'
import Choice from '@/componants/choice.vue'
export default {
  components: {
    Choice
  },
  data: () => {
    return {
      question: {}
    }
  },
  created () {
    switch (this.$route.params.life) {
      case 'poor':
        this.question = Text.poor
        break
      case 'rich':
        this.question = Text.rich
        break
      case 'bg':
        this.question = Text.bg
        break
      case 'no_study':
        this.question = Text.no_study
        break
      case 'short_study':
        this.question = Text.short_study
        break
      case 'long_study':
        this.question = Text.long_study
        break
      case 'unemployed':
        this.question = Text.unemployed
        break
      case 'dev':
        this.question = Text.dev
        break
      case 'football_player':
        this.question = Text.football_player
        break
      case 'alone':
        this.question = Text.alone
        break
      case 'couple':
        this.question = Text.couple
        break
      case 'couple_and_children':
        this.question = Text.couple_and_children
        break
    }
  }
}
</script>

<style>
h1 {
color: white;
text-align: center;
}
</style>

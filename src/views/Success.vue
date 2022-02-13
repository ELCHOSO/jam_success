<template>
  <div class="achievements">
    <v-card v-for="goal in success" :key="goal.title" class="card" :color="goal.color">
      <div style="margin: auto; display: flex; flex-direction: row">
        <div style="margin: auto;">
          <v-icon x-large>
            {{goal.icon}}
          </v-icon>
        </div>
        <div class="d-flex justify-center align-center">
          <h2>
            {{ goal.title }}
          </h2>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return ({
      success: [
        {
          title: 'Avoir tout fait',
          done: true,
          icon: 'mdi-trophy',
          color: '#FFD700',
          cookie: ''
        },
        {
          title: 'Ne pas laver',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'dev'
        },
        {
          title: 'La vie est trop courte',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'no_study'
        },
        {
          title: 'Je suis le prochain Messi',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'football_player'
        },
        {
          title: 'Gisèle la fidèle',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'alone'
        },
        {
          title: 'GigaChad',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'bg'
        },
        {
          title: 'Je suis le fils de Jeff Pesos',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'rich'
        },
        {
          title: 'Le mode hardcore de la vie',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'poor'
        },
        {
          title: 'Fonder une famille',
          done: false,
          icon: 'mdi-lock',
          color: 'grey',
          cookie: 'couple_and_children'
        }
      ]
    })
  },
  created () {
    this.success.forEach(e => {
      this.checkDone(e.cookie, e.title)
    })
    for (let i = 1; i < this.success.length; i++) {
      if (this.success[i].done === false) {
        this.success[0] = {
          title: 'Avoir tout fait',
          done: false,
          color: 'grey',
          icon: 'mdi-lock'
        }
      }
    }
  },
  methods: {
    checkDone (cookie, title) {
      const index = this.success.findIndex(e => {
        return e.title === title
      })
      if (this.$cookies.get(cookie)) {
        this.success[index].color = '#FFD700'
        this.success[index].done = true
        this.success[index].icon = 'mdi-trophy'
      }
    }
  }
}
</script>

<style scoped>
.achievements {
display: flex;
flex-wrap: wrap;
text-align: center;
}
.card {
  width: 300px;
  height: 100px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
.text {
  text-align: center;
  text-justify: center;
}
</style>

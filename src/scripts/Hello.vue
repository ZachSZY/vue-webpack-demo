<template>
  <div class="hello">
    <h1>Hello {{ msg }}</h1>
    <Azeroth :money.sync="total"></Azeroth>
    <Draenor :money.sync="total"></Draenor>
  </div>
</template>

<script>
import Azeroth from './Azeroth'
import Draenor from './Draenor'

export default {
  components: {
    Azeroth,
    Draenor
  },
  props: {
    total: {
      type: Number
    },
    msg: {
      type: String
    }
  },
  created: function () {
    // this.total = 100
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      // msg: 'Hello World!'
      username: 'Thrall'
    }
  },
  methods: {
    enterDarkPortal: function (loc) {
      this.msg = loc
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>In {{locname}}, you have ${{money}}</h1>  
  </div>
</template>

<script>
export default {
  props: {
    money: {
      type: Number
    }
  },
  data () {
    return {
      locname: 'Draenor'
    }
  },
  methods: {
    incMoney: function (amount) {
      this.money += amount
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #0000FF;
}
</style>

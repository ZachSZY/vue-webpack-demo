<template>
  <div class="hello">
    <h1>In {{locname}}, you have ${{money}}</h1>
    <button id="incMoney" @click='incMoney'>incMoney</button>
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
      mm: this.money,
      locname: 'Azeroth'
    }
  },
  methods: {
    incMoney: function (amount) {
      console.log('incMoney...ing ' + this.money)
      this.money += 10
      console.log('incMoney...ed ' + this.money)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #00FF00;
}
</style>

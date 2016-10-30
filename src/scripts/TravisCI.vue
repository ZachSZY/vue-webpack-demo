<template>
    <h1>Travis-CI for CSD</h1>

    <h2 id="datetime">{{now}}</h2>
    <ul v-for="branch in branches">
        <li><b>{{branch}} </b><img src="https://travis-ci.org/mebusw/CSD-training-prj.svg?branch={{branch}}" alt="build:passed">
        </li>
    </ul>

</template>

<script>
var $ = require('jquery')
$('')

export default {
  data () {
    return {
      msg: 'Hello Vue!',
      newTodo: '',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue.js' },
        { text: 'Build Something Awesome' }
      ],
      branches: ['master', 'csharp-oct', 'csharp-jpx', 'java-monkey', 'java-eas'],
      now: 'time: ',
      currentBranch: 'master',
      commits: null
    }
  },

  created: function () {
    this.now = 'time: ' + new Date()
    setTimeout(function () {
      window.location.reload()
    }, 15000)
  },

  methods: {
    addTodo: function () {
      this.todos.push({text: this.newTodo})
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped>
h1 {
  color: black;
}

#ajax {
  font-family: 'Helvetica', Arial, sans-serif;
}
a {
  text-decoration: none;
  color: #f66;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

ul {
    font-size: 36px;
}
</style>
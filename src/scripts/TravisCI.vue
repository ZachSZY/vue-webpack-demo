<template>
    <h1>Travis-CI for CSD</h1>

    <h2 id="datetime">{{now | formatDate}}</h2>
    <ul v-for="branch in branches">
        <li>
          <p><b>{{branch}} </b><img src="https://travis-ci.org/mebusw/CSD-training-prj.svg?branch={{branch}}" alt="build:passed"></p>
          <p><a :href="commits[branch].html_url" target="_blank" class="commit">{{commits[branch].sha.slice(0, 7)}}</a>
          - <span class="message">{{commits[branch].message | truncate}}</span><br>
          by <span class="author">{{commits[branch].author.name}}</span>
          at <span class="date">{{commits[branch].author.date | formatDate}}</span>
          </p>
        </li>
    </ul>

</template>

<script>
var $ = require('jquery')
$('')

export default {
  data () {
    return {
      branches: ['master', 'csharp-oct', 'csharp-jpx', 'java-monkey', 'java-eas'],
      now: '',
      commits: {master: {sha: '1234567890', message: 'xxxxxxxxxx', author: {name: 'tom', date: ''}}}
    }
  },

  created: function () {
    var self = this
    self.fetchData()
    setInterval(function () {
      self.fetchData()
    }, 15000)
  },

  filters: {
    truncate: function (v) {
      if (v === undefined) return ''
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      if (v === undefined) return ''
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    // addTodo: function () {
    //   this.todos.push({text: this.newTodo})
    // },
    // removeTodo: function (index) {
    //   this.todos.splice(index, 1)
    // },
    fetchData: function () {
      var apiURL = 'https://api.github.com/repos/mebusw/CSD-training-prj/commits?per_page=1&sha='
      var self = this
      this.now = 'Last refreshed at: ' + new Date()

      self.branches.forEach(function (branch, i) {
        $.ajax({
          method: 'GET',
          url: apiURL + branch,
          data: {}
        })
        .done(function (data) {
          console.log('done')
          self.commits[branch] = data
        })
        .fail(function () {
          console.log('error')
        })
        .always(function () {
          console.log('complete')
        })
      })
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
    font-size: 24px;
}
</style>
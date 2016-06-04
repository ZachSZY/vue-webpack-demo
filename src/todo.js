import Vue from 'vue'
import Todo from './Todo'
require('./assets/todo.css')

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { Todo }
})

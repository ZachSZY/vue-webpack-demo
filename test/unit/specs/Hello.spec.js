import Vue from 'vue'
import Hello from 'src/scripts/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello msg="Hello World!"></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello World!')
  })

  it('should render correct contents customerized', () => {
    const vm = new Vue({
      template: '<div><hello msg="Hello Azeroth!"></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Hello Azeroth!')
  })
})

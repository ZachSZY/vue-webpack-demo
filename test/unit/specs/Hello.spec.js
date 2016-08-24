import Vue from 'vue'
import Hello from 'src/scripts/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello msg="World!"></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('World!')
  })

  it('should render correct contents customerized', () => {
    const vm = new Vue({
      template: '<div><hello msg="Universe!"></hello></div>',
      components: { Hello }
    }).$mount()
    expect(vm.$el.querySelector('.hello h1').textContent).to.contain('Universe!')
  })

  it('bi-direction binding of children components', () => {
    const vm = new Vue({
      template: '<div><hello msg="Universe!" :total="567"></hello></div>',
      components: { Hello }
    }).$mount()
    console.log(vm.$el.querySelector('.hello').textContent)

    vm.$el.querySelector('#incMoney').click()
    console.log(vm.$el.querySelector('.hello').textContent)
    expect(vm.$el.querySelector('.hello').textContent).to.contain('In Azeroth, you have $567')
  })
})

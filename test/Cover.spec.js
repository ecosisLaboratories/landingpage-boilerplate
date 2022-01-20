import { shallowMount } from '@vue/test-utils'
import Cover from '@/components/Cover'

const factory = () => {
  return shallowMount(Cover)
}

describe('Cover', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

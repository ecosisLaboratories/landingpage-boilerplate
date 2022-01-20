import { shallowMount } from '@vue/test-utils'
import CoverContent from '@/components/CoverContent'

const factory = () => {
  return shallowMount(CoverContent)
}

describe('CoverContent', () => {
  it('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

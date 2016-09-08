import { addOptionTest, removeOptionTest } from './selectedOptions'
import * as testSelectors from './testSelectors'

const reducerTests = () => {
  describe('selectedOptions', () => {
    it('should add an option', addOptionTest)
    it('should remove an option', removeOptionTest)
  })
  describe('SELECTORS', () => {
    it('should get Packages By Selected Options', testSelectors.getPackagesBySelectedOptionsTest)
  })
}

export default reducerTests

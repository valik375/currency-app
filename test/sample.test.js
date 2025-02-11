import { expect } from "@esm-bundle/chai"

describe("Sample Mocha Test (ESM)", function () {
  it("should return true", function () {
    expect(true).to.be.true
  })

  it("should add numbers correctly", function () {
    const sum = 2 + 3
    expect(sum).to.equal(5)
  })
})

function fetchPromiseData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'Hello, Promise!', age: 32 })
    }, 1000)
  })
}
describe('Asynchronous Testing with done', function () {
  it('should fetch data correctly', async function () {
    const result = await fetchPromiseData()
    expect(result).to.have.property('data').that.equals('Hello, Promise!')
    expect(result).to.have.property('age').that.equals(32)
  })
})
describe('Promise-based Testing', function () {
  it('should fetch data correctly with Promise', function () {
    return fetchPromiseData().then((result) => {
      expect(result).to.have.property('data').that.equals('Hello, Promise!')
      expect(result).to.have.property('age').that.equals(32)
    })
  })
})
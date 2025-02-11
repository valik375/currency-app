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
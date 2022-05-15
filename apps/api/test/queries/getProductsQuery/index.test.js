const { expect } = require("chai");
const { getProductsQuery } = require("../../../dist/products/query");

describe("get products query", () => {
  it("category exist", () => {
    const query = getProductsQuery("drinks");
    const res = query.includes("category like");
    expect(res).to.be.true;
  });

  it("category not exist", () => {
    const query = getProductsQuery();
    const res = query.includes("1 = 1");
    expect(res).to.be.true;
  });
});

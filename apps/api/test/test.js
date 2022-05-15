const { expect } = require("chai");
const { isPasswordMatch } = require("../dist/auth/validations");
const axios = require("axios");

const productsUrl = "http://localhost:3500/products";

describe("/Get Products", () => {
  it("Fetch All products", async () => {
    const { data } = await axios.get(productsUrl, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsX2FkZHJlc3MiOiJuYW5jeUBub3J0aHdpbmR0cmFkZXJzLmNvbSIsInBhc3N3b3JkIjpudWxsLCJyb2xlIjoidmlld2VyIn0sImlhdCI6MTY1MjYyNjYzMiwiZXhwIjoxNjUyNjYyNjMyfQ.Bj8_4Ku7jWtyU_qb0hn01n-tVMlLU9S75UOHupglRHg",
      },
    });
    const { message } = data;
    expect(message).to.be.equal("ok");
  });
  it("Fetch All products - Unauthorized", async () => {
    try {
      await axios.get(productsUrl, {
        headers: {
          authorization: "aaa",
        },
      });
    } catch (ex) {
      expect(ex.response.data.message).to.be.equal("Unauthorized");
      expect(ex.response.status).to.be.equal(401);
    }
  });
});

describe("Is password match", () => {
  it("Check if password is match - password1234", () => {
    const result = isPasswordMatch(
      { password: "password1234" },
      "password1234"
    );
    expect(result).to.be.true;
  });

  it("Check if password is not match - notMatch", () => {
    const result = isPasswordMatch({ password: "password1234" }, "notMatch");
    expect(result).to.be.false;
  });

  it("Check if password is not match - notMatch", () => {
    const result = isPasswordMatch({ passwor: "password1234" }, "notMatch");
    expect(result).to.be.false;
  });
});

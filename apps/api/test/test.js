const { expect } = require("chai");
const { isPasswordMatch } = require("../dist/auth/validations");
const axios = require("axios");
const { signToken } = require("../dist/auth/helper");

const productsUrl = "http://localhost:3500/products";

const token = signToken({
  first_name: "userText",
  last_name: "userText",
  email_address: "userText@gmail.com",
});

describe("/Get Products", () => {
  it("Fetch All products", async () => {
    const { data } = await axios.get(productsUrl, {
      headers: {
        authorization: token,
      },
    });
    const { message } = data;
    expect(message).to.be.equal("ok");
  });
  it("Fetch All products - Unauthorized", async () => {
    try {
      const result = await axios.get(productsUrl, {
        headers: {
          authorization: token + "WrongToken",
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

describe("get products query", () => {
  it("category exist", () => {

  });

  it("category not exist", () => {
      
  });
});

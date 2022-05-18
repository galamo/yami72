const { expect } = require("chai");
const axios = require("axios");
const loginUrl = "http://localhost:3500/auth/login";
const { insertFakeUser, insertFakePassword } = require("../helpers");

describe("/POST Login", () => {
  it("User is not Exist", async () => {
    try {
      const response = await axios.post(`${loginUrl}`, {
        userName: "UserThatNotExist",
      });
      expect(response.status).to.be.equal(404);
    } catch (ex) {
      expect(ex.response.status).to.be.equal(404);
    }
  });
  it("User Unauthorized", async () => {
    const generatedUser = getUser();
    const { insertId } = await insertFakeUser(generatedUser);
    const { affectedRows } = await insertFakePassword({
      userId: insertId,
      password: "CorrectPassword",
    });
    try {
      const response = await axios.post(`${loginUrl}`, {
        userName: generatedUser.email_address,
        password: "WrongPassword",
      });
      expect(response.status).to.be.equal(404);
    } catch (ex) {
      expect(ex.response.status).to.be.equal(401);
    }
  });
  it("Login Success", async () => {
    const generatedUser = getUser();
    const { insertId } = await insertFakeUser(generatedUser);
    const { affectedRows } = await insertFakePassword({
      userId: insertId,
      password: "CorrectPassword",
    });
    const response = await axios.post(`${loginUrl}`, {
      userName: generatedUser.email_address,
      password: "CorrectPassword",
    });
    const { token, message } = response.data;
    expect(response.status).to.be.equal(200);
    expect(message).to.be.equal("Success");
    const isString = typeof token === "string";
    expect(token).is.not.null;
    expect(isString).to.be.true;
  });
});

function getUser() {
  const generatedNumber = Math.ceil(Math.random() * 9999);
  return {
    company: `company_${generatedNumber}`,
    last_name: `last_${generatedNumber}`,
    first_name: `first_${generatedNumber}`,
    email_address: `test${generatedNumber}@test.com`,
    job_title: `developer_${generatedNumber}`,
  };
}

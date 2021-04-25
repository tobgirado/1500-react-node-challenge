const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

describe("GET /iecho with text", function () {
  it("returns an inversed strings that is not a palindrome", async function () {
    const response = await request.get("/iecho?text='a text'");
    expect(response.status).to.eql(200);
    expect(response.body.text).equal('\'txet a\'');
    expect(response.body.isPalindrome).equal(false);
  });
});

describe("GET /iecho with text", function () {
    it("returns an inversed strings that is a palindrome", async function () {
      const response = await request.get("/iecho?text='neuquen'");
  
      expect(response.status).to.eql(200);
      expect(response.body.text).equal('\'neuquen\'');
      expect(response.body.isPalindrome).equal(true);
    });
  });

  describe("GET /iecho with no text", function () {
    it("returns an error", async function () {
      const response = await request.get("/iecho?text=");
  
      expect(response.status).to.eql(400);
    });
  });
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
describe("GET /iecho with a very long text", function () {
  it("returns a very long inversed string that is a palindrome", async function () {
    let verylongText = "Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida"
    const response = await request.get(`/iecho?text=${verylongText}`);

    expect(response.status).to.eql(200);
    expect(response.body.text).equal('adiv in ay ,ateop in ay ,animile sorig in ay ,anicetrom ed ominá y animón arcas ,arep asonimul atocarret a ,acas onicot in ay ,anicitav ecinó ,animac ocináp ed ,azog allinac ed azoter son osret ozadec ,anillag ozadep ,anicoc amina ,onicev atic in ay ,anitocin osaca ,aterrac otalum in osaper a ,sacranom in ay ,animod em ortec in ay ,anigiro selim in ay ,anipo et ay anividA');
    expect(response.body.isPalindrome).equal(true);
  });
});
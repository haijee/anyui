class Web {
  constructor(name) {
    this.name = name;
  }
  static test() {
    return "test";
  }
}

const web = new Web();
console.log(Web.test());

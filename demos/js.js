// Adds two given numbers.
function add(l, r) {
  return l + r
}

/**
 * JSDocs block example.
 * @param {string} username Username.
 */
const inlineFunction = (username) => {
  console.log(`Hello, world! ${username}`)
}

export default class MyClass extends BaseClass {
  constructor(...options) {
    applyOptions(options, true)
  }

  method() {
    this.log("method called")
    return void 0
  }
}

const entity = new MyClass(1, "a", { b: "c" })

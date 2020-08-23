class Key {
  set() {
    console.log("hello from set");
  }

  show() {
    console.log("hello from show");
  }

  remove() {
    console.log("hello from remove");
  }
}

module.exports = new Key();

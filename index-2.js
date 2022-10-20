const assert = require("assert");

const Node = function (opOrVal, left, right) {
  return {
    opOrVal,
    left,
    right
  };
};

Node.prototype.__proto__.customToString = function () {
  if (!this.left || !this.right) {
    return this.opOrVal;
  }

  switch (this.opOrVal) {
    case "+":
      return `(${this.left.customToString()} + ${this.right.customToString()})`;
    case "-":
      return `(${this.left.customToString()} - ${this.right.customToString()})`;
    case "x":
      return `(${this.left.customToString()} x ${this.right.customToString()})`;
    case "÷":
      return `(${this.left.customToString()} ÷ ${this.right.customToString()})`;
  }
}

Node.prototype.__proto__.result = function () {
  if (!this.left || !this.right) {
    return this.opOrVal;
  }

  switch (this.opOrVal) {
    case "+":
      return this.left.result() + this.right.result();
    case "-":
      return this.left.result() - this.right.result();
    case "x":
      return this.left.result() * this.right.result();
    case "÷":
      return this.left.result() / this.right.result();
  }
}

const tree = Node(
  "÷",
  Node(
    "+",
    Node(7),
    Node(
      "x",
      Node(
        "-",
        Node(3),
        Node(2)
      ),
      Node(5)
    )
  ),
  Node(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.customToString());
assert.strictEqual(2, tree.result());

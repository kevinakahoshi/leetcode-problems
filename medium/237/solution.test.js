const {
  describe,
  expect,
  test
} = require("@jest/globals");
const {
  deleteNode
} = require("./solution");

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const formList = (values) => {
  const listNodes = values.map((val) => new ListNode(val));
  const queue = [...listNodes];
  const head = queue.shift();
  let current = head;

  while (queue.length) {
    const next = queue.shift();
    current.next = next;
    current = current.next;
  }

  return listNodes;
}

const getValues = (head) => {
  const output = [];

  let current = head;

  while (current) {
    output.push(current.val);
    current = current.next;
  }

  return output;
};

describe("Problem 237: Delete Node in a Linked List", () => {
  test("Test 1: [4, 5, 1, 9]", () => {
    const input = [4, 5, 1, 9];
    const inputList = formList(input);
    const [head] = inputList;
    const expectedOutput = [4, 1, 9];

    deleteNode(inputList[1]);
    const output = getValues(head);
    expect(expectedOutput).toMatchObject(output);
  });
});

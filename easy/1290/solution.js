// Definition for singly-linked list.
// function ListNode(value) {
//   this.value = value;
//   this.next = null;
// }
// @param {ListNode} head
// @return {number}

const getDecimalValue = head => {
  let binaryString = '';
  let currentNode = head;
  while (currentNode) {
    binaryString += currentNode.value;
    currentNode = currentNode.next;
  }
  return parseInt(binaryString, 2)
};

export default getDecimalValue;

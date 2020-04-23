// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// @param {ListNode} head
// @return {number}

const getDecimalValue = head => {
  let binaryString = '';
  let currentNode = head;
  while (currentNode) {
    binaryString += currentNode.val;
    currentNode = currentNode.next;
  }
  return parseInt(binaryString, 2)
};

export default relativeSortArray;

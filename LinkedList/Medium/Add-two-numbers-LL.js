class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to reverse a linked list
function reverseList(head) {
  let prev = null;
  while (head !== null) {
    let nextNode = head.next;
    head.next = prev;
    prev = head;
    head = nextNode;
  }
  return prev;
}

// Function to add two numbers represented as linked lists
function addTwoNumbers(l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);

  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return reverseList(dummyHead.next);
}

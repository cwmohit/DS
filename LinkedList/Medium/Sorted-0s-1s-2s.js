class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
}
// 1. Data replacement

// 2. Without data replacement (merge sorted linkedlist)
function sort012(head) {
  if (!head || !head.next) return head;

  let zeroHead = new ListNode(0),
    zeroTail = zeroHead;
  let oneHead = new ListNode(0),
    oneTail = oneHead;
  let twoHead = new ListNode(0),
    twoTail = twoHead;

  let current = head;

  while (current !== null) {
    if (current.val === 0) {
      zeroTail.next = current;
      zeroTail = zeroTail.next;
    } else if (current.val === 1) {
      oneTail.next = current;
      oneTail = oneTail.next;
    } else {
      twoTail.next = current;
      twoTail = twoTail.next;
    }
    current = current.next;
  }

  // Merge the three lists
  zeroTail.next = oneHead.next ? oneHead.next : twoHead.next;
  oneTail.next = twoHead.next;
  twoTail.next = null;

  return zeroHead.next;
}

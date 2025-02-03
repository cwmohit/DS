class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeDuplicates(head) {
  if (!head || !head.next) return head;

  let current = head;
  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; 
    } else {
      current = current.next;
    }
  }
  return head;
}

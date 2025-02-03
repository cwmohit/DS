class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeDuplicatesUnsorted(head) {
  if (!head || !head.next) return head;

  let seen = new Set();
  let current = head;
  seen.add(current.val);

  while (current.next !== null) {
    if (seen.has(current.next.val)) {
      current.next = current.next.next; 
    } else {
      seen.add(current.next.val);
      current = current.next;
    }
  }
  return head;
}

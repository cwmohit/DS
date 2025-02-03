class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes
  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
}


// Approach 2
function mergeTwoListsRecursive(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
  
    if (l1.val < l2.val) {
      l1.next = mergeTwoListsRecursive(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoListsRecursive(l1, l2.next);
      return l2;
    }
  }
  
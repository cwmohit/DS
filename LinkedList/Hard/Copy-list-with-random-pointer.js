/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */


var copyRandomList = function(head) {
    if (!head) return null;

    let map = new Map();
    let current = head;

    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;

    while (current) {
        let clonedNode = map.get(current);
        clonedNode.next = map.get(current.next) || null;
        clonedNode.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
};
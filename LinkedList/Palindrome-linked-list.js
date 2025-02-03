// Approach 1
function checkPalindrome(arr){
    let n = arr.length;
    let s = 0;
    let e = n-1;
    while(s<=e){
        if(arr[s] !== arr[e]){
            return 0;
        }
        s++;
        e--;
    }
    return 1;
}

var isPalindrome = function(head) {
    let arr = [];
    let temp = head;
    while(temp !== null){
        arr.push(temp.val);
        temp = temp.next;
    }

    return checkPalindrome(arr);
};



// Approach 2
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;

    let mid = getMid(head);

    let temp = mid.next;
    mid.next = reverse(temp);

    // compare both half
    let head1 = head;
    let head2 = mid.next;

    while(head2 !== null){
        if(head1.val !== head2.val) return false;

        head1 = head1.next;
        head2 = head2.next;
    }

    temp = mid.next;
    mid.next = reverse(temp);

    return true;
};

function getMid(head){
    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function reverse(head){
    let curr = head;
    let prev = null;
    let next = null;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
function findCelebrity(mat, n) {    
    let stack = [];

    // Step 1: Push all people onto the stack
    for (let i = 0; i < n; i++) {
        stack.push(i);
    }

    function knows(a, b) {
        return mat[a][b];
    }

    // Step 2: Reduce the stack to one potential celebrity
    while (stack.length > 1) {
        let A = stack.pop();
        let B = stack.pop();

        if (knows(A, B)) {
            // A knows B → A is not a celebrity, B might be
            stack.push(B);
        } else {
            // A does not know B → B is not a celebrity, A might be
            stack.push(A);
        }
    }

    if (stack.length === 0) return -1; // No possible celebrity

    let candidate = stack.pop();

    // Step 3: Verify if the candidate is actually a celebrity
    for (let i = 0; i < n; i++) {
        if (i !== candidate) {
            if (knows(candidate, i) || !knows(i, candidate)) {
                return -1; // Candidate is not a celebrity
            }
        }
    }

    return candidate;
}

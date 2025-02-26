var minimumPushes = function(word) {
    let freq = new Map();

    for (let char of word) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    let counts = Array.from(freq.values()).sort((a, b) => b - a);

    let result = 0;

    for (let i=0;i<counts.length;i++) {
        let freq = counts[i];
        let press = Math.floor(i/8)+1;
        result+=press*freq;
    }
    
    return result;
};
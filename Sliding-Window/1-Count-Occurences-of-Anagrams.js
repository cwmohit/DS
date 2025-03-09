function countAnagramOccurrences(txt, pat) {
    let n = txt.length;

    let counter = new Array(26).fill(0);

    for(let i=0;i<pat.length;i++){
        let ch = pat[i];
        counter[ch.charCodeAt()-97]++;
    }

    let i=0, j=0;
    let result = 0;

    while(j<n){
        counter[txt[j].charCodeAt()-97]--;
        if(j-i+1 == pat.length){
            if(counter.every(val => val == 0)){
                result++;
            }
            counter[txt[i].charCodeAt()-97]++;
            i++;
        }
        j++;
    }

    return result;
}
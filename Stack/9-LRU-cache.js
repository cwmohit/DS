var LRUCache = function(capacity) {
    this.cache = new Map();
    let keys = [];

    this.onAccessBefore = (key) => {
        if(this.cache.has(key)){
            keys.splice(keys.indexOf(key), 1);
        }
        keys.push(key);

        if(keys.length > capacity){
            let removedKey = keys.shift();
            this.cache.delete(removedKey);
        }
    }
};


LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        this.onAccessBefore(key);
        return this.cache.get(key);
    }else{
        return -1;
    }
};


LRUCache.prototype.put = function(key, value) {
    this.onAccessBefore(key);
    this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
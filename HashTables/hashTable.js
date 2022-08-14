class HashTable {
  constructor(size = 53) {
    // 53 is a prime number that
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let wPrime = 31;
    // This is essentialyl saying only look at the first 100 characters
    //   This can obviously lead to some collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * wPrime + value) % this.keyMap.length;
    }
    //   This only works on strings, isn't random and is not over all good
    return total;
  }
  _set(key, value) {
    let hashedIdx = this._hash(key);
    // this.keyMap[hashedIdx] ? this.keyMap[key].push([hashed,value]) : [[hashed,value]];
    // OR
    if (!this.keyMap[hashedIdx]) {
      this.keyMap[hashedIdx] = [];
    }
    this.keyMap[hashedIdx].push([key, value]);
  }
  _get(key) {
    let hashedIdx = this._hash(key);
    if (this.keyMap[hashedIdx]) {
      for (let i = 0; i < this.keyMap[hashedIdx].length; i++) {
        if (this.keyMap[hashedIndex][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
      return undefined;
    }
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // This is also a check for duplicates
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // This all checks for duplicates and
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

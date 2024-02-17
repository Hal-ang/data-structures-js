const loseloseHashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};

function HastTable() {
  const table = [];

  this.put = function (key, value) {
    const position = loseloseHashCode(key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };
  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };
}

function Dictionary() {
  let items = {};

  this.has = function (key) {
    return items.hasOwnProperty(key);
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {
    const values = [];

    for (const key in items) {
      if (history.has(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };
}

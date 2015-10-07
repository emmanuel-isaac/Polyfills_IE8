if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(elem, from) {
    var i, index_from;
    index_from = from || 0;
    if (index_from < 0) {
      index_from = Math.abs(this.length + index_from);
    }
    if (index_from > this.length - 1) {
      return -1;
    }
    i = index_from;
    while (i < this.length) {
      if (this[i] === elem) {
        return i;
      }
      i = i + 1;
    }
    return -1;
  };
};
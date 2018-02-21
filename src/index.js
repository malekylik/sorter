class Sorter {
  constructor() {
    this.array = [];
    this.comparator = function(a,b){return a - b;};
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let mass = [];

    for(let i = 0; i < indices.length; i++)
      mass.push(this.array[indices[i]]);

    mass.sort(this.comparator);

     indices.sort();

    for(let i = 0; i < indices.length; i++)
      this.array[indices[i]] = mass[i];
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}


module.exports = Sorter;
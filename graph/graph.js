import Dictionary from '../dictionary/dictionary.js';

function Graph() {
  const vertices = [];

  const adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
    let s = '';
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> ';
      const neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  };
}

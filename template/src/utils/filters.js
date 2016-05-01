// filter to addClass
let addClass = (item) => {
  switch (item.class) {
    case 'a':
      return '<em class="font-red">' + item.name + '</em>';
    case 'b':
      return '<em class="font-yellow">' + item.name + '</em>';
    case 'c':
      return '<em class="font-blue">' + item.name + '</em>';
  }
};

// parse path
let parsePath = (item) => {
  switch (item) {
    case '/':
      return 'Home';
    case '/hello':
      return 'Hello';
    case '/bye':
      return 'Bye';
  }
};

module.exports = {
  addClass: addClass,
  parsePath: parsePath
};

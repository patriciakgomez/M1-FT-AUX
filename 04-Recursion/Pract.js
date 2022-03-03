let obj = {
    school: {
      hogwarts: {
        headmaster: {
          name: {
            first: "Albus",
            last: "Dumbledore",
          },
        },
      },
    },
  };

const isThere = function (obj, value) {
    //escribe aqui tu codigo
    var keys = Object.keys(obj);
    if (keys.length !== 0) {
      for (let el of keys) {
        if (obj[el] === value) {
          return true;
        } else {
          var newObj = obj.el;
          isThere(newObj, value);
        }
      }
    }
    return false;
  }

  isThere(obj, 22)


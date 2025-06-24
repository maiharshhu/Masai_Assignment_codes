function createFunctionList() {
  let functions = [];

  for (var i = 0; i < 5; i++) {
    (function(index) {
      functions.push(function () {
        console.log("Index:", index);
      });
    })(i);
  }

  return functions;
}

const funcs = createFunctionList();
funcs[0]();
funcs[1](); 
funcs[4](); 

class Router {
  constructor() {
    this.routes = {}
  }

  bind(rout, method, action) {
    this.routes[rout + "#" + method] = action
  }

  runRequest(rout, method) {
    const action = this.routes[rout + "#" + method] ?? (() => 'Error 404: Not Found');

    return action()
  }
}

var router = new Router;
router.bind('/hello', 'GET', function(){ return 'hello world'; });

console.log(router.runRequest('/hello', 'GET')) // returns 'hello world';
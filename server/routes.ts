const Routes = require("next-routes");
const pages = require("./pages").PageConst;

// general nhớ để trước
const Routers = Routes();
// Build routes
// eslint-disable-next-line no-restricted-syntax
for (const page in pages) {
    if (Object.prototype.hasOwnProperty.call(pages, page)) {
        Routers.add(pages[page].url, pages[page].page);
    }
}

module.exports = Routers;
// #HardCode 2020/11/02 import { Link,Router } to use;
const { Link, Router } = Routes;
export { Link, Router };
export default Routes;

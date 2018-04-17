const cart = require("./cart");
const cars = require("./data/cars");

describe("Cart Properties", () => {
  test("Cart should be empty", () => {
    expect(Array.isArray(cart.cart)).toEqual(true);
    expect(cart.cart.length === 0).toEqual(true);
  });
  test("Cart total should equal 0", () => {
    expect(cart.total === 0).toEqual(true);
  });
});
describe("Cart Methods", () => {
  afterEach(() => {
    cart.cart = [];
    cart.total = 0;
  });
  test("addToCart should add items to the cart", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);

    expect(cart.cart.length === 2).toEqual(true);
    expect(cart.cart[0] === cars[0]).toEqual(true);
    expect(cart.cart[1] === cars[1]).toEqual(true);
  });
  test("addToCart should increase total of cart", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);

    expect(cart.total).toEqual(cars[0].price + cars[1].price);
  });
  test("removeFromCart should decrease cart length", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.removeFromCart(0, cars[0].price);

    expect(cart.cart.length === 1).toEqual(true);
    expect(cart.cart[0] === cars[1]).toEqual(true);
  });
  test("removeFromCart should decrease the total", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[3]);
    cart.removeFromCart(0, cars[0].price);
    cart.removeFromCart(1, cars[3].price);

    expect(cart.total).toEqual(cars[1].price);
  });
  test("checkout should empty the cart and set total to 0.", () => {
    cart.addToCart(cars[0]);
    cart.addToCart(cars[1]);
    cart.addToCart(cars[2]);
    cart.checkout();

    expect(cart.cart.length).toEqual(0);
    expect(cart.total).toEqual(0);
  });
});

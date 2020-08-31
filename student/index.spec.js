const core = require("./index");

describe("1) returnTheString()", function () {
  it("Given a string, return the string", function () {
    var string = "Hello World!";
    var expected = "Hello World!";
    var actual = core.returnTheString(string);

    expect(actual).toEqual(expected);
  });
});

describe("1) splitTheString()", function () {
  it("Given a string, turn it into an array of the letters in the string", function () {
    var string = "Hello World!";
    var expected = ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d", "!"];
    var actual = core.splitTheString(string);

    expect(actual).toEqual(expected);
  });
});

describe("2) shallowCopyObject()", function () {
  it("Given an object, return a shallow copy of the object", function () {
    var object = {a: 1, b: 2, c: 3};
    var expected = {a: 1, b: 2, c: 3};
    var actual = core.shallowCopyObject(object);

    expect(actual === expected).toBe(false);
    expect(actual).toEqual(expected);
  });
});

describe("3) shallowCopyArray()", function () {
  it("Given an array, return a shallow copy of the array", function () {
    var array = [1, 2, 3];
    var expected = [1, 2, 3];
    var actual = core.shallowCopyArray(array);

    expect(actual === expected).toBe(false);
    expect(actual).toEqual(expected);
  });
});

describe("4) MergeTwoObjects()", function () {
  it("Given two objects, turn them into one object that contains the properties of both objects", function () {
    var object1 = { a: 1, b: 2 };
    var object2 = { c: 3, d: 4 };
    var expected = { a: 1, b: 2, c: 3, d: 4 };
    var actual = core.mergeTwoObjects(object1, object2);

    expect(actual).toEqual(expected);
  });
});

describe("5) CombineTwoArrays()", function () {
  it("Given two arrays, turn them into one array containing all elements of both arrays", function () {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var expected = [1, 2, 3, 4, 5, 6];
    var actual = core.combineTwoArrays(array1, array2);

    expect(actual).toEqual(expected);
  });
});
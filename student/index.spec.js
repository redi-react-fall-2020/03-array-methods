const core = require("./index");

describe("1) Invert array values", function(){
  it("Basic Tests", function(){
    expect(core.invert([1,2,3,4,5])).toEqual([-1,-2,-3,-4,-5]);
    expect(core.invert([1,-2,3,-4,5])).toEqual([-1,2,-3,4,-5]);
    expect(core.invert([])).toEqual([]);
  });
});

describe("2) Counting ship number", function(){
  it("Basic Tests", function(){
    const array1 = [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true ];

    expect(core.countSheeps(arra1)).toEqual(17)
  });
});

describe("3) Number of people in the bus", function(){
  it("Basic Tests", function(){
    expect(core.peopleInBus([[10,0],[3,5],[5,8]])).toEqual(5);
    expect(core.peopleInBus([1,-2,3,-4,5])).toEqual(17);
    expect(core.peopleInBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toEqual(21);
  });
});
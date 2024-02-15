// launchcode.test.js code:
const launchcode = require('../index.js');
// testing launchcode
describe("Testing launchcode", function() {
    // Write your unit tests here!
    test("should return a key, with a certain value", function(){
      expect(launchcode).toHaveProperty('organization', 'nonprofit');
    });
    test("should return a key, with a certain value", function(){
      expect(launchcode).toHaveProperty('executiveDirector', 'Jeff');
    });
    test("should return a key, with a certain value", function(){
      expect(launchcode).toHaveProperty('percentageCoolEmployees', 100);
    });
    test("should return a key, with a certain value", function(){
      expect(launchcode).toHaveProperty('programsOffered', ["Web Development", "Data Analysis", "Liftoff"]);
})
});
const launchOutput = require('../index.js')

describe("Testing launchOutput", function() {
  test("When passed a number that is ONLY divisible by 2, return", function(){
    expect(launchOutput(2)).toBe('Launch!');
  });
});
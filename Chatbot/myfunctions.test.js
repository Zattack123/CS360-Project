
// unit testing

const { expect } = require('@jest/globals');
const myfunctions = require('./myfunctions');
const satisfaction = myfunctions.satisfaction;
const compare = myfunctions.compare;
const categoryComputerScience = myfunctions.categoryComputerScience;
const categoryMathematics = myfunctions.categoryMathematics;


// tests on satisfaction method

test('satisfaction: given "sat" returns "I\'m satisfied"', () => {
    expect(satisfaction("sat")).toBe("I'm satisfied");
})
test('satisfaction: given "unsat" returns "I\'m unsatisfied"', () => {
    expect(satisfaction("unsat")).toBe("I'm unsatisfied");
})

// tests on compare method

test('compare: given simple lists, returns right answer', () => {
    expect(compare([["A"]], [["B"]], "A")).toBe("B");
})

test('compare: given multiple response options, returns one of the given responses', () => {
    const result = compare([["fruit"]], [["banana", "peach"]], "fruit");
    expect(result).toBeOneOf(["banana","peach"]);
})

test('compare: given multiple answer and response options, returns one of the given responses', () => {
    const result = compare([["vegetable"],["fruit"]], [["broccoli"], ["banana", "peach"]], "fruit");
    expect(result).toBeOneOf(["banana","peach"]);
})

// test on categoryComputerScience method

 test('categoryComputerScience: the display of div elements with certain ids is correct', () => {
     const $ = require("jquery");
     document.body.innerHTML="<div id='introPage'/>"
     + "<div id='qPromptCS'/>"
     + "<div id='chatPage'/>";
     categoryComputerScience();
     expect($("#introPage").css('display')).toBe('none');
     expect($("#qPromptCS").css('display')).toBe('block');
     expect($("#chatPage").css('display')).toBe('block');
 })

// test on categoryMathematics method

test('categoryMathematics: the display of div elements with certain ids is correct', () => {
    const $ = require("jquery");
    document.body.innerHTML="<div id='introPage'/>"
    + "<div id='qPromptMath'/>"
    + "<div id='chatPage'/>";
    categoryMathematics();
    expect($("#introPage").css('display')).toBe('none');
    expect($("#qPromptMath").css('display')).toBe('block');
    expect($("#chatPage").css('display')).toBe('block');
})



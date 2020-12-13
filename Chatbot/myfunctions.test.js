
// unit testing

const { expect } = require('@jest/globals');
const functions = require('./functions');
const satisfaction = functions.satisfaction;
const compare = functions.compare;
const categoryComputerScience = functions.categoryComputerScience;
const categoryMathematics = functions.categoryMathematics;


// tests on satisfaction method

test('satisfaction: given "sat" returns "I\'m satisfied"', () => {
    expect(satisfaction("sat")).toBe("I'm satisfied");
})
test('satisfaction: given "unsat" returns "I\'m unsatisfied"', () => {
    expect(satisfaction("unsat")).toBe("I'm unsatisfied");
})

// tests on compare method

// Unit: Test Case 1
test('compare: given multiple response options, returns one of the given responses', () => {
    const result = compare([["vowel"]], [["A", "E","I","O","U"]], "vowel");
    expect(result).toBeOneOf(["A","E","I","O","U"]);
})
// Unit: Test Case 2
test('compare: given multiple answer and response options, returns one of the given responses', () => {
    const result = compare([["vowel"],["consonant"]], [["A","E"], ["B", "C"]], "vowel");
    expect(result).toBeOneOf(["A","E"]);
})
// Coverage: Test Case 1
test('compare: given empty questionArray, returns undefined', () => {
    expect(compare([[]], [["B"]], "A")).toBe(undefined);
})
// Coverage: Test Case 2
test('compare: given empty answerArray, returns undefined', () => {
    expect(compare([["A"]], [[]], "A")).toBe(undefined);
})
// Coverage: Test Case 3
test('compare: given nonempty arrays and no match between question and string, returns undefined', () => {
    expect(compare([["A"]], [["B"]], "C")).toBe(undefined);
})
// Coverage: Test Case 4
test('compare: given nonempty arrays and a match between question and string, return corresponding answer', () => {
    expect(compare([["A"]], [["B"]], "A")).toBe("B");
})

// test on categoryComputerScience method

test('categoryComputerScience: the display of div elements with certain ids is correct', () => {
    const $ = require("jquery");
    document.body.innerHTML="<div id='input'/>"
    + "<div id='categoryselect'/>"
    + "<div id='questiontexthere'/>";
    categoryComputerScience();
    expect($("#input").css('display')).toBe('inline');
    expect($("#categoryselect").css('display')).toBe('none');
    expect($("#questiontexthere").children()).toHaveLength(2);
})



// test on categoryMathematics method

test('categoryMathematics: the display of div elements with certain ids is correct', () => {
    const $ = require("jquery");
    document.body.innerHTML="<div id='input'/>"
    + "<div id='categoryselect'/>"
    + "<div id='questiontexthere'/>";
    categoryComputerScience();
    expect($("#input").css('display')).toBe('inline');
    expect($("#categoryselect").css('display')).toBe('none');
    expect($("#questiontexthere").children()).toHaveLength(2);
})



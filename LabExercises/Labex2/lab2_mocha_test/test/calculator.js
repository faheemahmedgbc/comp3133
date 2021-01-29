const {add,div,sub,mul} = require("../app/calculator.js")
const chai = require("chai")
let assert = chai.assert

describe("add",function(){
    it("Sum of two numbers",function(){
        assert.equal(add(6,3),9)
    })
    it("Sum of two numbers",function(){
        assert.equal(add(6,3),15)
    })
})

describe("sub",function(){
    it("difference of two numbers",function(){
        assert.equal(sub(6,3),3)
    })
    it("difference of two numbers",function(){
        assert.equal(sub(6,3),15)
    })
})

describe("div",function(){
    it("quotient of two numbers",function(){
        assert.equal(div(6,3),2)
    })
    it("quotient of two numbers",function(){
        assert.equal(div(6,3),15)
    })
})

describe("mul",function(){
    it(" product of two numbers",function(){
        assert.equal(mul(6,3),18)
    })
    it("product of two numbers",function(){
        assert.equal(mul(6,3),15)
    })
})
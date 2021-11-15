// This tests the click-script.js to make sure the right output is displayed
const assert = require("assert");
const { openSesame } = require("../js");

describe("Button Test", function() {
    it("checks if button text is correct", function(){
        assert.isString(openSesame());
        assert.equal(openSesame(), "Thank you for considering my application!");
    });
});

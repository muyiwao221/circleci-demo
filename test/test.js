// This tests the click-script.js to make sure the right output is displayed

const fs = require("fs");
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname,"../index.html").toString(), 'utf8');

jest
    .dontMock('fs');

describe("Button Test", function() {
    beforeEach(() => {
	require('../js/click-script.js');
        window.document.body.innerHTML = html.toString()
	const clickMessage = window.document.getElementById('clickMessage');
        const clickButton = window.document.getElementById('clickButton');
	clickButton.click();
    });
    afterEach(() => {
        jest.resetModules();
    });
    it("Button Click Test", function() {
        expect(clickMessage.innerHTML).toBe("Thank you for considering my application!");
    });
    it("Button Click Test", function() {
        expect(clickButton.disabled).toBe(true);
    });
});

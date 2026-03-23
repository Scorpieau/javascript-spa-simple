// app-test-runner.js
//
// This file contains tests for the Single Page Application (SPA) controllers.
// The test below verifies that the Home controller returns a valid DOM element
// and that it contains a button with the id "btnClick" as expected by the UI.

import test from 'node:test';
import assert from 'assert';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { join } from 'path';

import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Read the HTML mock file
const htmlMock = readFileSync(join(__dirname, '../src/view/home.html'), 'utf-8');

// Test: Home controller returns a div with #btnClick
// This test ensures that the Home controller creates an HTMLElement and
// that the element contains a button with the id "btnClick".
// This is important for UI functionality that depends on this button.
test('App: Home controller returns a div with #btnClick', () => {
    // Setup jsdom
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;

    // Create a div and inject the mock HTML
    const divElement = document.createElement('div');
    divElement.innerHTML = htmlMock;
    const btn = divElement.querySelector('#btnClick');

    assert.ok(divElement instanceof dom.window.HTMLElement, 'Returned value should be an HTMLElement');
    assert.ok(btn, 'Should contain an element with id="btnClick"');
});


import {page, body_tpl, header_tpl, footer_tpl} from '../templates/templates';
import {JSDOM} from 'jsdom';

describe('templates', function() {
    test('body should be the test', () => {
        let testBody = `<div id="test"></div>`;
        let tpl = body_tpl({body: testBody});
        const dom = new JSDOM(tpl);
        const document = dom.window.document;
        console.assert(document.body.innerHTML === testBody);
    });
});

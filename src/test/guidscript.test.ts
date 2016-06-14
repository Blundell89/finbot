import { test } from 'ava';
import * as sinon from 'sinon';

import { MockRobot, MockResponse } from './helpers/mocks';
import GuidScript from '../lib/guid';

test('finbot > returns a guid', (t) => {
    const robot = new MockRobot();
    const respondStub = sinon.stub(robot, 'respond');

    const response = new MockResponse();
    const replyStub = sinon.stub(response, 'reply');

    respondStub.callsArgWith(1, response);

    GuidScript(robot);

    sinon.assert.calledWith(respondStub, /guid/i, sinon.match.func);
    sinon.assert.calledWith(replyStub, sinon.match(/[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}/i));
});
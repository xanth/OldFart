import chai from 'chai';
import moment from 'moment';

const expect = chai.expect;

import { Duration, Year, Day, Hour, Minute } from '../src/Duration.es6.js';

export default function TimeTests() {
    describe('time', () => {
        describe('Duration()', () => {
            const now = new Date();
            const then = new Date(now - (Year * 1000) - (Day * 1000) - (Hour * 1000) - (Minute * 1000) - 1000);

            it('Duration should have 1 for each', () => {
                const duration = new Duration(now, then);
                expect( duration.Years ).to.equal(1);
                expect( duration.Days ).to.equal(1);
                expect( duration.Hours ).to.equal(1);
                expect( duration.Seconds ).to.equal(1);
            });

            it('Duration should be 0', () => {
                const duration = new Duration(now, now);
                expect( duration.Years ).to.equal(0);
                expect( duration.Days ).to.equal(0);
                expect( duration.Hours ).to.equal(0);
                expect( duration.Seconds ).to.equal(0);
            });
        });
    });
}

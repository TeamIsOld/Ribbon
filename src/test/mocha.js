/**
 * @file Ribbon Tests - Test Ribbon with Mocha
 * @author Jeroen Claassens (favna) <sharkie.jeroen@gmail.com>
 * @copyright © 2017-2018 Favna  
 *  
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 of the License  
 *  
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.  
 *  
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.  
 *  
 *   Additional Terms 7.b and 7.c of GPLv3 apply to this file:  
 *       * Requiring preservation of specified reasonable legal notices or
 *         author attributions in that material or in the Appropriate Legal
 *         Notices displayed by works containing it.  
 *       * Prohibiting misrepresentation of the origin of that material,
 *         or requiring that modified versions of such material be marked in
 *         reasonable ways as different from the original version.  
 */

/* eslint-disable no-undef, no-unused-vars*/

const Ribbon = require('../Ribbon.js'),
  assert = require('assert'),
  path = require('path');

require('dotenv').config({path: path.join(__dirname, '../.env')});

describe('Check dotenv', () => {
  it('ribbon token should be set', (done) => {
    const token = process.env.ribbontoken;

    if (token) {
      done();
    }
  });
  it('google api token should be set', (done) => {
    const token = process.env.googleapikey;

    if (token) {
      done();
    }
  });
});

describe('Connect & Disconnect bot', () => {
  it('should connect then disconnect', (done) => {
    const client = new Ribbon(process.env.ribbontoken, true);

    client.init();

    const si = setInterval(() => { // eslint-disable-line one-var
      if (client.isReady) {
        client.deinit();
        clearInterval(si);
        done();
      }
    }, 5000);
  });
});
/*
 * @Author: GRANDSOFT\huocy huocy@glodon.com
 * @Date: 2022-08-11 15:44:28
 * @LastEditors: GRANDSOFT\huocy huocy@glodon.com
 * @LastEditTime: 2022-08-12 16:24:31
 * @FilePath: \cli\fast-cli-dev\packages\core\__tests__\core.test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict';

const core = require('..');
const assert = require('assert').strict;
const utils = require("@fast-cli-dev/utils")


assert.strictEqual(utils(1,2),5)
assert.strictEqual(core(), 'Hello from core');
console.info("core tests passed");
console.info(utils(1,2));

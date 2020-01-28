'use strict';

goog.require('Blockly.Python');

// Generator block_wait
Blockly.Python['block_wait_1'] = function (block) {
    var value_wait = 1;
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.sleep(' + value_wait + ')\n';
    return code;
};

// Generator block_wait
Blockly.Python['block_wait_5'] = function (block) {
    var value_wait = 5;
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.sleep(' + value_wait + ')\n';
    return code;
};

// Generator block_wait
Blockly.Python['block_wait'] = function (block) {
    var value_wait = Blockly.Python.valueToCode(block, 'WAIT', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_time'] = 'import time';
    var code = 'time.sleep(' + value_wait + ')\n';
    return code;
};

// Generator block_global_timer
Blockly.Python['block_global_timer'] = function (block) {
    var code = 'robot.time()';
    return [code, Blockly.Python.ORDER_NONE];
};

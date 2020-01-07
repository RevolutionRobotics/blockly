'use strict';

goog.require('Blockly.Python');

// Generator block_ultrasonic_sensor
Blockly.Python['block_ultrasonic_sensor'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');

    var code = `robot.sensors["${text_name}"].read()`;

    return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_bumper
Blockly.Python['block_bumper'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');

    var code = `robot.sensors["${text_name}"].read()`;
    return [code, Blockly.Python.ORDER_NONE];
};
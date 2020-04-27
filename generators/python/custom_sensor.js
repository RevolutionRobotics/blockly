'use strict';

goog.require('Blockly.Python');

Blockly.Python['block_is_object_near'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var code = `robot.sensors["${text_name}"].read() < 20`;

    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['block_wait_for_button_press'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var code = `while robot.sensors["${text_name}"].read():\n` +
    Blockly.Python.INDENT + 'time.sleep(0.05)  # allow other threads to run\n' +
    `while not robot.sensors["${text_name}"].read():\n` +
    Blockly.Python.INDENT + 'time.sleep(0.05)  # allow other threads to run\n';

    return code;
};

Blockly.Python['block_ultrasonic_sensor'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var code = `robot.sensors["${text_name}"].read()`;

    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['block_bumper'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');
    var code = `robot.sensors["${text_name}"].read()`;

    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['block_on_button_pressed'] = function (block) {
    var text_name = block.getFieldValue('NAME_INPUT');

    var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');
    var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

    return 'while True:\n' +
        Blockly.Python.INDENT + `while robot.sensors["${text_name}"].read():  # wait for release\n` +
        Blockly.Python.INDENT + Blockly.Python.INDENT + 'time.sleep(0.05)  # allow other threads to run\n' +
        Blockly.Python.INDENT + `while not robot.sensors["${text_name}"].read():  # wait for press\n` +
        Blockly.Python.INDENT + Blockly.Python.INDENT + 'time.sleep(0.05)  # allow other threads to run\n' +
        branch;
};
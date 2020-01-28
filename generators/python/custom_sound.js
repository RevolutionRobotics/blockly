'use strict';

goog.require('Blockly.Python');

// Generator block_set_led
Blockly.Python['play_tune_cat'] = function (block) {
    return "robot.play_tune('cat')\n";
};

// Generator block_set_led
Blockly.Python['play_tune_uh_oh'] = function (block) {
    return "robot.play_tune('uh_oh')\n";
};

// Generator block_set_led
Blockly.Python['play_tune_robot'] = function (block) {
    return "robot.play_tune('robot')\n";
};

// Generator block_set_led
Blockly.Python['play_tune_tada'] = function (block) {
    return "robot.play_tune('ta_da')\n";
};

// Generator block_play_note
Blockly.Python['block_play_note'] = function (block) {
    var dropdown_octave = block.getFieldValue('OCTAVE_SELECTOR');
    var dropdown_key = block.getFieldValue('KEY_SELECTOR');
    var value_duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_robot_lib'] = 'import robot_lib';
    var code =
        'Sound.play_note(' +
        'octave=' +
        dropdown_octave +
        ', ' +
        'key=' +
        dropdown_key +
        ', ' +
        'duration=' +
        value_duration +
        ')\n';
    return code;
};

// Generator block_play_tune
Blockly.Python['play_tune'] = function (block) {
    var dropdown_tune = block.getFieldValue('IN_SOUND');

    var code = "robot.play_tune('" + dropdown_tune + "')\n";
    return code;
};

// Generator block_stop_playback
Blockly.Python['block_stop_playback'] = function (block) {
    var code = 'Sound.stop_playback()\n';
    return code;
};
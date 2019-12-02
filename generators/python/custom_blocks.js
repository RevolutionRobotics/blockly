'use strict';

goog.require('Blockly.Python');

// Generator block_terminate_program
Blockly.Python['block_terminate_program'] = function(block) {
  var code = 'Control.terminate_program()\n';
  return code;
};

// Generator block_terminate_all
Blockly.Python['block_terminate_all'] = function(block) {
  var code = 'Control.terminate_all()\n';
  return code;
};

// Generator block_wait
Blockly.Python['block_wait'] = function(block) {
  var value_wait = Blockly.Python.valueToCode(block, 'WAIT', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep(' + value_wait + ')\n';
  return code;
};

// Generator block_global_timer
Blockly.Python['block_global_timer'] = function(block) {
  var code = 'robot.time()';
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_repeat_forever
Blockly.Python['block_repeat_forever'] = function(block) {
  var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');
  var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

  var code = 'while True:\n' + branch;
  return code;
};

// Generator block_break
Blockly.Python['block_break'] = function(block) {
  var code = 'break\n';
  return code;
};

// Generator block_repeat_while
Blockly.Python['block_repeat_while'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);
  var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');

  var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

  var code = 'while ' + (value_condition || 'False') + ':\n' + branch;
  return code;
};

// Generator block_repeat_until
Blockly.Python['block_repeat_until'] = function(block) {
  var statements_statement = Blockly.Python.statementToCode(block, 'STATEMENT');
  var value_condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_ATOMIC);

  var branch = Blockly.Python.addLoopTrap(statements_statement, block.id) || Blockly.Python.PASS;

  branch += '  if ' + (value_condition || 'True') + ': break\n';

  var code = 'while True:\n' + branch;
  return code;
};

// Generator block_drive
Blockly.Python['block_drive'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
  var number_rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_ATOMIC);
  var unit_rotation = block.getFieldValue('UNIT_ROTATION_SELECTOR');
  var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
  var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

  var code =
    'robot.drive(' +
    'direction=' +
    dropdown_direction +
    ', ' +
    'rotation=' +
    number_rotation +
    ', ' +
    'unit_rotation=' +
    unit_rotation +
    ', ' +
    'speed=' +
    number_speed +
    ', ' +
    'unit_speed=' +
    unit_speed +
    ')\n';
  return code;
};

Blockly.Python['block_set_speed'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
  var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
  var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

  var code =
    'robot.drive(' +
    'direction=' +
    dropdown_direction +
    ', ' +
    'speed=' +
    number_speed +
    ', ' +
    'unit_speed=' +
    unit_speed +
    ')\n';
  return code;
};



Blockly.Python['block_turn'] = function(block) {
  var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
  var number_rotation = Blockly.Python.valueToCode(block, 'ROTATION', Blockly.Python.ORDER_ATOMIC);
  var unit_rotation = block.getFieldValue('UNIT_ROTATION_SELECTOR');
  var number_speed = Blockly.Python.valueToCode(block, 'SPEED_SLIDER', Blockly.Python.ORDER_ATOMIC);
  var unit_speed = block.getFieldValue('UNIT_SPEED_SELECTOR');

  var code =
    'robot.turn(' +
    'direction=' +
    dropdown_direction +
    ', ' +
    'rotation=' +
    number_rotation +
    ', ' +
    'unit_rotation=' +
    unit_rotation +
    ', ' +
    'speed=' +
    number_speed +
    ', ' +
    'unit_speed=Motor.UNIT_SPEED_RPM)\n';
  return code;
};

// Generator block_motor
Blockly.Python['block_motor'] = function(block) {
  var text_name = block.getFieldValue('NAME_INPUT');
  var direction = block.getFieldValue('DIRECTION_SELECTOR');
  var amount = Blockly.Python.valueToCode(block, 'AMOUNT', Blockly.Python.ORDER_ATOMIC);
  var unit_amount = block.getFieldValue('UNIT_AMOUNT_SELECTOR');
  var limit = Blockly.Python.valueToCode(block, 'LIMIT_SLIDER', Blockly.Python.ORDER_ATOMIC);
  var unit_limit = block.getFieldValue('UNIT_LIMIT_SELECTOR');

  var code =
    `robot.motors["${text_name}"].move(` +
    'direction=' +
    direction +
    ', ' +
    'amount=' +
    amount +
    ', ' +
    'unit_amount=' +
    unit_amount +
    ', ' +
    'limit=' +
    limit +
    ', ' +
    'unit_limit=' +
    unit_limit +
    ')\n';

  return code;
};

// Generator block_stop_motor
Blockly.Python['block_stop_motor'] = function(block) {
  var text_name = block.getFieldValue('NAME_INPUT');
  var dropdown_action = block.getFieldValue('STOP_ACTION_SELECTOR');

  var code = `robot.motors["${text_name}"].stop(` + 'action=' + dropdown_action + ')\n';
  return code;
};

// Generator block_stop_all_motors
Blockly.Python['block_stop_all_motors'] = function(block) {
  var dropdown_action = block.getFieldValue('STOP_ALL_ACTION_SELECTOR');

  var code = 'robot.stop_all_motors(action=' + dropdown_action + ')\n';
  return code;
};

// Generator block_ultrasonic_sensor
Blockly.Python['block_ultrasonic_sensor'] = function(block) {
  var text_name = block.getFieldValue('NAME_INPUT');

  var code = `robot.sensors["${text_name}"].read()`;

  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_bumper
Blockly.Python['block_bumper'] = function(block) {
  var text_name = block.getFieldValue('NAME_INPUT');

  var code = `robot.sensors["${text_name}"].read()`;
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_tilt
Blockly.Python['block_tilt'] = function(block) {
  var dropdown_tilt = block.getFieldValue('DIRECTION_TILT_SELECTOR');

  var code = 'Sensor.get_tilt_state(direction=' + dropdown_tilt + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_play_note
Blockly.Python['block_play_note'] = function(block) {
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
Blockly.Python['play_tune'] = function(block) {
  var dropdown_tune = block.getFieldValue('IN_SOUND');

  var code = "robot.play_tune('" + dropdown_tune + "')\n";
  return code;
};

// Generator block_stop_playback
Blockly.Python['block_stop_playback'] = function(block) {
  var code = 'Sound.stop_playback()\n';
  return code;
};

// Generator block_set_led
Blockly.Python['block_set_led'] = function(block) {
  var value_led = Blockly.Python.valueToCode(block, 'LED', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

  var code = 'robot.led.set(' + 'led_index=' + value_led + ', ' + 'color=' + value_color + ')\n';
  return code;
};

// Generator block_set_led
Blockly.Python['block_set_multiple_led'] = function(block) {
  var value_led = block.getFieldValue('LED_IDS');
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);

  var code = 'robot.led.set(' + 'led_index=[' + value_led + '], ' + 'color=' + value_color + ')\n';
  return code;
};

// Generator block_bumper
Blockly.Python['logic_and'] = function(block) {
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = value_left + ' and ' + value_right;
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_bumper
Blockly.Python['logic_or'] = function(block) {
  var value_left = Blockly.Python.valueToCode(block, 'LEFT', Blockly.Python.ORDER_ATOMIC);
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = value_left + ' or ' + value_right;
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_bumper
Blockly.Python['logic_not'] = function(block) {
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var code = 'not ' + value_right;
  return [code, Blockly.Python.ORDER_NONE];
};

// Generator block_bumper
Blockly.Python['math_trig2'] = function(block) {
  var value_right = Blockly.Python.valueToCode(block, 'RIGHT', Blockly.Python.ORDER_ATOMIC);
  var selected_option = block.getFieldValue('MATH_TRIG_SELECTOR');

  Blockly.Python.definitions_['import_math'] = 'import math';
  var code = 'math.' + selected_option + '(' + value_right + ')';

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['if_then_else'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '',
    branchCode,
    conditionCode;

  conditionCode = Blockly.Python.valueToCode(block, 'COND', Blockly.Python.ORDER_NONE) || 'False';

  branchCode = Blockly.Python.statementToCode(block, 'IN_IF') || Blockly.Python.PASS;
  code += (n == 0 ? 'if ' : 'elif ') + conditionCode + ':\n' + branchCode;

  if (block.getInput('IN_ELSE')) {
    branchCode = Blockly.Python.statementToCode(block, 'IN_ELSE') || Blockly.Python.PASS;
    code += 'else:\n' + branchCode;
  }
  return code;
};

Blockly.Python['if_then'] = function(block) {
  // If/elseif/else condition.
  var n = 0;
  var code = '',
    branchCode,
    conditionCode;

  conditionCode = Blockly.Python.valueToCode(block, 'COND', Blockly.Python.ORDER_NONE) || 'False';

  branchCode = Blockly.Python.statementToCode(block, 'IN_IF') || Blockly.Python.PASS;
  code += (n == 0 ? 'if ' : 'elif ') + conditionCode + ':\n' + branchCode;

  return code;
};

// Generator block_motor
Blockly.Python['spin_motor'] = function(block) {
  var text_name = block.getFieldValue('NAME_INPUT');
  var dropdown_direction = block.getFieldValue('DIRECTION_SELECTOR');
  var number_rotation = Blockly.Python.valueToCode(
    block,
    'ROTATION_SLIDER',
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_unit = block.getFieldValue('UNIT_SPEED_SELECTOR');

  var code =
    `robot.motors["${text_name}"].spin(` +
    'direction=' +
    dropdown_direction +
    ', ' +
    'rotation=' +
    number_rotation +
    ', ' +
    'unit_rotation=' +
    dropdown_unit +
    ')\n';

  return code;
};

Blockly.Python['controls_repeat_ext2'] = function(block) {
  // Repeat n times.
  if (block.getField('TIMES')) {
    // Internal number.
    var repeats = String(parseInt(block.getFieldValue('TIMES'), 10));
  } else {
    // External number.
    var repeats = Blockly.Python.valueToCode(block, 'TIMES', Blockly.Python.ORDER_NONE) || '0';
  }
  if (Blockly.isNumber(repeats)) {
    repeats = parseInt(repeats, 10);
  } else {
    repeats = 'int(' + repeats + ')';
  }
  var branch = Blockly.Python.statementToCode(block, 'DO');
  branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
  var loopVar = Blockly.Python.variableDB_.getDistinctName('count', Blockly.Variables.NAME_TYPE);
  var code = 'for ' + loopVar + ' in range(' + repeats + '):\n' + branch;
  return code;
};

Blockly.Python['math_arithmetic2'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    ADD: [' + ', Blockly.Python.ORDER_ADDITIVE],
    MINUS: [' - ', Blockly.Python.ORDER_ADDITIVE],
    MULTIPLY: [' * ', Blockly.Python.ORDER_MULTIPLICATIVE],
    DIVIDE: [' / ', Blockly.Python.ORDER_MULTIPLICATIVE],
    MODULO: [' % ', Blockly.Python.ORDER_MULTIPLICATIVE]
  };
  var tuple = OPERATORS[block.getFieldValue('OPERATOR_SELECTOR')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + operator + argument1;
  return [code, order];
  // In case of 'DIVIDE', division between integers returns different results
  // in Python 2 and 3. However, is not an issue since Blockly does not
  // guarantee identical results in all languages.  To do otherwise would
  // require every operator to be wrapped in a function call.  This would kill
  // legibility of the generated code.
};

Blockly.Python['math_pi'] = function(block) {
  Blockly.Python.definitions_['import_math'] = 'import math';
  return ['math.pi', Blockly.Python.ORDER_MEMBER];
};


Blockly.Python['math_round2'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OPERATOR_SELECTOR');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    var code = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_UNARY_SIGN) || '0';
    return ['-' + code, Blockly.Python.ORDER_UNARY_SIGN];
  }
  Blockly.Python.definitions_['import_math'] = 'import math';
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  } else {
    arg = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'math.fabs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'math.sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'math.log(' + arg + ')';
      break;
    case 'LOG10':
      code = 'math.log10(' + arg + ')';
      break;
    case 'EXP':
      code = 'math.exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'math.pow(10,' + arg + ')';
      break;
    case 'ROUND':
      code = 'round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'math.ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'math.floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'math.sin(' + arg + ' / 180.0 * math.pi)';
      break;
    case 'COS':
      code = 'math.cos(' + arg + ' / 180.0 * math.pi)';
      break;
    case 'TAN':
      code = 'math.tan(' + arg + ' / 180.0 * math.pi)';
      break;
  }
  if (code) {
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ASIN':
      code = 'math.asin(' + arg + ') / math.pi * 180';
      break;
    case 'ACOS':
      code = 'math.acos(' + arg + ') / math.pi * 180';
      break;
    case 'ATAN':
      code = 'math.atan(' + arg + ') / math.pi * 180';
      break;
    default:
      throw Error('Unknown math operator: ' + operator);
  }
  return [code, Blockly.Python.ORDER_MULTIPLICATIVE];
};

Blockly.Python['math_random_int2'] = function(block) {
  // Random integer between [X] and [Y].
  Blockly.Python.definitions_['import_random'] = 'import random';
  var argument0 = Blockly.Python.valueToCode(block, 'FROM', Blockly.Python.ORDER_NONE) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'TO', Blockly.Python.ORDER_NONE) || '0';
  var code = 'random.randint(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['colour_rgb2'] = function(block) {
  // Compose a color from RGB components expressed as percentages.
  var functionName = Blockly.Python.provideFunction_('color_rgb', [
    'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b):',
    '  r = round(min(100, max(0, r)) * 2.55)',
    '  g = round(min(100, max(0, g)) * 2.55)',
    '  b = round(min(100, max(0, b)) * 2.55)',
    "  return '#%02x%02x%02x' % (r, g, b)"
  ]);
  var r = Blockly.Python.valueToCode(block, 'RED', Blockly.Python.ORDER_NONE) || 0;
  var g = Blockly.Python.valueToCode(block, 'GREEN', Blockly.Python.ORDER_NONE) || 0;
  var b = Blockly.Python.valueToCode(block, 'BLUE', Blockly.Python.ORDER_NONE) || 0;
  var code = functionName + '(' + r + ', ' + g + ', ' + b + ')';
  return [code, Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python['logic_compare2'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    EQ: '==',
    NEQ: '!=',
    LT: '<',
    LTE: '<=',
    GT: '>',
    GTE: '>='
  };
  var operator = OPERATORS[block.getFieldValue('LOGIC_SELECTOR')];
  var order = Blockly.Python.ORDER_RELATIONAL;
  var argument0 = Blockly.Python.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Python.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

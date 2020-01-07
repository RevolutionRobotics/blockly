goog.require('Blockly.Blocks');
goog.require('Blockly');

// Block block_set_led
Blockly.Blocks['block_set_led'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldImage(CUSTOM_IMAGES.LIGHT, 15, 15, '*'),
      'LIGHT_IMAGE'
    );

    var ledValueInput = this.appendValueInput('LED')
      .setCheck('Number')
      .appendField('set LED');
    createShadowElement(this.workspace, 'math_number', ledValueInput, '1');

    var colorValueInput = this.appendValueInput('COLOR')
      .setCheck('Colour')
      .appendField('color');
    createShadowElement(this.workspace, 'colour_picker', colorValueInput);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('colour_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Block block_set_led
Blockly.Blocks['block_set_multiple_led'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.LIGHTS, 15, 15, '*'), 'LIGHT_IMAGE')
      .appendField('set LEDs')
      .appendField(new Blockly.FieldTextInput('1,2,3'), 'LED_IDS');

    var colorValueInput = this.appendValueInput('COLOR')
      .setCheck('Colour')
      .appendField('color');

    createShadowElement(this.workspace, 'colour_picker', colorValueInput);

    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('colour_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Block for composing a colour from RGB components.
Blockly.Blocks['colour_rgb2'] = {
  init: function () {
    this.appendDummyInput().appendField('color with red');

    var redValueInput = this.appendValueInput('RED').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', redValueInput, '0');

    this.appendDummyInput().appendField('green');
    var greenValueInput = this.appendValueInput('GREEN').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', greenValueInput, '0');

    this.appendDummyInput().appendField('blue');
    var blueValueInput = this.appendValueInput('BLUE').setCheck('Number');
    createShadowElement(this.workspace, 'math_number', blueValueInput, '0');

    this.setInputsInline(true);
    this.setOutput(true, 'Colour');
    this.setColour('#f8bc08');
    this.setTooltip('%{BKY_COLOUR_RGB_TOOLTIP}');
    this.setHelpUrl('%{BKY_COLOUR_RGB_HELPURL}');
  }
};

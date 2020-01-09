goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['block_ultrasonic_sensor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(CUSTOM_IMAGES.ULTRASONIC, 15, 15, '*'),
        'ULTRASONIC_IMAGE'
      )
      .appendField(new Blockly.FieldTextInput('distance'), 'NAME_INPUT');
    this.setOutput(true, 'Number');
    this.setStyle('colour_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['block_bumper'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.BUMPER, 15, 15, '*'), 'BUMPER_IMAGE')
      .appendField(new Blockly.FieldTextInput('bumper'), 'NAME_INPUT')
      .appendField('pressed');

    this.setOutput(true, 'Boolean');
    this.setStyle('colour_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
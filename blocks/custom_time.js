goog.require('Blockly.Blocks');
goog.require('Blockly');

// Block wait
Blockly.Blocks['block_wait'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.WAIT, 15, 15, '*'), 'WAIT_IMAGE')
        .appendField('wait');
  
      var limitValueInput = this.appendValueInput('WAIT').setCheck('Number');
      createShadowElement(this.workspace, 'math_number', limitValueInput, '1');
  
      this.appendDummyInput().appendField('sec');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle('time_blocks');
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
  // Block global timer
  Blockly.Blocks['block_global_timer'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(
          new Blockly.FieldImage(CUSTOM_IMAGES.GLOBAL_TIMER, 15, 15, '*'),
          'GLOBAL_TIMER_IMAGE'
        )
        .appendField('read global timer in sec');
      this.setOutput(true, 'Number');
      this.setStyle('time_blocks');
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['play_tune'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.TUNE, 15, 15, '*'), 'TUNE_IMAGE')
      .appendField('play tune')
      .appendField(
        new Blockly.FieldDropdown([
          ['🔉', 'siren'],
          ['😸', 'cat'],
          ['📯', 'car_horn'],
          ['🤖', 'robot'],
          ['📟', 'robot2'],
          ['❌', 'buzzer'],
          ['😱', 'oh_no'],
          ['🐎', 'yee_haw'],
          ['🏍', 'engine_revving'],
          ['🎉', 'ta_da'],
          ['🙊', 'uh_oh'],
          ['🔔', 'bell'],
          ['🐤', 'duck'],
          ['⏰', 'alarm_clock'],
          ['🐯', 'lion'],
          ['🐶', 'dog']
        ]),
        'IN_SOUND'
      );
    this.setColour('#f8bc08');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

// Block block_play_note
Blockly.Blocks['block_play_note'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(CUSTOM_IMAGES.TUNE, 15, 15, '*'), 'TUNE_IMAGE')
        .appendField('play note')
        .appendField('Octave:')
        .appendField(
          new Blockly.FieldDropdown([
            ['1st', 'Sound.OCTAVE_1'],
            ['2nd', 'Sound.OCTAVE_2'],
            ['3rd', 'Sound.OCTAVE_3'],
            ['4th', 'Sound.OCTAVE_4'],
            ['5th', 'Sound.OCTAVE_5'],
            ['6th', 'Sound.OCTAVE_6'],
            ['7th', 'Sound.OCTAVE_7'],
            ['8th', 'Sound.OCTAVE_8']
          ]),
          'OCTAVE_SELECTOR'
        )
        .appendField('Key:')
        .appendField(
          new Blockly.FieldDropdown([
            ['C', 'Sound.OPTION_C'],
            ['C# / Db', 'Sound.OPTION_CS'],
            ['D', 'Sound.OPTION_D'],
            ['D# / Eb', 'Sound.OPTION_DS'],
            ['E', 'Sound.OPTION_E'],
            ['F', 'Sound.OPTION_F'],
            ['F# / Gb', 'Sound.OPTION_FS'],
            ['G', 'Sound.OPTION_G'],
            ['G# / Ab', 'Sound.OPTION_GS'],
            ['A', 'Sound.OPTION_A'],
            ['A# / Bb', 'Sound.OPTION_AS'],
            ['B', 'Sound.OPTION_B']
          ]),
          'KEY_SELECTOR'
        )
        .appendField('Duration:');
      this.appendValueInput('DURATION').setCheck('Number');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
  // Block block_stop_playback
  Blockly.Blocks['block_stop_playback'] = {
    init: function () {
      this.appendDummyInput().appendField('Stop playback');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  
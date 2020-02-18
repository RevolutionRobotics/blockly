/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');

// Temporary holding object.
Blockly.Themes.Classic = {};

Blockly.Themes.Classic.defaultBlockStyles = {
  "colour_blocks":{
    "colourPrimary": "#f8bc08",
    "colourSecondary":"#d7ab07",
    "colourTertiary":"#c60a06"
  },
  "motor_blocks": {
    "colourPrimary": "#e60312",
    "colourSecondary":"#d50201",
    "colourTertiary":"#c40100"
  },
  "time_blocks": {
    "colourPrimary" : "#868a8c",
    "colourSecondary":"#75797b",
    "colourTertiary":"#64676a"
  },
  "light_blocks": {
    "colourPrimary": "#e51777",
    "colourSecondary":"#d40666",
    "colourTertiary":"#c30555"
  },
  "sound_blocks": {
    "colourPrimary" : "#5e2882",
    "colourSecondary":"#4d1771",
    "colourTertiary":"#3c0660"
  },
  "list_blocks": {
    "colourPrimary": "260"
  },
  "logic_blocks": {
    "colourPrimary": "#0264ff",
    "colourSecondary":"#0155cc",
    "colourTertiary":"#0144aa"
  },
  "loop_blocks": {
    "colourPrimary": "#dd7d3a",
    "colourSecondary":"#cc6c29",
    "colourTertiary":"#bb5b18"
  },
  "math_blocks": {
    "colourPrimary": "#4dc88f",
    "colourSecondary":"#3ca77e",
    "colourTertiary":"#2b976d"
  },
  "procedure_blocks": {
    "colourPrimary": "#6ab3c1",
    "colourSecondary":"#59a2b0",
    "colourTertiary":"#4891a9"
  },
  "text_blocks": {
    "colourPrimary": "#000000",
    "colourSecondary":"#000000",
    "colourTertiary":"#000000"
  },
  "variable_blocks": {
    "colourPrimary": "#cc7be6",
    "colourSecondary":"#bb6ad5",
    "colourTertiary":"#aa59c4"
  },
  "variable_dynamic_blocks":{
    "colourPrimary": "#cc7be6",
    "colourSecondary":"#bb6ad5",
    "colourTertiary":"#aa59c4"
  },
  "hat_blocks": {
    "colourPrimary": "330",
    "hat": "cap"
  }
};

Blockly.Themes.Classic.categoryStyles = {
  "colour_category": {
    "colour": "20"
  },
  "motor_category" : {
    "color": "#e60312"
  },
  "list_category": {
    "colour": "260"
  },
  "logic_category": {
    "colour": "#0264ff"
  },
  "loop_category": {
    "colour": "#dd7d3a"
  },
  "math_category": {
    "colour": "#4dc88f"
  },
  "procedure_category": {
    "colour": "#6ab3c1"
  },
  "time_category": {
    "colour": "#868a8c"
  },
  "text_category": {
    "colour": "160"
  },
  "variable_category": {
    "colour": "#cc7be6"
  },
  "variable_dynamic_category": {
    "colour": "310"
  }
};

Blockly.Themes.Classic =
    new Blockly.Theme('classic', Blockly.Themes.Classic.defaultBlockStyles,
        Blockly.Themes.Classic.categoryStyles);

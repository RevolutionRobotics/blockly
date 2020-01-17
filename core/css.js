/**
 * @license
 * Copyright 2013 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Inject Blockly's CSS synchronously.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * @name Blockly.Css
 * @namespace
 */
goog.provide('Blockly.Css');


/**
 * Has CSS already been injected?
 * @type {boolean}
 * @private
 */
Blockly.Css.injected_ = false;

/**
 * Add some CSS to the blob that will be injected later.  Allows optional
 * components such as fields and the toolbox to store separate CSS.
 * The provided array of CSS will be destroyed by this function.
 * @param {!Array.<string>} cssArray Array of CSS strings.
 */
Blockly.Css.register = function(cssArray) {
  if (Blockly.Css.injected_) {
    throw Error('CSS already injected');
  }
  // Concatenate cssArray onto Blockly.Css.CONTENT.
  Array.prototype.push.apply(Blockly.Css.CONTENT, cssArray);
  cssArray.length = 0;  // Garbage collect provided CSS content.
};

/**
 * Inject the CSS into the DOM.  This is preferable over using a regular CSS
 * file since:
 * a) It loads synchronously and doesn't force a redraw later.
 * b) It speeds up loading by not blocking on a separate HTTP transfer.
 * c) The CSS content may be made dynamic depending on init options.
 * @param {boolean} hasCss If false, don't inject CSS
 *     (providing CSS becomes the document's responsibility).
 * @param {string} pathToMedia Path from page to the Blockly media directory.
 */
Blockly.Css.inject = function(hasCss, pathToMedia) {
  // Only inject the CSS once.
  if (Blockly.Css.injected_) {
    return;
  }
  Blockly.Css.injected_ = true;
  var text = Blockly.Css.CONTENT.join('\n');
  Blockly.Css.CONTENT.length = 0;  // Garbage collect CSS content.
  if (!hasCss) {
    return;
  }
  // Strip off any trailing slash (either Unix or Windows).
  var mediaPath = pathToMedia.replace(/[\\/]$/, '');
  text = text.replace(/<<<PATH>>>/g, mediaPath);

  // Inject CSS tag at start of head.
  var cssNode = document.createElement('style');
  var cssTextNode = document.createTextNode(text);
  cssNode.appendChild(cssTextNode);
  document.head.insertBefore(cssNode, document.head.firstChild);
};

/**
 * Set the cursor to be displayed when over something draggable.
 * See See https://github.com/google/blockly/issues/981 for context.
 * @param {*} _cursor Enum.
 * @deprecated April 2017.
 */
Blockly.Css.setCursor = function(_cursor) {
  console.warn('Deprecated call to Blockly.Css.setCursor. ' +
      'See https://github.com/google/blockly/issues/981 for context');
};

/**
 * Array making up the CSS content for Blockly.
 */
Blockly.Css.CONTENT = [
  '@font-face { font-family: Jura; src: url(\'./media/Jura-Medium.ttf\'); } ',

  /* eslint-disable indent */
  '.blocklySvg {',
    'background-color: #fff;',
    'outline: none;',
    'overflow: hidden;',  /* IE overflows by default. */
    'position: absolute;',
    'display: block;',
  '}',

  '.blocklyWidgetDiv {',
    'display: none;',
    'position: absolute;',
    'z-index: 99999;', /* big value for bootstrap3 compatibility */
  '}',

  '.injectionDiv {',
    'height: 100%;',
    'position: relative;',
    'overflow: hidden;', /* So blocks in drag surface disappear at edges */
    'touch-action: none;',
  '}',

  '.blocklyNonSelectable {',
    'user-select: none;',
    '-ms-user-select: none;',
    '-webkit-user-select: none;',
  '}',

  '.blocklyWsDragSurface {',
    'display: none;',
    'position: absolute;',
    'top: 0;',
    'left: 0;',
  '}',
  /* Added as a separate rule with multiple classes to make it more specific
     than a bootstrap rule that selects svg:root. See issue #1275 for context.
  */
  '.blocklyWsDragSurface.blocklyOverflowVisible {',
    'overflow: visible;',
  '}',

  '.blocklyBlockDragSurface {',
    'display: none;',
    'position: absolute;',
    'top: 0;',
    'left: 0;',
    'right: 0;',
    'bottom: 0;',
    'overflow: visible !important;',
    'z-index: 50;', /* Display below toolbox, but above everything else. */
  '}',

  '.blocklyBlockCanvas.blocklyCanvasTransitioning,',
  '.blocklyBubbleCanvas.blocklyCanvasTransitioning {',
    'transition: transform .5s;',
  '}',

  '.blocklyTooltipDiv {',
    'background-color: #ffffc7;',
    'border: 1px solid #ddc;',
    'box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);',
    'color: #000;',
    'display: none;',
    'font-family: sans-serif;',
    'font-size: 9pt;',
    'opacity: .9;',
    'padding: 2px;',
    'position: absolute;',
    'z-index: 100000;', /* big value for bootstrap3 compatibility */
  '}',

  '.blocklyDropDownDiv {',
    'position: fixed;',
    'left: 0;',
    'top: 0;',
    'z-index: 1000;',
    'display: none;',
    'border: 1px solid;',
    'border-radius: 2px;',
    'padding: 4px;',
    'box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);',
  '}',

  '.blocklyDropDownDiv.focused {',
    'box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);',
  '}',

  '.blocklyDropDownContent {',
    'max-height: 300px;', // @todo: spec for maximum height.
    'overflow: auto;',
    'overflow-x: hidden;',
  '}',

  '.blocklyDropDownArrow {',
    'position: absolute;',
    'left: 0;',
    'top: 0;',
    'width: 16px;',
    'height: 16px;',
    'z-index: -1;',
    'background-color: inherit;',
    'border-color: inherit;',
  '}',

  '.blocklyDropDownButton {',
    'display: inline-block;',
    'float: left;',
    'padding: 0;',
    'margin: 4px;',
    'border-radius: 4px;',
    'outline: none;',
    'border: 1px solid;',
    'transition: box-shadow .1s;',
    'cursor: pointer;',
  '}',

  '.arrowTop {',
    'border-top: 1px solid;',
    'border-left: 1px solid;',
    'border-top-left-radius: 4px;',
    'border-color: inherit;',
  '}',

  '.arrowBottom {',
    'border-bottom: 1px solid;',
    'border-right: 1px solid;',
    'border-bottom-right-radius: 4px;',
    'border-color: inherit;',
  '}',

  '.blocklyResizeSE {',
    'cursor: se-resize;',
    'fill: #aaa;',
  '}',

  '.blocklyResizeSW {',
    'cursor: sw-resize;',
    'fill: #aaa;',
  '}',

  '.blocklyResizeLine {',
    'stroke: #515A5A;',
    'stroke-width: 1;',
  '}',

  '.blocklyHighlightedConnectionPath {',
    'fill: none;',
    'stroke: #fc3;',
    'stroke-width: 4px;',
  '}',

  '.blocklyPathLight {',
    'fill: none;',
    'stroke-linecap: round;',
    'stroke-width: 1;',
  '}',

  '.blocklySelected>.blocklyPath {',
    'stroke: #fc3;',
    'stroke-width: 3px;',
  '}',

  '.blocklySelected>.blocklyPathLight {',
    'display: none;',
  '}',

  '.blocklyDraggable {',
    /* backup for browsers (e.g. IE11) that don't support grab */
    'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
    'cursor: grab;',
    'cursor: -webkit-grab;',
  '}',

  '.blocklyDragging {',
    /* backup for browsers (e.g. IE11) that don't support grabbing */
    'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
    'cursor: grabbing;',
    'cursor: -webkit-grabbing;',
  '}',
  /* Changes cursor on mouse down. Not effective in Firefox because of
    https://bugzilla.mozilla.org/show_bug.cgi?id=771241 */
  '.blocklyDraggable:active {',
    /* backup for browsers (e.g. IE11) that don't support grabbing */
    'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
    'cursor: grabbing;',
    'cursor: -webkit-grabbing;',
  '}',
  /* Change the cursor on the whole drag surface in case the mouse gets
     ahead of block during a drag. This way the cursor is still a closed hand.
   */
  '.blocklyBlockDragSurface .blocklyDraggable {',
    /* backup for browsers (e.g. IE11) that don't support grabbing */
    'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
    'cursor: grabbing;',
    'cursor: -webkit-grabbing;',
  '}',

  '.blocklyDragging.blocklyDraggingDelete {',
    'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  '}',

  '.blocklyDragging>.blocklyPath,',
  '.blocklyDragging>.blocklyPathLight {',
    'fill-opacity: .8;',
    'stroke-opacity: .8;',
  '}',

  '.blocklyDragging>.blocklyPathDark {',
    'display: none;',
  '}',

  '.blocklyDisabled>.blocklyPath {',
    'fill-opacity: .5;',
    'stroke-opacity: .5;',
  '}',

  '.blocklyDisabled>.blocklyPathLight,',
  '.blocklyDisabled>.blocklyPathDark {',
    'display: none;',
  '}',

  '.blocklyInsertionMarker>.blocklyPath,',
  '.blocklyInsertionMarker>.blocklyPathLight,',
  '.blocklyInsertionMarker>.blocklyPathDark {',
    'fill-opacity: .2;',
    'stroke: none',
  '}',

  '.blocklyReplaceable .blocklyPath {',
    'fill-opacity: .5;',
  '}',

  '.blocklyReplaceable .blocklyPathLight,',
  '.blocklyReplaceable .blocklyPathDark {',
    'display: none;',
  '}',

  '.blocklyText {',
    'cursor: default;',
    'fill: #fff;',
    'font-family: Jura;',
    'font-size: 11pt;',
  '}',

  '.blocklyMultilineText {',
    'font-family: monospace;',
  '}',

  '.blocklyNonEditableText>text {',
    'pointer-events: none;',
  '}',

  '.blocklyNonEditableText>rect,',
  '.blocklyEditableText>rect {',
    'fill: #fff;',
    'fill-opacity: .6;',
  '}',

  '.blocklyNonEditableText>text,',
  '.blocklyEditableText>text {',
    'fill: #000;',
  '}',

  '.blocklyEditableText:hover>rect {',
    'stroke: #fff;',
    'stroke-width: 2;',
  '}',

  '.blocklyBubbleText {',
    'fill: #000;',
  '}',

  '.blocklyFlyout {',
    'position: absolute;',
    'z-index: 20;',
  '}',
  '.blocklyFlyoutButton {',
    'fill: #cc7be6;',
    'cursor: default;',
  '}',

  /*
    Don't allow users to select text.  It gets annoying when trying to
    drag a block and selected text moves instead.
  */
  '.blocklySvg text, .blocklyBlockDragSurface text {',
    'user-select: none;',
    '-ms-user-select: none;',
    '-webkit-user-select: none;',
    'cursor: inherit;',
  '}',

  '.blocklyHidden {',
    'display: none;',
  '}',

  '.blocklyFieldDropdown:not(.blocklyHidden) {',
    'display: block;',
  '}',

  '.blocklyIconGroup {',
    'cursor: default;',
  '}',

  '.blocklyIconGroup:not(:hover),',
  '.blocklyIconGroupReadonly {',
    'opacity: .6;',
  '}',

  '.blocklyIconShape {',
    'fill: #00f;',
    'stroke: #fff;',
    'stroke-width: 1px;',
  '}',

  '.blocklyIconSymbol {',
    'fill: #fff;',
  '}',

  '.blocklyMinimalBody {',
    'margin: 0;',
    'padding: 0;',
  '}',

  '.blocklyCommentForeignObject {',
    'position: relative;',
    'z-index: 0;',
  '}',

  '.blocklyCommentRect {',
    'fill: #E7DE8E;',
    'stroke: #bcA903;',
    'stroke-width: 1px',
  '}',

  '.blocklyCommentTarget {',
    'fill: transparent;',
    'stroke: #bcA903;',
  '}',

  '.blocklyCommentTargetFocused {',
    'fill: none;',
  '}',

  '.blocklyCommentHandleTarget {',
    'fill: none;',
  '}',

  '.blocklyCommentHandleTargetFocused {',
    'fill: transparent;',
  '}',

  '.blocklyFocused>.blocklyCommentRect {',
    'fill: #B9B272;',
    'stroke: #B9B272;',
  '}',

  '.blocklySelected>.blocklyCommentTarget {',
    'stroke: #fc3;',
    'stroke-width: 3px;',
  '}',


  '.blocklyCommentTextarea {',
    'background-color: #fef49c;',
    'border: 0;',
    'outline: 0;',
    'margin: 0;',
    'padding: 3px;',
    'resize: none;',
    'display: block;',
    'overflow: hidden;',
  '}',

  '.blocklyCommentDeleteIcon {',
    'cursor: pointer;',
    'fill: #000;',
    'display: none',
  '}',

  '.blocklySelected > .blocklyCommentDeleteIcon {',
    'display: block',
  '}',

  '.blocklyDeleteIconShape {',
    'fill: #000;',
    'stroke: #000;',
    'stroke-width: 1px;',
  '}',

  '.blocklyDeleteIconShape.blocklyDeleteIconHighlighted {',
    'stroke: #fc3;',
  '}',

  '.blocklyHtmlInput {',
    'border: none;',
    'border-radius: 4px;',
    'font-family: sans-serif;',
    'height: 100%;',
    'margin: 0;',
    'outline: none;',
    'padding: 0;',
    'width: 100%;',
    'text-align: center;',
  '}',

  /* Edge and IE introduce a close icon when the input value is longer than a
     certain length. This affects our sizing calculations of the text input.
     Hiding the close icon to avoid that. */
  '.blocklyHtmlInput::-ms-clear {',
    'display: none;',
  '}',

  '.blocklyMainBackground {',
    'fill: unset !important;',
    'stroke-width: 0;',
    'stroke: #c6c6c6;',  /* Equates to #ddd due to border being off-pixel. */
  '}',

  '.blocklyMutatorBackground {',
    'fill: #fff;',
    'stroke: #ddd;',
    'stroke-width: 1;',
  '}',

  '.blocklyFlyoutBackground {',
    'fill: #1D1D1D;',
    'fill-opacity: .92;',
  '}',

  '.blocklyMainWorkspaceScrollbar {',
    'z-index: 20;',
  '}',

  '.blocklyFlyoutScrollbar {',
    'z-index: 30;',
  '}',

  '.blocklyScrollbarHorizontal, .blocklyScrollbarVertical {',
    'position: absolute;',
    'outline: none;',
  '}',

  '.blocklyScrollbarBackground {',
    'opacity: 0;',
  '}',

  '.blocklyScrollbarHandle {',
    'fill: #ccc;',
  '}',

  '.toolboxScrollbarHandle {',
    'fill: #1D1D1D;',
    'fill-opacity: 0;',
  '}',

  '.blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,',
  '.blocklyScrollbarHandle:hover {',
    'fill: #bbb;',
  '}',

  /* Darken flyout scrollbars due to being on a grey background. */
  /* By contrast, workspace scrollbars are on a white background. */
  '.blocklyFlyout .blocklyScrollbarHandle {',
    'fill: #bbb;',
  '}',

  '.blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,',
  '.blocklyFlyout .blocklyScrollbarHandle:hover {',
    'fill: #aaa;',
  '}',

  '.blocklyInvalidInput {',
    'background: #faa;',
  '}',

  '.blocklyContextMenu {',
    'border-radius: 4px;',
    'max-height: 100%;',
  '}',

  '.blocklyDropdownMenu {',
    'border-radius: 2px;',
    'padding: 0 !important;',
  '}',

  '.blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem,',
  '.blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem {',
    /* 28px on the left for icon or checkbox. */
    'padding-left: 28px;',
  '}',

  /* BiDi override for the resting state. */
  /* #noflip */
  '.blocklyWidgetDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl,',
  '.blocklyDropDownDiv .blocklyDropdownMenu .goog-menuitem.goog-menuitem-rtl {',
     /* Flip left/right padding for BiDi. */
    'padding-left: 5px;',
    'padding-right: 28px;',
  '}',
    
  /* Category tree in Toolbox. */
  '.blocklyToolboxDiv {',
    'background-color: #000;',
    'overflow-x: visible;',
    'overflow-y: auto;',
    'position: absolute;',
    'user-select: none;',
    '-moz-user-select: none;',
    '-ms-user-select: none;',
    '-webkit-user-select: none;',
    'z-index: 70;', /* so blocks go under toolbox when dragging */
    '-webkit-tap-highlight-color: transparent;', /* issue #1345 */
  '}',

  '.blocklyVerticalCursor {',
    'stroke-width: 3px;',
    'fill: rgba(255,255,255,.5);',
  '}',

  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {',
    'background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;',
  '}',

  '.blocklyTreeRow {',
    'position: relative;',
    'height: 40px;',
    'line-height: 39px;',
    'margin-bottom: 4px;',
    'padding-right: 8px;',
    'white-space: nowrap;',
    'color: #fff;',
    'background-color: #282828;',
  '}',

  '.blocklyTreeRow:before {',
    'position: absolute;',
    'height: 0px;',
    'width: 0;',
    'content: " ";',
    'border: 20px solid black;',
    'border-color: #00000000 transparent black black;',
    'border-width: 10px 0px 0px 10px;',
    'left: -8px;',
    'top: 30px;',
  '}',

  '.blocklyTreeRow:after {',
    'position: absolute;',
    'height: 0px;',
    'width: 0;',
    'content: " ";',
    'border: 20px solid black;',
    'border-color: transparent transparent transparent black;',
    'border-width: 0px 0px 10px 10px;',
    'left: -8px;',
    'top: 0px;',
  '}',

  '.blocklyHorizontalTree {',
    'float: left;',
    'margin: 1px 5px 8px 0;',
  '}',

  '.blocklyHorizontalTreeRtl {',
    'float: right;',
    'margin: 1px 0 8px 5px;',
  '}',

  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
    'margin-left: 8px;',
  '}',

 // '.blocklyTreeRow:not(.blocklyTreeSelected):hover {',
 //   'background-color: #fff;',
 // '}',

  '.blocklyTreeSeparator {',
    'border-bottom: solid #e5e5e5 1px;',
    'height: 0;',
    'margin: 5px 0;',
  '}',

  '.blocklyTreeSeparatorHorizontal {',
    'border-right: solid #e5e5e5 1px;',
    'width: 0;',
    'padding: 5px 0;',
    'margin: 0 5px;',
  '}',


  '.blocklyTreeIcon {',
    'background-image: url(<<<PATH>>>/sprites.png);',
    'height: 16px;',
    'vertical-align: middle;',
    'width: 16px;',
  '}',

  '.blocklyTreeIconClosedLtr {',
    'background-position: -32px -1px;',
  '}',

  '.blocklyTreeIconClosedRtl {',
    'background-position: 0 -1px;',
  '}',

  '.blocklyTreeIconOpen {',
    'background-position: -16px -1px;',
  '}',

  '.blocklyTreeSelected>.blocklyTreeIconClosedLtr {',
    'background-position: -32px -17px;',
  '}',

  '.blocklyTreeSelected>.blocklyTreeIconClosedRtl {',
    'background-position: 0 -17px;',
  '}',

  '.blocklyTreeSelected>.blocklyTreeIconOpen {',
    'background-position: -16px -17px;',
  '}',

  '.blocklyTreeIconNone,',
  '.blocklyTreeSelected>.blocklyTreeIconNone {',
    'background-position: -48px -1px;',
  '}',

  '.blocklyTreeLabel {',
    'position: relative;',
    'cursor: default;',
    'font-family: sans-serif;',
    'font-size: 16px;',
    'padding: 0 3px 0 18px;',
    'vertical-align: middle;',
  '}',

  /* Icons */
  '.blocklyTreeLabel:before {',
    'position: absolute;',
    'width: 20px;',
    'height: 20px;',
    'content: "";',
    'top: -1px;',
    'left: -8px;',
    'background-size: contain;',
    'background-repeat: no-repeat;',
    'background-position: center;',
  '}',

  '.motorIcon:before {',
    'background-image: url("./media/moves.svg");',
  '}',

  '.sensorIcon:before {',
    'background-image: url("./media/sensors.svg");',
  '}',

  '.loopsIcon:before {',
  'background-image: url("./media/loop.svg");',
  '}',

  '.logicIcon:before {',
  'background-image: url("./media/logic.svg");',
  '}',

  '.mathIcon:before {',
  'background-image: url("./media/math.svg");',
  '}',

  '.timeIcon:before {',
  'background-image: url("./media/time.svg");',
  '}',

  '.variablesIcon:before {',
  'background-image: url("./media/variables.svg");',
  '}',

  '.functionsIcon:before {',
  'background-image: url("./media/functions.svg");',
  '}',

  /* End of Icons */

  '.blocklyToolboxDelete .blocklyTreeLabel {',
    'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  '}',

  '.blocklyTreeSelected .blocklyTreeLabel {',
    'color: #fff;',
  '}',

  /* Colour Picker Field */
  '.blocklyColourTable {',
    'border-collapse: collapse;',
  '}',

  '.blocklyColourTable>tr>td {',
    'border: 1px solid #666;',
    'padding: 0;',
  '}',

  '.blocklyColourTable>tr>td>div {',
    'border: 1px solid #666;',
    'height: 13px;',
    'width: 15px;',
  '}',

  '.blocklyColourTable>tr>td>div:hover {',
    'border: 1px solid #fff;',
  '}',

  '.blocklyColourSelected, .blocklyColourSelected:hover {',
    'border: 1px solid #000 !important;',
  '}',

  /* Copied from: goog/css/menu.css */
  /*
   * Copyright 2009 The Closure Library Authors. All Rights Reserved.
   *
   * Use of this source code is governed by the Apache License, Version 2.0.
   * See the COPYING file for details.
   */

  /**
   * Standard styling for menus created by goog.ui.MenuRenderer.
   *
   * @author attila@google.com (Attila Bodis)
   */

  '.blocklyWidgetDiv .goog-menu {',
    'background: #fff;',
    'border-color: transparent;',
    'border-style: solid;',
    'border-width: 1px;',
    'cursor: default;',
    'font: normal 13px Arial, sans-serif;',
    'margin: 0;',
    'outline: none;',
    'padding: 4px 0;',
    'position: absolute;',
    'overflow-y: auto;',
    'overflow-x: hidden;',
    'max-height: 100%;',
    'z-index: 20000;',  /* Arbitrary, but some apps depend on it... */
    'box-shadow: 0px 0px 3px 1px rgba(0,0,0,.3);',
  '}',

  '.blocklyWidgetDiv .goog-menu.focused {',
    'box-shadow: 0px 0px 6px 1px rgba(0,0,0,.3);',
  '}',

  '.blocklyDropDownDiv .goog-menu {',
    'cursor: default;',
    'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
    'outline: none;',
    'z-index: 20000;',  /* Arbitrary, but some apps depend on it... */
  '}',

  /* Copied from: goog/css/menuitem.css */
  /*
   * Copyright 2009 The Closure Library Authors. All Rights Reserved.
   *
   * Use of this source code is governed by the Apache License, Version 2.0.
   * See the COPYING file for details.
   */

  /**
   * Standard styling for menus created by goog.ui.MenuItemRenderer.
   *
   * @author attila@google.com (Attila Bodis)
   */

  /**
   * State: resting.
   *
   * NOTE(mleibman,chrishenry):
   * The RTL support in Closure is provided via two mechanisms -- "rtl" CSS
   * classes and BiDi flipping done by the CSS compiler.  Closure supports RTL
   * with or without the use of the CSS compiler.  In order for them not to
   * conflict with each other, the "rtl" CSS classes need to have the #noflip
   * annotation.  The non-rtl counterparts should ideally have them as well,
   * but, since .goog-menuitem existed without .goog-menuitem-rtl for so long
   * before being added, there is a risk of people having templates where they
   * are not rendering the .goog-menuitem-rtl class when in RTL and instead
   * rely solely on the BiDi flipping by the CSS compiler.  That's why we're
   * not adding the #noflip to .goog-menuitem.
   */
  '.blocklyWidgetDiv .goog-menuitem,',
  '.blocklyDropDownDiv .goog-menuitem {',
    'color: #000;',
    'font: normal 13px Arial, sans-serif;',
    'list-style: none;',
    'margin: 0;',
     /* 7em on the right for shortcut. */
    'min-width: 7em;',
    'border: none;',
    'padding: 6px 15px;',
    'white-space: nowrap;',
    'cursor: pointer;',
  '}',

  /* If a menu doesn't have checkable items or items with icons,
   * remove padding.
   */
  '.blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,',
  '.blocklyWidgetDiv .goog-menu-noicon .goog-menuitem,',
  '.blocklyDropDownDiv .goog-menu-nocheckbox .goog-menuitem,',
  '.blocklyDropDownDiv .goog-menu-noicon .goog-menuitem {',
    'padding-left: 12px;',
  '}',

  '.blocklyWidgetDiv .goog-menuitem-content,',
  '.blocklyDropDownDiv .goog-menuitem-content {',
    'font: normal 13px Arial, sans-serif;',
  '}',

  '.blocklyWidgetDiv .goog-menuitem-content {',
    'color: #000;',
  '}',

  '.blocklyDropDownDiv .goog-menuitem-content {',
    'color: #000;',
  '}',

  /* State: disabled. */
  '.blocklyWidgetDiv .goog-menuitem-disabled,',
  '.blocklyDropDownDiv .goog-menuitem-disabled {',
    'cursor: inherit;',
  '}',

  '.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content,',
  '.blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-content {',
    'color: #ccc !important;',
  '}',

  '.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-menuitem-disabled .goog-menuitem-icon {',
    'opacity: .3;',
    'filter: alpha(opacity=30);',
  '}',

  /* State: hover. */
  '.blocklyWidgetDiv .goog-menuitem-highlight ,',
  '.blocklyDropDownDiv .goog-menuitem-highlight {',
    'background-color: rgba(0,0,0,.1);',
  '}',

  /* State: selected/checked. */
  '.blocklyWidgetDiv .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-menuitem-checkbox,',
  '.blocklyDropDownDiv .goog-menuitem-icon {',
    'background-repeat: no-repeat;',
    'height: 16px;',
    'left: 6px;',
    'position: absolute;',
    'right: auto;',
    'vertical-align: middle;',
    'width: 16px;',
  '}',

  /* BiDi override for the selected/checked state. */
  /* #noflip */
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {',
     /* Flip left/right positioning. */
    'left: auto;',
    'right: 6px;',
  '}',

  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-checkbox,',
  '.blocklyDropDownDiv .goog-option-selected .goog-menuitem-icon {',
    'position: static;', /* Scroll with the menu. */
    'float: left;',
    'margin-left: -24px;',
  '}',

  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,',
  '.blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon,',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-checkbox,',
  '.blocklyDropDownDiv .goog-menuitem-rtl .goog-menuitem-icon {',
    'float: right;',
    'margin-right: -24px;',
  '}'
  /* eslint-enable indent */
];

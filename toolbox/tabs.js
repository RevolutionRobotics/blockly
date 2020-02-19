var changeToolbox = function(toolboxId) {
  workspace.updateToolbox(toolboxes[toolboxId].xml);
  setCategoryIcons(toolboxes[toolboxId].icons);
};

var setCategoryIcons = function(icons) {
  var treeRoot = document.getElementsByClassName("tabs-level")[0].nextSibling.firstChild;
  var categoryList = treeRoot.getElementsByTagName('div')[1];
  var categoryElements = Array.prototype.slice.call(categoryList
    .getElementsByTagName('div'))
    .filter(function(v) {
      return v.parentElement === categoryList;
    });

  for (var i = 0; i < categoryElements.length; i++) {
    categoryElements[i].getElementsByTagName('div')[0]
      .getElementsByTagName('span')[1]
      .classList
      .add(icons[i]);
  }
};

var insertTabs = function(tabs) {
  var toolbox = document.getElementsByClassName('blocklyToolboxDiv')[0];
  toolbox.insertBefore(tabs, document.getElementById(':0'));
};

var tabClicked = function(label) {
  var activeClass = 'tab-active';
  var activeElements = document.getElementsByClassName(activeClass);

  Array.prototype.forEach.call(activeElements, function(element) {
    element.classList.remove(activeClass);
  });

  document.getElementById('tab-' + label).classList.add(activeClass);

  var id = 'level' + label;
  changeToolbox(id);

  return false;
};

var renderItems = function(tabs) {
  for (var i = 0; i < Object.keys(toolboxes).length - 1; i++) {
    var label = i + 1;

    var tab = document.createElement('li');
    tab.id = 'tab-' + label;

    var anchor = document.createElement('a');
    anchor.setAttribute('href', '');
    anchor.setAttribute('onclick', 'return tabClicked(' + label + ')');
    
    var tabImage = document.createElement('img');
    if (i == 0) {
      tabImage.setAttribute('src', "media/paper-plane.svg");
    } else if (i == 1) {
      tabImage.setAttribute('src', "media/plane.svg");
    } else if (i == 2) {
      tabImage.setAttribute('src', "media/rocket.svg");
    }
    anchor.appendChild(tabImage);

    tab.appendChild(anchor);
    tabs.appendChild(tab);
  }
};

var renderTabs = function(initialLevel) {
  var tabs = document.createElement('ul');
  tabs.className = 'tabs-level';

  renderItems(tabs);
  insertTabs(tabs);
  tabClicked(initialLevel);
};

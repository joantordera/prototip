(function(window, undefined) {
  var dictionary = {
    "75a24b04-a447-41dd-842a-5e69cc7eb64a": "Trains",
    "42f2616a-e972-426b-9517-73602aa73311": "Data",
    "36eb48ac-8f97-4946-9748-32b1c26b905f": "COVID",
    "90ff717a-abe3-4498-bc55-e3e6c1084c3e": "viewlist cerques",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
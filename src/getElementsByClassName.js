// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, scope) {
  // your code here
  var nodes = scope ? scope.childNodes : document.body.childNodes, ans = [];
  for (var i = 0; i < nodes.length; i++) {
  	if (nodes[i].classList !== undefined && nodes[i].classList.contains(className)) {
  		ans.push(nodes[i]);
  	} else if (nodes[i].childNodes.length > 0) {
  		ans.push(getElementsByClassName(className, nodes[i]));
  	}
  }
  return _.flatten(ans);
};

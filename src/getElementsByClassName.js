// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //document.body, element.childNodes, element.classList
  //variable for an array to return the className
  var nodes = [];
  //set default value for node
  node = node || document.body;

  //create a condition to check for classNames
  for (var i = 0; i < node.classList.length; i++) {
    if (node.classList === className) {
  //if it exists push to array
      nodes.push(node);
    }
  }  

  
  //if the parent has children
  //then iterate through children
  //then return to top and run the check for className

  //return array
};

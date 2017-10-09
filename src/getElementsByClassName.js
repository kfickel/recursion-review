// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  //include document.body, element.childNodes, element.classList
  //variable for an array to return the className
  var nodes = [];
  //set default value for node
  node = node || document.body;

  //create a condition to check for classNames
  if (node.classList) {
    //iterate through classNames
    for (var i = 0; i < node.classList.length; i++) {
      if (node.classList[i] === className) {
      //if it exists push to array
        nodes.push(node);
      }
    }  
  }


  
  //if the parent has children
  if (node.childNodes) {
    //then iterate through children
    for (var j = 0; j < node.childNodes.length; j++) {
       //then return to top and run the check for className
      nodes = nodes.concat(getElementsByClassName(className, node.childNodes[j]));
    }
  }

  //return array
  return nodes;
};


class Tree {
    constructor() {
      this.root = new TreeNode(null);
    }

    addNewRoute(rootOfRoute, rootNode = this.root) {
        if(rootOfRoute === undefined) return;
        
        if(!rootNode.contains(rootOfRoute.value)) {
            rootNode.descendents.push(rootOfRoute)
        }
        else{
          rootOfRoute.descendents.forEach((item) => {
            var child = rootNode.getDescendentsFromValue(item.value)
            if(child !== null)
              this.addNewRoute(item, child)
          })
        }
    }
  }



  class TreeNode {
    constructor(value) {
      this.value = value;
      this.descendents = [];
    }

    contains(searchFor) {
        var response = false;

        this.descendents.forEach(function(item) {
            response = response || item.value === searchFor;
        })

        return response;
    }

    getDescendentsFromValue(value) {
      var response = null;

      this.descendents.forEach(function(item) {
        if (item.value === value) {
          response = item;
        }
      })

      return response;
    }
  }

 export {Tree, TreeNode}
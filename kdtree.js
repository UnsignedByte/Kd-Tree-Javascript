/**
 * @Author: Edmund Lam <edl>
 * @Date:   18:50:17, 27-Feb-2018
 * @Filename: kdtree.js
 * @Last modified by:   edl
 * @Last modified time: 17:42:49, 01-Mar-2018
 */

function kdTree(pointList, thisPos){
  this.topNode = makeTree(pointList, 0, null);

}

//builds the actual tree
kdTree.prototype.makeTree = function(pts, depth, parent){
  var currDimesion = depth % 2;
  var median, node;

  if (pts.length === 0){
    return null;
  }else if (pts.length === 1){
    return new Node(pts[0], parent, currDimension)
  }

  if (currDimension === 0){
    pts.sort(function (a,b){
      return a.x-b.x;
    })

  }else{
    pts.sort(function (a,b){
      return a.x-b.x;
    })
  }

  median = Math.floor(points.length / 2);
  node = new Node(points[median], parent, currDimension);
  node.l = makeTree(points.slice(0, median), depth + 1, node);
  node.r = makeTree(points.slice(median + 1), depth + 1, node);

  return node;
}

function distance(pt){
  return Math.pow(thisPos.x-pt.x, 2)+Math.pow(thisPos.y-pt.y, 2);
}

function Node(obj, parent, dim){
  this.obj = obj;

  //left and right children
  this.l = null;
  this.r = null;

  this.parent = parent;
  this.dimension = dim;
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isMirror(leftSub: TreeNode | null, rightSub: TreeNode | null): boolean {
    if (leftSub === null && rightSub === null) {
        return true;
    }
     
    if (leftSub === null || rightSub === null || leftSub.val !== rightSub.val) {
        return false;
    }

    return isMirror(leftSub.left, rightSub.right) && 
           isMirror(leftSub.right, rightSub.left);
}

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;

    return isMirror(root.left, root.right)
}
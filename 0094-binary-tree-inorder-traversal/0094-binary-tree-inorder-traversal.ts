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

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    let finalNode = [];
    const leftRoot = inorderTraversal(root.left);

    console.log(root.val);

    const rightRoot = inorderTraversal(root.right);
    
    finalNode = [...leftRoot, root.val, ...rightRoot]

    console.log(finalNode)
    return finalNode;
};
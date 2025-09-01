/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    let mergedListNode = new ListNode(0);
    let currentList = mergedListNode;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            currentList.next = list1;
            list1 = list1.next;
        }
        else {
            currentList.next = list2;
            list2 = list2.next;
        }
        currentList = currentList.next;
    }

    if (list1 !== null) {
        currentList.next = list1;
    }
    else if (list2 !== null) {
        currentList.next = list2;
    }

    // const newList = mergedList.sort();
    // return newList;
    return mergedListNode.next
};
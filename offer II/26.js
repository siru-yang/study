/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    let array = []
    let newHead
    while(head){
        array.push(head)
        head = head.next
    }
    newHead = array.shift()
    let pointer = newHead
    while(array.length > 0){
        pointer.next = array.pop()
        pointer = pointer.next
        if(array.length > 0){
            pointer.next = array.unshift()
            pointer = pointer.next
        }
    }
    return newHead
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let stack1 = []
    let stack2 = []
    let result = []
    let plus = 0
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }
    while (stack1.length > 0 && stack2.length > 0) {
        let added = stack1.pop() + stack1.pop() + plus
        result.push(added % 10)
        plus = Math.floor(added / 10)
    }
    while (stack1.length > 0) {
        let added = stack1.pop() + plus
        result.push(added % 10)
        plus = Math.floor(added / 10)
    }
    while (stack2.length > 0) {
        let added = stack2.pop() + plus
        result.push(added % 10)
        plus = Math.floor(added / 10)
    }
    for (let i = 0; i < result.length; i++) {
        if (i == 0) {
            result[0] = new ListNode(result[0], null)
        } else {
            result[i] = new ListNode(result[i], result[i - 1])
        }
    }
    return result[result.length - 1]
};
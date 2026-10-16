/**
 * LoopGuard
 * ----------
 * Detects whether a linked node structure contains
 * a circular reference using Floyd's Tortoise and Hare algorithm.
 */

/**
 * Represents a node in a linked structure.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Detects whether a linked structure contains a cycle.
 *
 * @param {Node|null} head
 * @returns {boolean}
 */
function detectCircularReference(head) {
    if (!head || !head.next) {
        return false;
    }

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) {
            return true;
        }
    }

    return false;
}

/* -------------------------------
   Example Usage
-------------------------------- */

const home = new Node("Home");
const products = new Node("Products");
const checkout = new Node("Checkout");
const payment = new Node("Payment");

home.next = products;
products.next = checkout;
checkout.next = payment;

// Create a circular reference
payment.next = products;

console.log("Circular Reference:", detectCircularReference(home));

#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *reverseList(struct ListNode *head)
{

    struct ListNode *current = head;
    struct ListNode *next = NULL;
    struct ListNode *prev = NULL;

    while (current != NULL)
    {

        // first store the next element address in next pointer
        next = current->next;
        // now break the link current->next  and point towar previous node
        current->next = prev;
        // now move the current pointer and prev pointer but prev first

        prev = current;
        current = next;
    }

    head = prev;
    return head;
}

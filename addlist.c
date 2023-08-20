#include <stdio.h>
#include <stdlib.h>

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode
{
    int val;
    struct ListNode *next;
};

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
    struct ListNode *temp1 = l1;
    struct ListNode *temp2 = l2;

    struct ListNode *head = NULL;
    struct ListNode *tail = NULL;
    int carry = 0;
    while (temp1 != NULL || temp2 != NULL)
    {

        int val1 = (temp1 != NULL) ? temp1->val : 0;
        int val2 = (temp2 != NULL) ? temp2->val : 0;

        int sum = val1 + val2 + carry;
        if (sum > 10)
        {
            carry = 1;
        }
        else
        {
            carry = 0;
        }
        struct ListNode *newNode = (struct ListNode *)malloc(sizeof(struct NodeList *));
        newNode->val = sum % 10;
        newNode->next = NULL;
        if (head == NULL)
        {
            head = newNode;
            tail = newNode;
        }
        else
        {
            tail->next = newNode;
            tail = newNode;
        }

        if (temp1 != NULL)
        {
            temp1 = temp1->next;
        }
        if (temp2 != NULL)
        {
            temp2 = temp2->next;
        }
    }

    if (carry)
    {
        struct ListNode *newNode = (struct ListNode *)malloc(sizeof(struct NodeList *));
        newNode->val = 1;
        newNode->next = NULL;

        tail->next = newNode;
        tail = newNode;
    }
    return head;
}
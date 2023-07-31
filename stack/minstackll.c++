
#include <bits/stdc++.h>
using namespace std;

class MinStack
{
public:
    struct Node
    {
        int val, mn;
        Node *next;
        Node(int _val, int _mn, Node *_next = NULL)
        {
            val = _val;
            mn = _mn;
            next = _next;
        }
    } *head;
    void push(int val)
    {
        if (!head)
        {
            head = new Node(val, val);
        }
        else
        {
            head = new Node(val, min(val, head->mn), head);
        }
    }

    void pop()
    {
        if (!head)
            return;
        Node *temp = head;
        head = head->next;
        delete (temp);
    }

    int top()
    {
        if (!head)
            return -1;
        return head->val;
    }

    int getMin()
    {
        if (!head)
            return -1;
        return head->mn;
    }
};
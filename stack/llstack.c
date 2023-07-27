#include <stdio.h>

// stack with linked list
struct node
{

    int data;
    struct node *next;
};

// global head
struct node *head;

void push(x)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));

    temp->data = x;
    if (head == NULL)
    {
        head = temp;
        temp->next = NULL;
    }
    else
    {
        struct node *trav;
        while (trav->next != NULL)
        {
            trav->next = temp;
            temp->next = NULL;
        }
    };
}
void print()
{
    struct node *trav;
    while (trav->next != NULL)
    {
        printf("%d", trav->data);
    }
}
int main()
{
    head = NULL;
    printf("%p", head);
    // stack is a first in last out data structure

    return 0;
}
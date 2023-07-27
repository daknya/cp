#include <stdio.h>
#include <stdlib.h>
// stack with linked list
struct node
{

    int data;
    struct node *next;
};

// global head
struct node *head;
struct node *top;

void push(int x)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));

    temp->data = x;
    if (head == NULL)
    {
        head = temp;
        temp->next = NULL;
        top = temp;
    }
    else
    {
        struct node *trav = head;
        while (trav->next != NULL)
        {
            trav = trav->next;
        }
        trav->next = temp;

        temp->next = NULL;
        top = temp;
    };
}

void print()
{
    struct node *trav = head;
    while (trav->next != NULL)
    {
        printf("%d", trav->data);
        trav = trav->next;
    }
    printf("%d", trav->data);
}
void getTop()
{
    if (top == NULL)
    {
        printf("empty stack");
    }
    else
    {
        printf("\n %d ", top->data);
    }
}
int main()
{
    head = NULL;

    // stack is a first in last out data structure

    push(9);
    push(8);
    push(7);
    push(6);
    print();
    getTop();
    return 0;
}
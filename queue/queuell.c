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

void push(int x)
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
        struct node *trav = head;
        while (trav->next != NULL)
        {
            trav = trav->next;
        }
        trav->next = temp;
        temp->next = NULL;
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
    printf("%d \n", trav->data);
}
void getTop()
{
    if (head == NULL)
    {
        printf("empty stack");
    }
    else
    {
        printf("\n %d ", head->data);
    }
}

void pop()
{

    struct node *temp = head;

    head = temp->next;
    free(temp);
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
    pop();
    print();
    push(1);
    print();

    return 0;
}
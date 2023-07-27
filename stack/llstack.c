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
        temp->next = head;
        head = temp;
    }
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

void reverse()
{
    struct node *current = head;
    struct node *next = NULL;
    struct node *prev = NULL;

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
    reverse();
    print();
    return 0;
}
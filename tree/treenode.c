#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};

struct node *Createtree(int val)
{
    struct node *Node = (struct node *)malloc(sizeof(struct node));
    Node->data = val;
    Node->left = NULL;
    Node->right = NULL;
    return Node;
}
int main()
{
    struct node *Root = Createtree(80);
    Root->left = Createtree(90);
    Root->left->left = Createtree(80);
    Root->right = Createtree(3);
    return 0;
}

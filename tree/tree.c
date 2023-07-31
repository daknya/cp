#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *left;
    struct node *right;
};
// 1 stroing naturally hierarchical data
// organize data  for quick seach and insertion
// 3 truie for dictionar
// 4 network  routing table

// binary tree
/*/
 each node an have at most 2 child

                5
              3    4
            3     3  4

            strict binary tree each node have 2 or 0

complete binary -: all level except possibley the last are completely filled an all nodes are as left as possible
               2
            2    2
          2   3
        3

perfect binary tree max node in tree with height h == 2^h+1 -1


cost in binary tree is proportional to it hieght


implement  using
dynamically created nodes
array


  2 4 1 5 8 7 9
  0 1 2 3 4 5 6
  for node at index i ,
  left-child-index = 2i+1
  right -child-index =2i+1



*/

void creatTree(data)
{
}
struct node *root;
int main()
{

    root = NULL;

    creatTree();
}
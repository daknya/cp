/* types
1. integer pointer
2. array point : char *ptr = &array
3. structure pointer : struct struct_name * ptr;
4. function ppointer : int (*ptr)(int,char); "the syntax of function pointer cahnges accoiding to the function prototype "
5. double pointer aka pointer to pointer  :  datatype ** pointer_name;
6. Null pointer : dont point to any memory location
7. void pointer : voit * pointer-name ; this is calle generci pointer as tahy can point to any type and can be typecasted to any type
8. wild pointer : uninitalized pointer
9. constant pointer ;memory addr inside the pointer is constant and cannot be changed
10. pointer to constant : the pointer pointing to a constant value that cannot be modified as called pointer to a constant


*/

// C Program to find the size of different pointers types
#include <stdio.h>

// dummy structure
struct str
{
};

// dummy function
void func(int a, int b){};

int main()
{
    // dummy variables definitions
    int a = 10;
    char c = 'G';
    struct str x;

    // pointer definitions of different types
    int *ptr_int = &a;
    char *ptr_char = &c;
    struct str *ptr_str = &x;
    void (*ptr_func)(int, int) = &func;
    void *ptr_vn = NULL;

    // printing sizes
    printf("Size of Integer Pointer  \t:\t%d bytes\n",
           sizeof(ptr_int));
    printf("Size of Character Pointer\t:\t%d bytes\n",
           sizeof(ptr_char));
    printf("Size of Structure Pointer\t:\t%d bytes\n",
           sizeof(ptr_str));
    printf("Size of Function Pointer\t:\t%d bytes\n",
           sizeof(ptr_func));
    printf("Size of NULL Void Pointer\t:\t%d bytes",
           sizeof(ptr_vn));

    return 0;
}
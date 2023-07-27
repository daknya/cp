// pointer recap
//  a pointer is defined as a derived data type that can store the address of other c variable or memory location . we can access and manipulate the data stored in that memory location using pointer
//  datatyoe * __var name__
// 1. pointer declaration : to declare pointer we use * dereference operator before its name
// 2 pointer : process of assigning a value to the pointer varibale
// int var = 10;
//  int * ptr ;
//  ptr = &var;
//  it is recommended that the pointer should always be initiablized to some value before start using it .
//  3 . dereferencing : the process of accessing the value stored in the memory address specified in the pointer. we use the same (*) ereferencing operator that we used in the pointer declaration

#include <stdio.h>

int main()
{
    int var = 10;
    int *ptr;
    ptr = &var;

    printf("value of ptr = %p \n", ptr);
    printf("value of *ptr = %d \n", *ptr);
    printf("value of var = %d \n", var);
}

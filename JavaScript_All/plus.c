#include<stdio.h>
int main(){
    int T;
    printf("Enter T:- ");
    scanf("%d",&T);
    while(T++){
        int a,b;
        printf(" \nEnter A number:- ");
        scanf("%d",&a);
        printf("Enter B number:-  ");
        scanf("%d",&b);
        int c=a+b;
        printf("Total is  %d",c);       
    }
    return(0);
}
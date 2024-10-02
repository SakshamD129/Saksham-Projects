#include <stdio.h>
int main() {
    int num, originalNum, remainder, result = 0;
    printf("Enter  three-digit integer: ");
    scanf("%d", &num);
    originalNum = num;

    while (originalNum != 0) {
        remainder = originalNum % 10;

       result += remainder * remainder * remainder;
       originalNum /= 10;
    }

    if (result == num)
        printf(" Armstrong number.");
    else
        printf("Not Armstrong number.");

    return 0;
}
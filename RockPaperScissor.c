#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main() {
  printf("1- Rock \n2-Paper \n3-Scissor\n");
  int a;
  printf("Enter the number:");
  scanf("%d", &a);
  srand(time(0));
  int b = (rand() % 3) + 1;
  printf("You: %d\n", a);
  printf("Opponent: %d\n", b);
  if (a == 1) {
    if (b == 1) {
      printf("Draw");
    }
    if (b == 2) {
      printf("Loss");
    }
    if (b == 3) {
      printf("Win");
    }
  }
  if (a == 2) {
    if (b == 1) {
      printf("Win");
    }
    if (b == 2) {
      printf("Draw");
    }
    if (b == 3) {
      printf("Loss");
    }
  }
  if (a == 3) {
    if (b == 1) {
      printf("Loss");
    }
    if (b == 2) {
      printf("Win");
    }
    if (b == 3) {
      printf("Draw");
    }
  }
  return 0;
}
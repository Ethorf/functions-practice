#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

int main(void)
{
    string cypher;
    int cypherLength;
    int cypherSum = 0;

    {
        cypher = get_string("Please enter a 26 character cypher of letters only:");
        cypherLength = strlen(cypher);
        for(int i = 0; cypher[i]; i++){
          if (cypher[i] >= 65 && cypher[i] <= 90){
            cypher[i] = cypher[i] + 32;
            }
        }
        for(int i = 0; cypher[i]; i++){
            cypherSum = cypherSum + cypher[i];
        }
    }
    while (cypherLength < 26 || cypherSum != 2847 );

    string plaintext = get_string("Please enter your plaintext to be encoded:");
    int plaintextLength = strlen(plaintext);
    for (int i = 0;i < plaintextLength; i++){
        if (plaintext[i] >= 65 && plaintext[i] <= 90 ){
            plaintext[i] = toupper(cypher[plaintext[i]-65]);
        } else if (plaintext[i] >= 97 && plaintext[i] <= 122 ){
            plaintext[i] = tolower(cypher[plaintext[i]-97]);
        }
    }
    printf("%s\n",plaintext);

}

// asirbgdkiesleidoelskeioshi --- 26 chars
// asirbgdkiesleidoel1keios11
// YTNSHKVEFXRBAUQZCLWDMIPGJO -- key from assignment
// TTNSHKVEFXRBAUQZCLWDMIPGJ/

// ICHPRZGJNTLSKFBDQWAXEUYMOV

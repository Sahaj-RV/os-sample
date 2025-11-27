#include <stdio.h>
#include <string.h>
#include "sim.h"

int main(int argc, char *argv[]) {
    if(argc != 3) {
        printf("Usage: %s <algorithm> <tracefile>\n", argv[0]);
        return 1;
    }

    char *algorithm = argv[1];
    char *traceFile = argv[2];

    if(strcmp(algorithm, "fifo") == 0) {
        run_fifo(traceFile);
    } else if(strcmp(algorithm, "lru") == 0) {
        run_lru(traceFile);
    } else if(strcmp(algorithm, "clock") == 0) {
        run_clock(traceFile);
    } else if(strcmp(algorithm, "optimal") == 0) {
        run_optimal(traceFile);
    } else {
        printf("Unknown algorithm: %s\n", algorithm);
    }

    return 0;
}

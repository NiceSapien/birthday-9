#include <stdio.h>

const char* get_season(int month) {
    if (month == 12 || month == 1 || month == 2) {
        return "Winter";
    } else if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Fall";
    }
    return "Unknown";  // Fallback case
}

int main() {
    int year = 2005;
    int month = 8; // August
    const char* name = "Enter name";

    // Step 1: Convert the year and month into a total number of months
    int total_months = year * 12 + month;

    // Step 2: Subtract 9 months from the total number of months
    total_months -= 9;

    // Step 3: Calculate the new year
    int new_year = total_months / 12;

    // Step 4: Calculate the new month
    int new_month = total_months % 12;

    // Adjust the month and year if the new month is zero
    int display_month, display_year;
    if (new_month == 0) {
        display_month = 12;
        display_year = new_year - 1;
    } else {
        display_month = new_month;
        display_year = new_year;
    }

    // Determine the season based on the month
    const char* season = get_season(display_month);

    // Display the results
    printf("Month: %d\n", display_month);
    printf("Year: %d\n", display_year);
    printf("%s's parents did segs in %s\n", name, season);
    if (display_month == 11) {
        printf("%s's dad failed NNN.\n", name);
    }

    return 0;
}

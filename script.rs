fn main() {
    let year = 2005;
    let month = 8; // August
    let name = "Enter name";

    // Step 1: Convert the year and month into a total number of months
    let mut total_months = year * 12 + month;

    // Step 2: Subtract 9 months from the total number of months
    total_months -= 9;

    // Step 3: Calculate the new year
    let new_year = total_months / 12;

    // Step 4: Calculate the new month
    let new_month = total_months % 12;

    // Adjust the month and year if the new month is zero
    let (display_month, display_year) = if new_month == 0 {
        (12, new_year - 1)
    } else {
        (new_month, new_year)
    };

    // Determine the season based on the month
    let season = get_season(display_month);

    // Display the results
    println!("Month: {}", display_month);
    println!("Year: {}", display_year);
    println!("{}'s parents did segs in {}", name, season);
    if display_month == 11 {
        println!("{}'s dad failed NNN.", name);
    }
}

// Function to determine the season based on the month
fn get_season(month: u32) -> &'static str {
    match month {
        12 | 1 | 2 => "Winter",
        3..=5 => "Spring",
        6..=8 => "Summer",
        9..=11 => "Fall",
        _ => "Unknown", // Fallback case if month is outside the 1-12 range
    }
}

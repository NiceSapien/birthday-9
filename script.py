year = 2005
month = 8  # August
name = "Enter name"

# Step 1: Convert the year and month into a total number of months
total_months = year * 12 + month

# Step 2: Subtract 9 months from the total number of months
total_months -= 9

# Step 3: Calculate the new year
new_year = total_months // 12

# Step 4: Calculate the new month
new_month = total_months % 12

# Adjust the month and year if the new month is zero
if new_month == 0:
    display_month = 12
    display_year = new_year - 1
else:
    display_month = new_month
    display_year = new_year

# Determine the season based on the month
def get_season(month):
    if month == 12 or month == 1 or month == 2:
        return 'Winter'
    elif 3 <= month <= 5:
        return 'Spring'
    elif 6 <= month <= 8:
        return 'Summer'
    elif 9 <= month <= 11:
        return 'Fall'

# Get the season for the calculated month
season = get_season(display_month)

# Display the results
print(f"Month: {display_month}")
print(f"Year: {display_year}")
print(f"{name}'s parents did segs in {season}")
if display_month == 11:
    print(f"{name}'s dad failed NNN.")

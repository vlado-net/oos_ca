Feature: Open the website and verify the main site structure

Scenario: Show the main page
    Given I open the main page
    Then the title on the page is "OOS: Crew applications"
    And there are filters by "Name", "City" fields
    And with "Submit" and "Clear" buttons
    And with 3 columns "Applied, "Interviewing", "Hired"

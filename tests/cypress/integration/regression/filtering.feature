Feature: Filtering candidate tiles.
    I'm as an HR manager want be able to apply filters by Name and City 
    to display only that candidate that I'm looking forward.

Scenario: Apply filter by Name with Submit button
    Given I open the main page
    When type some name in the Name input
    And click on Submit button
    Then I see filtered item by name
    And cancel the filter

Scenario: Apply filter by City pressing Enter button
    Given I open the main page
    When type some city in the City input
    And press Enter button
    Then I see filtered item by city
    And cancel the filter

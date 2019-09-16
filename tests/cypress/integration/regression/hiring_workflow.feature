Feature: Hiring workflow
    I'm as a recruiter want be able to move candidate tile between different columns.

Scenario: Change a candidate status from Applied to Interviewing and then to Hired column
    Given I open the main page
    When click on action button in the candidate tile in Applied column
    Then this candidate tile moves to Interviewing column
    And click on action button once more time
    Then the candidate tile moves to Hired column

Scenario: Change a candidate status from Hired to Interviewing and then to Applied column
    Given I open the main page
    When click on action button in the candidate tile in Hired column
    Then the candidate tile moves to Interviewing column
    And tap on action button once more time
    Then the candidate tile moves to Applied column




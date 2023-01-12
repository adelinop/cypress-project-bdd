Feature: Basic Tests
   Feature to test basics scenarios 

  Background: 
    Given I access the system

  Scenario Outline: Access AB option
    Given I access option <option>
    When I validate the page <option> opened correctly
    Then I validate if Paragraph is showing

    Examples: 
      | option |
      | 'A/B'  |

  Scenario Outline: 
    Given I access option <option>
    And I validate the page <option> opened correctly
    And I add an Element
    And I validate if the element is showing
    When I delete the element
    Then I can validate if the element was deleted

    Examples: 
      | option       |
      | 'Add/Remove' |

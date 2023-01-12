Feature: Basic Tests
   Feature to test basics scenarios 

  Background: 
    Given I access the system

  Scenario Outline: Access AB option
    Given I access option <option>
    When I validate the page <option> opened correctly
    Then I validate if paragraph is showing

    Examples: 
      | option |
      | 'A/B'  |

  Scenario Outline: Add / Remove Element
    Given I access option <option>
    And I validate the page <option> opened correctly
    And I add an Element
    And I validate if the element is showing
    When I delete the element
    Then I can validate if the element was deleted

    Examples: 
      | option       |
      | 'Add/Remove' |

  Scenario Outline: Basic Auth validation
    Given I access basic auth
    Then I validate the page <option> opened correctly

    Examples: 
      | option       |
      | 'Basic Auth' |

  Scenario Outline: Broken Images
    Given I access option <option>
    And I validate the page <option> opened correctly
    When I validate broken images
    Then I validate if image is loading

    Examples: 
      | option          |
      | 'Broken Images' |

  Scenario Outline: Context Menu
    Given I access option <option>
    When I validate the page <option> opened correctly
    Then I click on context box validating the alert

    Examples: 
      | option         |
      | 'Context Menu' |

  Scenario Outline: Drag and Drop Tests
    Given I access option <option>
    And I validate the page <option> opened correctly
    When I change the square position
    Then I validate if the positions was changed

    Examples: 
      | option          |
      | 'Drag and Drop' |

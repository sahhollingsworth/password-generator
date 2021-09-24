# Employee Password Generator

The Password Generator web application enables employees to generate secure, random passwords based on criteria they define: length, uppercase/lowercase use, special character use, and number use. 

It features dynamically updating HTML and CSS, powered by JavaScript code. This runs in any modern web browser and leverages a responsive user interface to adapt to multiple screen sizes.

## Deployed site
[Click here to visit deployed Password Generator application.](https://sahhollingsworth.github.io/password-generator/ "link to Password Generator web application")

![Image](./assets/images/password-generator_preview.gif "screenshot of Password Generator web application")

## Summary
* All user input is driven by window confirm() and alert() methods for all user input. Password definition is heavily reliant on use of arrays.
* The logic to determine the actual password is contained within 1 function, that is visually sectioned in the code to group like work:
  * User interaction to determine length of password
  * User interaction to determine which character types (uppercase, lowercase, numbers, special characters) to include
  * Logic invoke the above parameters to output random password

* Clicking the Generate Password button initiates the process to define the parameters of the password. 
* User is presented with a series of required prompts to select what parameters are included in the password. To abide by password security standards, prompts include restraints messaged to the end user.
  * User must provide a character length for the password, between 8 - 128 characters.
  * Length input is verified and a user is messaged reprompted if ther enter any non-numeric value or a number outside of the 8 - 128 range.
  * User can decide whether what character typers they want from an option set of lowercase, uppercase, numeric, and/or special characters. 
  * User response to desired character types is validated once all 4 prompts has been completed. Users must choose at least 1 character type, so they will be messaged if this restraint is not met.
* The users paramters inform the random generation of a password.
* The newly generated password is displayed to the user in the secure password field on the page.
* The user can generate as many passwords as they want without refreshing the page. The parameters or each will reset every time.

## Built with
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Used to create elements on the DOM
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Used to style html elements on the page
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) - Used to for the user interaction and underlying password selection logic
* [Git](https://git-scm.com/doc) - Used for version control system to track changes to source code
* [GitHub](https://docs.github.com/en) - Hosts the code repository

## Authors
Sarah Hollingsworth
* [Github](https://github.com/sahhollingsworth)
* [LinkedIn](https://www.linkedin.com/in/sarahhollingsworth/)

## Acknowledgments
* Special characters set used in the script.js is from [the OWASP foundation](https://owasp.org/www-community/password-special-characters)
* Cheng Tang at UC Berkeley Extension fullstack bootcamp for walking me through [Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) functionality. I leveraged Spread syntaxt to the logic in the character confirms to force the contents of any specified character array to add the main pool array. 
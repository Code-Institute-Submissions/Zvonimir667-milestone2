# Rock, Paper, Scissors, Lizard, Spock game

Something about the site

## Features

- Header
  - At the top of the page is name of the game which inicates to user what game they are playing.
  
![Screenshot of title](/assets/images/img1.png)

- Game options
  - Game options include 5 interactive buttons that the user can click and make their choice.

![Screenshot of buttons](/assets/images/img2.png)

- Game Results
  - After user clicks their option, image will change depending of their option.
  - JavaScript code chooses a random option for the computer and also change computer picture depending of the option.
  - JavaScript code determines the winner and displays it below the images.
  - The score is updated for the player and the computer after every game.
  - First one to reach 5 points wins the game.

![Screenshot of game](/assets/images/img3.png)

- The Footer
  - The footer section explains rules for the game so the user can understand how the game is played.

![Screenshot of footer](/assets/images/img4.png)

## Testing

### Validator testing

- HTML
  -  No errors were returned when passing through the official W3C validator.

![Screenshot of testing1](/assets/images/validator1.png)

- CSS
  - No errors were found when passing through the official (Jigsaw) validator.

![Screenshot of testing2](/assets/images/validator2.png)

- JavaScript validator
  - No errors were foubd when passing through the JSHint JavaScript validator.

- Lighthouse testing
  - For desktop testing results are as follows: 

![Screenshot of lighthouse testing1](/assets/images/testing1.png)

  - For mobile testing results are as follows:

![Screenshot of lighthouse testing2](/assets/images/testing3.png)

- WAVE testing
  - Also I did a WAVE testing 

![Screenshot of WAVE testing](/assets/images/testing4.png)

### Bugs

#### Solved bugs

![Error1](/assets/images/error0.png)

  - When creating a game I encounter a problem with result. My code for result was 
    - `let result = checkWinner(playerChoice, computerChoice);`
  - Fixed the problem with a code
    - `let result = checkWinner(choices[playerChoice], choices[computerChoice]);`

![Error2](/assets/images/error1.png)
![Error3](/assets/images/error2.png)

- Later in development in game I could not get a tie so I added console.log for player, computer and result to see what I did wrong. I fixed that part adding `computerChoiceIndex` for `computerChoice` and fixed the problem.

#### Unsolved bugs

- There were no usolved bugs

## Deployment 

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Pages
  - In Build and deployment select source Deploy from a branch
  - Choose branch main and save
  - On top the Pages you will find the link to indicate the successful deployment

The live link can be found here - <https://zvonimir667.github.io/milestone2/>

## Credits

### Code used
- The structure for the code and the game was inspired by Love Maths project particularly HTML and CSS, and JavaScript was written mostly by trial and error until satisfactory result.
- Fonts used are from [Google Fonts](https://fonts.google.com/)

### Media
- The images for this project are taken from the [puzzlewocky site](https://puzzlewocky.com/parlor-games/rock-paper-scissors-lizard-spock/)

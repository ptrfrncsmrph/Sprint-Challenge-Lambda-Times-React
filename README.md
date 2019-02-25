# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are a way of type-checking the props that you are passing to your components. Since JS is dynamically typed, it's a good idea to include a `propTypes` property on your component (using the `prop-types` package to define the types) that specifies what it expects to receive as props. This acts as a sort of documentation for your component and ensures that the users of your component (including yourself) are correctly passing the required props to make it work as expected.

- [ ] Describe a life-cycle event in React?

React components go through a "life-cycle" in the following order: mounting, updating, and unmounting. Mounting is when the component is initialized (using the `constructor` in a class component) and rendered to the DOM (using the `render` method of the class, or the function body of the function component), and this triggers the optional `componentDidMount` hook. The updating happens whenever the component is passed new props (which can be opted out of by using `shouldComponentUpdate`) or when `setState` is called. Unmounting happens when the component is removed from the DOM, at this point `componentWillUnmount` will trigger, usually to handle any clean up of event listeners for example.

- [ ] Explain the details of a Higher Order Component?

A higher order component is a function that takes a React component as argument and returns a React component. This is useful for adding "mix-in" style functionality (from a third party library for example) to an existing app or component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

1. *Inline styles* are good for when you just need to style a few attributes, especially if you want to use JavaScript to dynamically affect the styling.
2. *CSS modules* are typically used to "loosely" couple the component module with the relevant parts of CSS that style it. These are traditional, standalone CSS files that are typically colocated with the JS module in the file system and imported into the JS. The benefit is that its still "just CSS", so no learning curve, but you lose out on being able to manipulate styles with JavaScript.
3. *CSS-in-JS* is the strategy of `styled-components` and related libraries. This tightly couples the CSS in the actual JS file itself. The syntax is identical to "enhanced" or "next-generation" CSS (you can use features such as nesting from SCSS/LESS). A benefit is that, if you don't use the JS component, you won't end up shipping unnecessary CSS to the client.

## Project Setup

Follow these steps to set up your project:

- [X] Create a forked copy of this project.
- [X] Add your project manager as collaborator on Github.
- [X] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.
- [X] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [X] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [X] Add your project manager as a reviewer on the pull-request
- [X] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [X] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [X] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [X] You should now be able to filter cards using your tabs!
- [X] Make sure all of your props being passed are validated using PropTypes.
- [X] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)

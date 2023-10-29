# Please read the instructions and the requirements carefully before you start working on the assignment.
The requirements for this project are listed in the [REQUIREMENTS.md](REQUIREMENTS.md) file.


## General Notes

- The solution of the challenge should be inside the [frontend](frontend) folder.
  - Specifically in the [frontend/src](frontend/src) folder.
  - The [frontend/src/App.css](frontend/src/App.css) has a global css reset.
  - You may modify/remove/restructure any file in the [frontend/src/components](frontend/src/components) folder as you see fit, but the assignment can be solved optimally with the existing structure/files as well
  - All the assets are in the [frontend/src/assets](frontend/src/assets) folder.
  - The [frontend/src/services](frontend/src/services) has the socket service. It shouldn't be necessary to edit this.
- The colors can be found as css variables in the [frontend/src/index.css](frontend/src/index.css) file.
- As this project uses Redux Toolkit, you can find the typed `useAppSelector` and `useAppDispatch` hooks
in the [frontend/src/hooks/redux.ts](frontend/src/hooks/redux.ts) file.
- For the effects (such as the glow effects of the stock card) you need to replicate the effect as close as possible.
- Do not submit any changes to the [backend](backend) and [socket](socket) folders. 
  - *You might find it helpful to reduce the update interval of the price updates during the development* 
- You might find it helpful to use tools/extensions such as `React Profiler` and `Redux DevTools`. Please
  **do not use** tools such as `Lighthouse` to measure performance as the metrics are irrelevant for this project.
## Getting Started

### The project can be started in two ways:

#### 1. Using the scripts in the root directory
**You need yarn version 2 or higher.**
- Run `yarn install` in the root directory to install all the dependencies.
  - This will also install the dependencies in the [frontend](frontend), [backend](backend) and [socket](socket) folders.
- Run `yarn start` in the root directory to start all of the services
- Go to http://127.0.0.1:5173/ to access the application

#### 2. Using the scripts in each folder
**Before running the commands, make sure you have installed the dependencies first by running `yarn install` in all 
the directories.**
- Start the mocked backend server in [backend](backend) by running `yarn start`
- Start the mocked socket server in [socket](socket) by running `yarn start`
- Start the development server in  [frontend](frontend) by running `yarn dev`

## Submitting the solution
You should push the starting project monorepo to a private repository (Such as GitHub, GitLab ...)
- The starting project should be on the `master` branch.
- The solution should be on a separate branch
  - There should be an opened pull request from the solution branch to the `master` branch
  - The pull request should have a description of the changes
- Once you are done, share the repository with `hristijan@mrq.com`


  
***--- GOOD LUCK ---***

If you have any questions, please send email to **[hristijan\@mrq.com](mailto:hristijan@mrq.com?subject=[THA-Q]Frontend%20Challenge%20Question)**
.
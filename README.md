The requirements for this project are listed in the [REQUIREMENTS.md](REQUIREMENTS.md) file.

## Getting Started

### The project can be started in two ways:

#### 1. Using the scripts in the root directory
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

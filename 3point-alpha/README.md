## Running React on Repl.it

New Packages Installed
Google OAuth
Axios
dotenv

Run npm install to install latest packages
if failed to install run the following individual commands.

npm install --save-dev dotenv
npm install axios
npm install @react-oauth/google@latest


New file created [.env] add the following items to the file as list

REACT_APP_GOOGLE_OAUTH_CLIENTID = "352439526128-mbjjk65sghqmn5fuqac4dk1nkeplsnkf.apps.googleusercontent.com"

######################################

update [.gitignore] file with the following to ignore local environment files or keys. Add as a list

node_modules

.DS_Store

dist

dist-ssr

*.local

.env

.replit

replit_zip_error_log.txt

replit.nix



[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)

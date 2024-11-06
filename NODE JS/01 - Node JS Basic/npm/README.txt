// install module
$> npm install <module name>

// uninstall module
$> npm uninstall <module name>

// custom run
1. open package.json
2. add code below

"scripts": {
    "start-dev": "NODE_ENV=development node index.js",
    "start": "NODE_ENV=production node index.js"
}

3. to run, type code below in terminal

npm run start-dev
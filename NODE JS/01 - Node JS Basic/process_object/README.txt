RUN THIS FOR app.js

// Linux or MacOS Terminal
NODE_ENV=production node ./process_object/app.js "FirstName" "LastName"

// Windows Terminal
SET NODE_ENV=production && ./process_object/node app.js "FirstName" "LastName"



RUN THIS FOR index.js

// Linux or MacOS Terminal
SET NODE_ENV=development node ./process_object/index.js "YourName"

// Windows Terminal
SET NODE_ENV=development && node ./process_object/index.js "YourName"
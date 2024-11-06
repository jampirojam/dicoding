run code below

curl -X GET http://localhost:5000/about

curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"

curl -X PUT http://localhost:5000/about

curl -X DELETE http://localhost:5000/about

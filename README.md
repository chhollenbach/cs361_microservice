# CS361 Winter 2022 Microservice Project
Microservice that wraps the Google Books API making it easier to use.


# Instructions for setup
* Install Node.js and npm
* After cloning the project, run `npm install` to install all packages needed
* Google Books API key is needed - Project uses the dotenv package to keep api keys private
  - Create a google cloud account (free)
  - Visit the google cloud credentials page and create a new api key: https://console.developers.google.com/apis/credentials
  - Follow instructions here to enable the api key: https://support.google.com/googleapi/answer/6158841?hl=en
  - Create a new local file `.env` in the same folder as `index.js` with the following line of code: `google_books="APIKEY"` where `APIKEY` is replaced with the generated key

# Instructions for use
* Launch the server by running `node index.js` - server should launch on 127.0.0.1:3000
* Currently there is only one endpoint. Send a GET request to `http://127.0.0.1:3000/thumbnail/<isbn>` where `<isbn>` is replaced with the book ISBN you want the thumbnail image of

// // import gapi from "google-api-javascript-client"
// import gapi from "./GoogleApi.js"
// // import gapi from "gapi"

// var clientSecret = "88350370043-avr3t0otcj8dclqn8c70pm1vq1mp0ae1.apps.googleusercontent.com"
// var apiKey = "AIzaSyBYigJ8EzMulO4hQDhSGXxZETonUqDoGrU"





// const Youtube = {
  
//     async authenticate() {
//       await console.log(await gapi.auth2)
//       await gapi.load("client:auth2", function() {
//           gapi.auth2.init({client_id: clientSecret});
//         });


//         return await gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//     },

//     loadClient() {
//         gapi.client.setApiKey("YOUR_API_KEY");
//         return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//             .then(function() { console.log("GAPI client loaded for API"); },
//                   function(err) { console.error("Error loading GAPI client for API", err); });
//     },

//     getChannelByString(channelName) {
//         return gapi.client.youtube.channels.list({
//             "part": [
//               "snippet"
//             ],
//             "forUsername": "Pewdiepie"
//           })
//               .then(function(response) {
//                       // Handle the results here (response.result has the parsed body).
//                       console.log("Response", response);
//                     },
//                     function(err) { console.error("Execute error", err); });
//     }
// }



// export default Youtube;


import axios from 'axios';
const KEY = 'AIzaSyBYigJ8EzMulO4hQDhSGXxZETonUqDoGrU'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
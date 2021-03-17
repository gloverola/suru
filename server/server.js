const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('./login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: "86253cbcc63a4d45b27ffe6731cd4d4c",
      clientSecret: "74394bc2f3ac4f488734fbe943f13a9d",
    });

    spotifyApi.authorizationCodeGrant(code).then(data => {
        
    })
})
const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  { url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Department_of_Science_and_Technology_%28DOST%29_-_Seal.svg", name: "dost.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Commission_on_Higher_Education_%28CHED%29.svg", name: "ched.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/0/07/TESDA_Logo.svg", name: "tesda.svg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/8/89/UNICEF_Logo.png", name: "unicef.png" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Rotary_International_Logo.svg", name: "rotary.svg" }
];

logos.forEach(logo => {
  const file = fs.createWriteStream(path.join(__dirname, 'public', logo.name));
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };
  https.get(logo.url, options, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      https.get(response.headers.location, options, function(res) {
        res.pipe(file);
      });
    } else {
      response.pipe(file);
    }
  }).on('error', function(err) {
    console.error('Error downloading ' + logo.name + ':', err);
  });
});

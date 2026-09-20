const http = require('http');

const urls = [
  'http://localhost:8080/index.html',
  'http://localhost:8080/styles.css',
  'http://localhost:8080/script.js',
  'http://localhost:8080/assets/images/hero-profile.jpg',
  'http://localhost:8080/assets/images/kemet-gate-1.png',
  'http://localhost:8080/assets/images/kemet-gate-2.png',
  'http://localhost:8080/assets/images/kemet-gate-3.png',
  'http://localhost:8080/assets/images/kemet-gate-4.png',
  'http://localhost:8080/assets/images/hrm-portal-1.png',
  'http://localhost:8080/assets/images/hrm-portal-2.png',
  'http://localhost:8080/assets/images/shopery-1.png',
  'http://localhost:8080/assets/images/shopery-2.png',
  'http://localhost:8080/assets/images/topico-1.png',
  'http://localhost:8080/assets/images/topico-2.png',
  'http://localhost:8080/assets/images/diabetes-app.png',
  'http://localhost:8080/assets/Mohamed_Elshahat_CV.pdf'
];

let checks = urls.map(url => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
});

Promise.all(checks).then(results => {
  let allOk = true;
  results.forEach(r => {
    console.log(`${r.status === 200 ? '✅' : '❌'} [${r.status}] ${r.url}`);
    if (r.status !== 200) allOk = false;
  });
  console.log('\nResult: ' + (allOk ? 'ALL ASSETS VERIFIED 200 OK' : 'SOME ASSETS FAILED'));
});

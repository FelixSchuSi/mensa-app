import express from 'express';
import https from 'https';

const router = express.Router();

router.get('/*', async (req, res) => {
  const path = req.path;
  const options = {
    hostname: 'fhms.dub-services.de',
    port: 443,
    path: path !== '/' ? '/media/' + req.path : '/media',
    method: 'GET',
    followAllRedirects: true
  };

  const cReq = https.request(options, cRes => {
    cRes.on('data', d => {
      console.log('Success');
      res.status(cRes.statusCode!).send(d);
    });
  });
  cReq.on('error', error => {
    console.error(error);
    res.status(504).send();
  });
  cReq.end();
  console.log(req.path);
});

router.post('/*', async (req, res) => {
  console.log(req.path);
});

router.delete('/*', async (req, res) => {
  console.log(req.path);
});
export default router;

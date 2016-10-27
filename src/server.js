import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Hello from './hello.jsx';

const app = express();
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(
      <body>
        <div className="content"><Hello /></div>
        <script src="bundle.js" />
      </body>
    )
  )
});

app.listen(3000, () => {
  console.log('Hello app listening on port 3000!');
});

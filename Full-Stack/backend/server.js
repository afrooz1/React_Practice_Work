
import express from 'express';


const app = express();

// app.use(express.static("dist") );

app.get('/', (req, res) => {
  res.send('Hello World!');
}  );

//get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
   {
      id: 1,
      title: 'A Joke',
      content: 'This is a joke'
   },
   {
      id: 2,
      title: 'Another Joke',
      content: 'This is another joke'
   },
   {
      id: 3,
      title: 'Yet Another Joke',
      content: 'This is yet',
   },
   {
      id: 4,
      title: 'Yet Another Joke',
      content: 'This is yet another joke'
   },
   {
      id: 5,
      title: 'Yet Another Joke',
      content: 'This is yet another joke' 
   }
  ];
   res.json(jokes);
} );

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
   });
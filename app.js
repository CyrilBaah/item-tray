const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let nextItemId = 4; // Starting ID for new items

let items = [
    { id: 1, name: 'Jollof Rice', description: '🍚 Spicy rice dish.' },
    { id: 2, name: 'Banku and Tilapia', description: '🍲 Corn and cassava dough with fish.' },
    { id: 3, name: 'Waakye', description: '🍛 Rice and beans dish.' }  
];


app.get('/', (req, res) => {
    res.send("🍽️ Item Tray | Ready to serve!!! 🚀");
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.json(item);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = nextItemId++;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  let itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  items[itemIndex] = { id, ...updatedItem };
  res.json(items[itemIndex]);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }
  items.splice(index, 1);
  res.sendStatus(204);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export app for testing
const express = require('express');
const router = express.Router();
const teas = require('../data/teas.json');

// Get all teas
router.get('/search', (req, res) => {
  try {
    res.json({ products: teas.teas });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tea data' });
  }
});

// Get tea by id
router.get('/:id', (req, res) => {
  try {
    const tea = teas.teas.find(t => t.id === parseInt(req.params.id));
    if (!tea) {
      return res.status(404).json({ message: 'Tea not found' });
    }
    res.json(tea);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tea data' });
  }
});

// Get teas by type
router.get('/type/:type', (req, res) => {
  try {
    const filteredTeas = teas.teas.filter(
      t => t.type.toLowerCase() === req.params.type.toLowerCase()
    );
    res.json({ products: filteredTeas });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tea data' });
  }
});

module.exports = router;
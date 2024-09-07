import express from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Mongoose schema with auto-generated customId
const exampleSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  customId: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  description: { type: String }
});

const Example = mongoose.model('Example', exampleSchema);

// Create a new document with customId
app.post('/api/example', async (req, res) => {
  try {
    const { name, description } = req.body;
    const newExample = new Example({ name, description });
    const savedExample = await newExample.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(500).json({ message: 'Error creating example', error });
  }
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log('Server running...'));
  })
  .catch(err => console.log('MongoDB connection error:', err));

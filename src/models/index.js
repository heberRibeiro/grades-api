import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradesSchema = new db.mongoose.Schema({
  name: String,
  subject: String,
  type: String,
  value: Number,
  lastModified: Date,
});

db.model = db.mongoose.model('Grade', gradesSchema);
export { db };

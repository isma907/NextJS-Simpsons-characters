import mongoose, { Schema, Document } from 'mongoose';

export interface CharacterDocument extends Document {
  name: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
}

const CharacterSchema = new Schema<CharacterDocument>(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    occupation: { type: String, required: true },
  },
  { collection: 'characters' }
);

export default mongoose.models.Character || mongoose.model<CharacterDocument>('Character', CharacterSchema);

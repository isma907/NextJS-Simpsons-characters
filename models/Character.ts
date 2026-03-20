import mongoose, { Schema, Document } from 'mongoose';

export interface CharacterDocument extends Document {
  name: string;
  story?: string;
  image: string;
  gender: string;
  status: string;
  occupation?: string;
  updateDate?: Date;
}

const CharacterSchema = new Schema<CharacterDocument>(
  {
    name: { type: String, required: true },
    story: { type: String },
    image: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    occupation: { type: String },
    updateDate: { type: Date },
  },
  { collection: 'characters' }
);

export default mongoose.models.Character || mongoose.model<CharacterDocument>('Character', CharacterSchema);

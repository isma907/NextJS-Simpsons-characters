import { Schema, model, models } from "mongoose";

export interface SimpsonCharacter {
  _id?: string;
  name: string;
  resume: string;
  image: string;
  gender: string;
  status: string;
  occupation: string;
}

const simpsonCharacterSchema = new Schema<SimpsonCharacter>({
  name: {
    type: String,
  },
  resume: {
    type: String,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
  },
  status: {
    type: String,
  },
  occupation: {
    type: String,
  },
});

const Characters =
  models.characters || model("characters", simpsonCharacterSchema);

export default Characters;

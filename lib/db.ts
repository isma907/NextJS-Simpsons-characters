import mongoose from "mongoose";

// Now you can use the Character model in your component

const MONGODB_URI = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const connection = {};

async function connect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI!, {
      dbName: DB_NAME,
    });
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {}
}

export default connect;

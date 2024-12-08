import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_URL as string).then(() => {
      console.clear();
      console.log("database connected...💕✌💖😜😜");
    });
  } catch (error) {
    return error;
  }
};

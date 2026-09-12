import mongoose from "mongoose";
import config from 'config';
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDatabase;
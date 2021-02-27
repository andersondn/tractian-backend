import  {connect} from 'mongoose';
const db = () =>{
    const connectDb = () => {
        
          connect(process.env.MONGO_URI, { useNewUrlParser: true,  })
          .then(() => {
            return console.log(`Successfully connected to`);
          })
          .catch(error => {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
          });
      };
      connectDb();
}



export default db;
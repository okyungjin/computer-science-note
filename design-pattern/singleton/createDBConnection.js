const ENDPOINT_MONGO_DB = 'mongodb://localhost:27017/myapp';
const createConnection = url => ({ 'url': url });

class DB {
  constructor(url) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }
    return DB.instance;
  }

  connect() {
    return this.instance;
  }
}

const mongo1 = new DB(ENDPOINT_MONGO_DB);
const mongo2 = new DB(ENDPOINT_MONGO_DB);
console.log(mongo1 === mongo2); // true
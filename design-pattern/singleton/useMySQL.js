// main module
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'exmaple.org',
  user: 'kyungjin',
  password: 'secret',
  database: 'myapp'
});
pool.connect();


// module A
pool.query(query, (error, results, _) => {
  if (error) throw error;
  console.log('This solution is: ', results[0].solution);
});

// module B
pool.query(query, (error, results, _) => {
  if (error) throw error;
  console.log('This solution is: ', results[0].solution);
});

// main moudle에서 Database 연결에 관한 인스턴스를 정의하고
// 다른 모듈인 A, B에서 해당 인스턴스를 기반으로 쿼리를 보내는 형식으로 사용한다.
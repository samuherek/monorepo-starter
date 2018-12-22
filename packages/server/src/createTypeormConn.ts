import { createConnection } from 'typeorm';

export const createTypeormConn = async () => {
  let retries = 5;
  while (retries) {
    try {
      // console.log('in here');
      // console.log(getConnectionOptions);
      // const config = await getConnectionOptions();
      return createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'samuherek',
        password: '',
        database: 'monorepo'
      });
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
};

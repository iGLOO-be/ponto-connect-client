import { generateApi } from 'swagger-typescript-api';
import path from 'path';

const generateApiPontoConnect = async () => {
  return generateApi({
    input: path.join(__dirname, '../doc/pontoConnect-open-api-spec.json'),
    output: path.join(__dirname, '../src/client'),
    name: "pontoConnect",
    cleanOutput: true
  })
}

generateApiPontoConnect()
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

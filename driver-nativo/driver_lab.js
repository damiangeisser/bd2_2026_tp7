import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const dbName = "laboratorio";

async function main() {

  await client.connect();

  console.log("Conexión exitosa al servidor MongoDB");

  const db = client.db(dbName);

  const collection = db.collection("componentes");

  const insertResult = await collection.insertMany([
    {
      nombre: "Sensor de Humedad",
      stock: 10
    },
    {
      nombre: "Servo Motor",
      stock: 15
    },
    {
      nombre: "LED RGB",
      stock: 25
    }
  ]);

  console.log("Documentos insertados =>", insertResult);

  return "Completado.";
}

try {
  const result = await main();
  console.log(result);
} catch (error) {
  console.error("Error en la conexión con MongoDB:", error);
} finally {
  await client.close();
}
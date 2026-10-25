import mongoose from "mongoose";

const url = "mongodb://localhost:27017";
const dbName = "laboratorio";

const componenteSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    stock: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

const Componente = mongoose.model("componentes", componenteSchema);

async function main() {

  await mongoose.connect(`${url}/${dbName}`);

  console.log("Conexión exitosa a MongoDB con Mongoose");

  const insertResult = await Componente.create({
    nombre: "Sensor Ultrasónico",
    stock: 12
  });

  console.log("Documento insertado =>", insertResult);

  return "Completado.";
}

try {
  const result = await main();
  console.log(result);
} catch (error) {
  console.error("Error en la conexión o ejecución:", error);
} finally {
  await mongoose.connection.close();
}
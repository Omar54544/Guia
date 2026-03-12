import InMemoryNudoRepository from "../repositories/InMemoryNudoRepository.js";
import CreateNudo             from "../../application/usecases/CreateNudo.js";
import NudoController         from "../controllers/NudoController.js";
import GetAllNudos from "../../application/usecases/GetAllNudos.js";
// 1. Repositorio
const repository = new InMemoryNudoRepository();

// 2. Use cases
const createNudo = new CreateNudo(repository);
const getAllNudos = new GetAllNudos(repository);

// 3. Controller
const nudoController = new NudoController({
  createNudo,
  getAllNudos,
});

export { nudoController };
import InMemoryNudoRepository from "../repositories/InMemoryNudoRepository";
import CreateNudo from "../../application/usecases/CreateNudo";
import GetAllNudon from "../../application/usecases/GetAllNudo";
import NudoController from "../controllers/NudoController";
import NudoController from "../controllers/NudoController";


//Repository
const repository =  new InMemoryNudoRepository();

//Use cases 
const createNudo = new  CreateNudo(repository);
const getAllNudon = new GetAllNudon(repository);


//CONTROLLER 
const NudoController = new NudoController({
    createNudo,
    getAllNudon
});


export{NudoController};
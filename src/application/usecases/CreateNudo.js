import Nudo from "../../domain/entities/Nudo.js";

export default class CreateNudo {
  constructor(NudomRepository) {
    this.NudomRepository = NudomRepository;
  }

  async execute({ material, dificultad }) {
    const nudo = new Nudo({ material, dificultad });
    return await this.NudomRepository.save(nudo);
  }
}
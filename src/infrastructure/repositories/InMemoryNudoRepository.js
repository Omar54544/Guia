import NudomRepository from "../../domain/repositories/NudoRepository.js";

export default class InMemoryNudoRepository extends NudomRepository {
  constructor() {
    super();
    this.nudos = [];
  }

  async save(nudo) {
    const index = this.nudos.findIndex(n => n.id === nudo.id);
    if (index >= 0) {
      this.nudos[index] = nudo;
    } else {
      this.nudos.push(nudo);
    }
    return nudo;
  }

  async findAll() {
    return this.nudos;
  }
}
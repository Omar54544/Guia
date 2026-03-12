export default class GetAllNudos {
  constructor(NudomRepository) {
    this.NudomRepository = NudomRepository;
  }

  async execute() {
    return await this.NudomRepository.findAll();
  }
}
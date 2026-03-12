import Nudo from "../../domain/entities/Nudo";

export default class CreateNudo
{
    constructor(NudoRepository)
    {
        this.NudoRepository = NudoRepository;
    }

    async execute({material, dificultad})
    {
        const Nudo = new Nudo({material, dificultad})
        return await this.NudoRepository.save(Nudo);
    }
}
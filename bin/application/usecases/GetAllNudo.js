export default class GetAllNudon
{
    constructor(NudomRepository)
    {
        this.NudomRepository = NudomRepository;
    }

    async execute()
    {
        return await this.NudomRepository.findAll();
    }
}
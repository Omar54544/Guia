import NudomRepository from "../../domain/repositories/Nudom";

export default class InMemoryNudoRepository extends NudomRepository
{
    constructor()
    {
        super();
        this.nudn = [];
    }
    async save(nud)
    {
        const index = this.nudn.findIndex(p=> p.id === nud.id);
        if(index >= 0)
        {
            this.nud[index] = nud;
        }else{
            this.nudn.push(nud);
        }
        return nud;
    }

    async findAll()
    {
        return this.nudn;
    }
}
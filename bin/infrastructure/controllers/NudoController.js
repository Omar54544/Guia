export default class NudoController
{
    constructor({CreateNudo, GetAllNudon})
    {
        this.createNudo = createNudo;
        this.getAllNudon = getAllNudon;
    }


    async create(req, res)
    {
        const Nudo = await this.CreateNudo.execute(req.body);
        res.status(201).json(nud);
    }cath (err)
    {
        res.status(400).json({error:err.message});
        
    }

    async getAll(req, res)
    {
        try
        {
            const nudn = await this.GetAllNudon.execute();
        }
    }cath(err)
    {
        res.status(500).json({error:err.message});
    }

}
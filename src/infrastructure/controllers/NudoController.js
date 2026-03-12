export default class NudoController {
  constructor({ createNudo, getAllNudos }) {
    this.createNudo = createNudo;
    this.getAllNudos = getAllNudos;
  }

  async create(req, res) {
    try {
      const nudo = await this.createNudo.execute(req.body);
      res.status(201).json(nudo);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const nudos = await this.getAllNudos.execute();
      res.status(200).json(nudos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
import NudomRepository from "../../domain/repositories/NudoRepository.js";
import NudoModel       from "../database/models/NudoModel.js";

export default class MongoNudoRepository extends NudomRepository {
  async save(nudo) {
    await NudoModel.findOneAndUpdate(
      { id: nudo.id },
      nudo,
      { upsert: true, new: true }
    );
    return nudo;
  }

  async findAll() {
    return await NudoModel.find();
  }

  async findByMaterial(material) {
    return await NudoModel.findOne({ material }) ?? null;
  }

  async delete(id) {
    const result = await NudoModel.findOneAndDelete({ id });
    if (!result) throw new Error(`Nudo with id "${id}" not found`);
  }
}
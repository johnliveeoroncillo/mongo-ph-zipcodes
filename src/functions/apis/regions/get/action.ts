import { Connection } from 'typeorm';
import { RegionModel } from '../../../../models/RegionModel';
import { RegionRepository } from '../../../../repository/RegionRepository';

export class RegionsGetAction {
    private regions: RegionRepository;

    constructor(connection: Connection) {
        this.regions = connection.getCustomRepository(RegionRepository);
    }

    async execute(): Promise<RegionModel[]> {
        return await this.regions.findCollections();
    }
}

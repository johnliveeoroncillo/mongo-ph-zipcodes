import { Connection } from 'typeorm';
import { RegionModel } from '../../../../models/RegionModel';
import { RegionRepository } from '../../../../repository/RegionRepository';

export class RegionsGetAction {
    private regions: RegionRepository;

    constructor(connection: Connection) {
        this.regions = connection.getCustomRepository(RegionRepository);
    }

    async execute(): Promise<RegionModel[]> {
        let response = await this.regions.findCollections();
        response = response.sort((a, b) => {
            return a.zip_code < b.zip_code ? -1 : 1;
        });
        return response;
    }
}

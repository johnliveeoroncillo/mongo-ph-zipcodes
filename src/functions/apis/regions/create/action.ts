import { Connection, getCustomRepository, MongoRepository } from 'typeorm';
import { RegionModel } from '../../../../models/RegionModel';
import { RegionRepository } from '../../../../repository/RegionRepository';
import { RegionsCreateRequest } from './request';

export class RegionsCreateAction {
    private connection: Connection;
    private regions: RegionRepository;

    constructor(connection: Connection) {
        this.connection = connection;
        this.regions = connection.getCustomRepository(RegionRepository);
    }

    async execute(request: RegionsCreateRequest): Promise<RegionModel> {
        const region = new RegionModel();
        region.region = request.region;
        region.zip_code = request.zip_code;
        return await this.regions.save(region);
    }
}

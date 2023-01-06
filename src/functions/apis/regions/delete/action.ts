import { ObjectId } from 'mongodb';
import { Connection, MongoClient, ObjectID } from 'typeorm';
import { Mongo } from '../../../../../core/databases/Mongo';
import { Carbon } from '../../../../../core/libs/Carbon';
import { RegionRepository } from '../../../../repository/RegionRepository';
import { NotFound } from './response';

export class RegionsDeleteAction {
    private regions: RegionRepository;

    constructor(connection: Connection) {
        this.regions = connection.getCustomRepository(RegionRepository);
    }

    async execute(id: string): Promise<void> {
        const region = await this.regions.findCollection(id);
        if (!region) throw new NotFound();

        await this.regions.softDeleteCollection(id);
    }
}

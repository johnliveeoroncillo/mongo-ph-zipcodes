import { ObjectId } from 'mongodb';
import {
    BaseEntity,
    EntityRepository,
    EntitySchema,
    EntityTarget,
    MongoRepository,
    ObjectID,
    ObjectType,
    Entity,
    Repository,
    ObjectLiteral,
    EntityManager,
} from 'typeorm';
import { Carbon } from '../../core/libs/Carbon';
import { Model } from '../../core/libs/Model';
@EntityRepository(Entity);
export class MongoDBRepository<T extends ObjectLiteral> extends Repository<T> {
    async findCollections(): Promise<T[]> {
        const response = await this.find({ withDeleted: true });
        return response.filter((item: T) => !item.deleted_at);
    }
    async findCollection(_id: string): Promise<T | undefined> {
        const id: ObjectId = new ObjectId(_id);
        const response = await this.find({
            where: {
                _id: id,
            },
            withDeleted: true,
        });
        console.log('1', response);
        if (!response || !response.length) return undefined;
        const data = response.pop();
        if (data?.deleted_at) return undefined;
        return data;
    }
    async softDeleteCollection(id: string): Promise<void> {
        await this.update(id, {
            deleted_at: Carbon.timezone(),
        });
    }
}

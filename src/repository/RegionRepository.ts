import { EntityRepository, ObjectID, Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Carbon } from '../../core/libs/Carbon';
import { RegionModel } from '../models/RegionModel';
import { MongoDBRepository } from './MongoRepository';
@EntityRepository(RegionModel)
export class RegionRepository extends MongoDBRepository<RegionModel> {}

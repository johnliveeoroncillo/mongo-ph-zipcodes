import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Model } from '../../core/libs/Model';
@Entity({
    name: 'Regions',
})
export class RegionModel extends Model {
    @Column()
    region: string;

    @Column()
    zip_code: number;
}

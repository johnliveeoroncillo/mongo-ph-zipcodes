import { RegionsCreateRequest } from './request';
import { Validation } from '../../../../../core/libs/Validation';
import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
const joi = JoiImport.extend(DateExtension);
//SAMPLE: joi.date().format('YYYY-MM-DD')

export const Validate = (request: RegionsCreateRequest): RegionsCreateRequest => {
    const schema = joi
        .object({
            region: joi.string().required(),
            zip_code: joi.number().required(),
        })
        .required();

    const validate = new Validation(schema);
    return validate.validate(request);
};

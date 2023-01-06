import { API_RESPONSE } from '../../../../../core';
import { HttpResponse, HttpRequest } from '../../../../../core/libs/ApiEvent';
import { Response } from 'express';
import { Connection } from 'typeorm';

import { Response200 } from './response';
import { RegionsDeleteAction } from './action';
import { Mongo } from '../../../../../core/databases/Mongo';

export async function execute(req: HttpRequest, res: Response): Promise<HttpResponse> {
    try {
        const id = String(req.params?.id ?? '');
        const connection: Connection = await Mongo.getConnection();
        const action = new RegionsDeleteAction(connection);
        await action.execute(id);

        return API_RESPONSE(
            {
                ...Response200.SUCCESS,
            },
            res,
        );
    } catch (e) {
        return API_RESPONSE(e, res);
    }
    // finally {
    //     await Mysql.closeConnection();
    // }
}

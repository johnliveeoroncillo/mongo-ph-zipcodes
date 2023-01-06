import { HttpResponse } from '../../../../../core/libs/ApiEvent';

/*
  Your Custom Response */
export class Response200 {
    static SUCCESS: HttpResponse = {
        code: 200,
        message: 'Region successfully deleted',
    };
}

export class NotFound {
    code = 404;
    message = 'Region not found';
}

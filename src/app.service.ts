import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): any {
    return [
      { description: 'Hello World descricao!', title: 'Titulo'},
      { description: 'Hello World descricao!', title: 'Titulo 2'},      
    ];
  }

}

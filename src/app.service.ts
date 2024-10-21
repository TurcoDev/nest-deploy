import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h3>Hello World!</h3>
    <img src="https://i.pinimg.com/originals/8b/7c/ac/8b7cac4d85303b79158dd3cf2d9b63c8.png" width= "100">`;
  }
}

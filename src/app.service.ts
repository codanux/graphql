import { Inject, Injectable } from '@nestjs/common';
import * as DeviceDetector from "device-detector-js";

@Injectable()
export class AppService {

  constructor(
    @Inject('REQUEST') private readonly request: any,
  ) {}

  getHello() {
    const userAgent = this.request.headers['user-agent'];
    const deviceDetector = new DeviceDetector();
    const device = deviceDetector.parse(userAgent);
    return device
  }
}

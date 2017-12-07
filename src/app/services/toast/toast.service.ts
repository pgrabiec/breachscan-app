import { Injectable } from '@angular/core';
import {Toast, ToasterService} from 'angular2-toaster';

@Injectable()
export class ToastService {


  constructor(private toasterService: ToasterService) { }

  popToast(type: ToastType, title: string, body: string) {
    const toast: Toast = {
      timeout: 7000,
      type: type.toString(),
      title: title,
      body: body
    };
    this.toasterService.pop(toast);
  }
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

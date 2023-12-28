import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showHTMLMessage(message: string, title: any) {
    this.toastr.success(message, title, {
      enableHtml: true,
    });
  }

  showSuccessWithTimeout(message: string, title: string, timespan: any) {
    this.toastr.success(message, title, {
      timeOut: timespan,
    });
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  showAlert(message: string, title: string) {
    this.toastr.warning(message, title);
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  // constructor(private toastr: ToastrService) {}
  constructor(private notifyService: NotificationService) {}

  ngOnInit() {}

  showToaster() {
    // this.toastr.success("Hello, I'm the toastr message.");
    //this.notifyService.showSuccess('Data show successfully!!', 'Notification');
    // this.notifyService.showHTMLMessage(
    //   '<h2>Data shown successfully !!</h2>',
    //   'Notification'
    // );

    // this.notifyService.showSuccessWithTimeout(
    //   'Data shown successfully !!',
    //   'Notification',
    //   3000
    // );

    //this.notifyService.showError('Erro ao cadastrar o usuário!!', 'Erro');
    this.notifyService.showAlert(
      'Favor informar o usuário!!',
      'Cadastro de Usuário'
    );
  }
}

import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()

export class ToastService {

    constructor(public toastCtrl: ToastController) { }

    presentToast(message: string, duration: number, position: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });

        toast.present();
    }

}
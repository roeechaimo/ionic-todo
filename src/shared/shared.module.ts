import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ToastService } from '../shared/services/toast-service.service';

@NgModule({
    imports: [],
    exports: [
        TranslateModule,
        IonicModule
    ],
    providers: [
        ToastService
    ]
})
export class SharedModule {
}
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDescriptionPage } from './add-description';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        AddDescriptionPage
    ],
    imports: [
        IonicPageModule.forChild(AddDescriptionPage),
        SharedModule
    ],
    exports: [
        AddDescriptionPage
    ]
})
export class AddDescriptionPageModule {
}

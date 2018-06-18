import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../../shared/shared.module';
import { HomePage } from './home';

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        SharedModule
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastService } from '../shared/services/toast-service.service';
import { HomePageModule } from '../pages/home/home.module';
import { AddDescriptionPageModule } from '../pages/add-description/add-description.module';

import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ReactiveFormsModule,
        FormsModule,
        HomePageModule,
        AddDescriptionPageModule

    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Camera,
        ToastService,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}

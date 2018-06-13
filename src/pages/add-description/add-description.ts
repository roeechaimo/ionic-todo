import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-add-description',
    templateUrl: 'add-description.html'
})
export class AddDescriptionPage {

    public todoTitle: string;
    public imageData: any;

    formCreateTodoDescription: FormGroup;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                private camera: Camera,
                private formBuilder: FormBuilder) {
        this.formCreateTodoDescription = this.formBuilder.group({
            todoDescription: [ '', [ Validators.minLength(2), Validators.maxLength(30) ] ]
        });
    }

    ionViewWillEnter() {
        this.todoTitle = this.navParams.get('title');
        let todoDescription = this.navParams.get('description');
        if (todoDescription) {
            this.formCreateTodoDescription.controls[ 'todoDescription' ].setValue(todoDescription);
        }
    }

    validateItemDescription() {
        return this.formCreateTodoDescription.controls.todoDescription.valid;
    }

    dismissModal() {
        if (!this.validateItemDescription()) {
            return false;
        }
        this.viewCtrl.dismiss(this.formCreateTodoDescription.get('todoDescription').value);
    }

    addImage(){
        console.log('shit');
        const options: CameraOptions = {
            quality: 30,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageData = base64Image;
        }, (err) => {
            console.log(err);
        });
    }



}

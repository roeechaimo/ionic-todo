import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Todo } from '../../models/todo/todo.model';
import { ToastService } from '../../shared/services/toast-service.service';


@IonicPage()
@Component({
    selector: 'page-add-description',
    templateUrl: 'add-description.html'
})
export class AddDescriptionPage {

    private options: CameraOptions = {
        quality: 30,
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        allowEdit: true,
        targetHeight: 600,
        targetWidth: 600
    };

    public todoTitle: string;
    public imageData: any;

    private todo: Todo;
    private ionicImageUrl: string = '../../assets/imgs/logo.png';
    private noImage: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

    formCreateTodoDescription: FormGroup;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                private camera: Camera,
                private formBuilder: FormBuilder,
                private toastService: ToastService,
                private platform: Platform,
                public translate: TranslateService) {
        this.ionViewWillEnter();
    }

    ionViewWillEnter() {
        this.formCreateTodoDescription = this.formBuilder.group({
            todoDescription: [ '', [ Validators.minLength(2), Validators.maxLength(30) ] ]
        });
        this.todo = this.navParams.data;
        this.todoTitle = this.navParams.get('title');
        let imageUrl = this.navParams.get('imageUrl');
        this.imageData = imageUrl ? imageUrl : this.noImage;
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
        this.todo.description = this.formCreateTodoDescription.get('todoDescription').value;
        this.todo.imageUrl = this.imageData;
        this.viewCtrl.dismiss(this.todo);
    }

    addImage() {
        if (!this.platform.is('cordova')) {
            this.imageData = this.ionicImageUrl;
            this.toastService.presentToast('Not a mobile device', 3000, 'bottom');
            return false;
        }

        this.camera.getPicture(this.options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageData = base64Image;
            this.camera.cleanup();
        }, (err) => {
            this.toastService.presentToast(err, 3000, 'bottom');
        });
    }


}

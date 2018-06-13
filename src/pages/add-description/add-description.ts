import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-add-description',
    templateUrl: 'add-description.html'
})
export class AddDescriptionPage {

    public todoTitle: string;
    formCreateTodoDescription: FormGroup;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
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


}

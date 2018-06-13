import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models/todo/todo.model';
import { AddDescriptionPage } from '../add-description/add-description';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public todos: Todo[] = [];
    formCreateTodo: FormGroup;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private formBuilder: FormBuilder,
                public modalCtrl: ModalController) {
        this.formCreateTodo = this.formBuilder.group({
            todoTitle: [ '', [ Validators.minLength(2), Validators.maxLength(10) ] ]
        });
    }

    addTodo() {
        if (!this.validateItemTitle()) {
            return false;
        }
        let title: string = this.formCreateTodo.get('todoTitle').value;
        let todo: Todo = { 'title': title, 'description': '', 'done': false };
        this.todos.push(todo);
        this.formCreateTodo.controls[ 'todoTitle' ].setValue('');
    }

    toggleTodoDone(todo: Todo) {
        todo.done = !todo.done;
    }

    validateItemTitle() {
        return this.formCreateTodo.controls.todoTitle.valid;
    }

    createDescription(item: ItemSliding, todo: Todo) {
        let descriptionModal = this.modalCtrl.create(AddDescriptionPage, todo, { showBackdrop: true });
        descriptionModal.onDidDismiss(data => {
            if (typeof data !== 'undefined') {
                todo.description = data;
            }
            console.log(todo);
        });
        descriptionModal.present();

        item.close();
    }


}

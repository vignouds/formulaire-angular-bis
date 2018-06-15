import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import User from "../model/User";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm: FormGroup;

  prenomCtrl: FormControl;
  emailCtrl: FormControl;

  user: User = new User();

  constructor(fb: FormBuilder) {

    this.prenomCtrl = fb.control('', [Validators.required]);
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);

    this.userForm = fb.group({
      prenom: this.prenomCtrl,
      email: this.emailCtrl,
    });
  }

  handleClear() {
    this.user.nom = '';
    this.user.prenom = '';
    this.user.telephone = '';
    this.user.email = '';
    this.user.connaissances = '';
  }

  handleSubmit() {
    console.log(this.user);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  public profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      dateBk: ['2018-08-21T00:00:00', Validators.required]
      // dateCreated: new Date()
    });
  }

  test() {
    console.log(JSON.stringify(this.profileForm.value));
  }

  saveData() {
    console.log('Save was Executed with a disabled button');
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  userForm: FormGroup

  constructor(private userService:UserService, private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this._formInit()
  }

  private _formInit() {
    this.userForm = this.formBuilder.group({
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      queueNumber: new FormControl('', Validators.required)
    })
  }

  submitData() {
    const newUser = {
      name: this.userForm.value.name,
      address: this.userForm.value.address,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      queueNumber: this.userForm.value.queueNumber
    }

    console.log('newUser', newUser)
    this.userService.createUser(newUser).subscribe((result) => {
      console.log('result nya', result)
    })
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }
}

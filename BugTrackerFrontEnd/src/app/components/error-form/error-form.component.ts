import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/error';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnInit {
  submitted = false;
  error: Error = new Error();
  name:string;

  constructor(private httpService: ServiceService, private router: Router ) { }

  ngOnInit(): void {
  }

  newUser():void{
    this.submitted=false;
    this.error=new Error();
  }

  save(){
    this.httpService.createError(this.error).subscribe(
      data => {
        console.log(data);
        this.error = new Error();
        //this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit(){
    console.log('in onSubmit');
    this.submitted = true;
    this.save();
  }

}

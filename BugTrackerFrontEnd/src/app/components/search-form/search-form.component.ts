import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { Error } from 'src/app/error';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  //@Input() error : Error[];
  errors: Observable< Error[]> ;
error: Error= new Error();
name: string ;


  constructor(private serviceService: ServiceService, public router: Router) { }

  ngOnInit(): void {
this.reloadData();

  }
  reloadData(){
    this.errors=this.serviceService.getErrorList();
  }

  searchError(): void {
    this.serviceService.getErrorByName(this.name).subscribe( 
      error => {
        this.errors = error;
        console.log('error: ' + error);
        this.error =error;
        var array = error;
        const object = Object.assign({}, ...array);
        console.log(object); //object
        console.log(this.error); //array
        console.log(object.errorId);
       
      },
      error => {console.log(error);
      })
    }
    onSubmit(){
      console.log('in error-list onSubmit');
      this.searchError();
    }
    
   // this.router.navigateByUrl('/');
  }

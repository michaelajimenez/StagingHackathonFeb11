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
  // errors: Observable<Error[]> ;
errors:Error[] = Array();
error: Error= new Error();
name: string ;


  constructor(private serviceService: ServiceService, public router: Router) { }

  ngOnInit(): void {
this.reloadData();

  }
  reloadData(){
    // this.errors=this.serviceService.getErrorList();

    this.serviceService.getErrorList().subscribe(
      (response: any) => {
        console.log(response);

        for(let i in response) {
          let obj:Error = new Error();
          obj.errorID = response[i].errorID;
          obj.userName = response[i].userName;
          obj.submitterFirstName = response[i].submitterFirstName;
          obj.submitterLastName = response[i].submitterLastName;
          obj.description = response[i].description;
          obj.solution = response[i].solution;

          this.errors.push(obj);
        }
        console.log(this.errors);
      }
    )
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

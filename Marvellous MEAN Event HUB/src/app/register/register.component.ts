import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl , FormBuilder , FormGroup,NgControlStatusGroup,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit 
{
  signupForm!: FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient,private router:Router,private api: EventService )
  {}

  ngOnInit(): void {
      
    this.signupForm = this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  get f() :{[key:string]:AbstractControl}{
    return this.signupForm.controls;
  }
  onSubmit()
  {
    if(this.signupForm.valid)
    {
      console.log(this.signupForm.value);


    this.http.post<any>('http://localhost:3000/api/signup',this.signupForm.value).subscribe((res)=>{
      console.log(res)
      alert("Signup Successsfully");
      this.signupForm.reset();
      this.router.navigate(['/login']);

    },(err:any)=>
    {
      if(err.status === 400)
      {
        alert("User already exists with this creditional");
        console.log(err);
      }
      console.log('Signup Error');
    }
  );
  }
 }

}


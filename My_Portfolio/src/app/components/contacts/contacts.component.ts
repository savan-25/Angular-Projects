import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../../Shared/api.service';
@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
   
  public contactForm:FormGroup;
  public loading = false;
  public successMessage = '';
  constructor(private fb:FormBuilder , private contactservice:ApiService)
  {
    this.contactForm = this.fb.group(
      {
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        message:['',Validators.required]
      }
    );
  }

 ngOnInit(): void {}

  // Submit the form
  onSubmit(): void {
    if(this.contactForm.invalid) return;

     this.loading = true;
    this.contactservice.sendMessage(this.contactForm.value).subscribe(
      {
        next:() => {
           this.successMessage = 'Message sent successfully!';
        this.contactForm.reset();
        this.loading = false;
        }
      }
    );
  }

}

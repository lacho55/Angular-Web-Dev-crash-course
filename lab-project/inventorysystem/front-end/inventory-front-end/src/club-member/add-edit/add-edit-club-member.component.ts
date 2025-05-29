import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClubMemberService } from '../service/club-member.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-club-member',
  templateUrl: './add-edit-club-member.component.html',
  styleUrls: ['./add-edit-club-member.component.css'],
  imports: [
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AddClubMemberComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clubMemberService: ClubMemberService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Use fb only after it's injected
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.clubMemberService.create(this.form.value)
      .subscribe(() => this.router.navigate(['/club-members']));
  }
}

import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClubMember } from '../model/clubMember';
import { ClubMemberService } from '../service/club-member.service';
import { first } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'club-member',
  templateUrl: 'club-member-list.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  styleUrl: 'club-member-list.component.css'
})
export class ClubMemberListComponent implements OnInit {
  clubMembers!: ClubMember[];

  constructor(private clubMemberService: ClubMemberService,
              private cdRef: ChangeDetectorRef,
              private router: Router) {}

  public ngOnInit(): void {
    this.clubMemberService.getAll()
      .pipe(first())
      .subscribe(users => {
        this.clubMembers = users;
        console.log('---->', this.clubMembers);
        this.cdRef.detectChanges();
      });
  }

  public deleteUser(id: string) {
    const user = this.clubMembers.find(x => x.id === id);
    if (!user) return;

    this.clubMemberService.delete(id)
      .pipe(first())
      .subscribe(() => {
        this.clubMembers = this.clubMembers.filter(x => x.id !== id); // key line
        this.cdRef.detectChanges();
      });
  }

  public goAdd(): void {
    this.router.navigate(['/club-members/add']);
  }
}

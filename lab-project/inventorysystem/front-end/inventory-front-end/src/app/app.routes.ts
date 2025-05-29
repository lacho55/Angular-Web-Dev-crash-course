import { Routes } from '@angular/router';
import { ClubMemberListComponent } from '../club-member/list/club-member-list.component';
import { AddClubMemberComponent } from '../club-member/add-edit/add-edit-club-member.component';

export const routes: Routes = [
  { path: 'club-members', component: ClubMemberListComponent },
  { path: 'club-members/add', component: AddClubMemberComponent },
 // { path: '', redirectTo: 'club-members', pathMatch: 'full',  },
];

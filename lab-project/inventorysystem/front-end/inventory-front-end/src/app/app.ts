import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClubMemberListComponent } from '../club-member/list/club-member-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClubMemberListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'inventory-front-end';
}

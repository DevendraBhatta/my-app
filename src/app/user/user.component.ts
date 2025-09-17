import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';
 

interface Users {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({ required: true }) user!: Users;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

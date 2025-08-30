import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';

// type Users = {
//   id: string;
//   avatar: string;
//   name: string;

// }

interface Users {
  id: string;
  avatar: string;
  name: string;
}


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  @Input({ required: true }) user!: Users;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

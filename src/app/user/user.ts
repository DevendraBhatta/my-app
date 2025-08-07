import { Component, Input,input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})


export class User {
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

  avatar  = input<string>( );

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
  onSelectUser() {
  }
}

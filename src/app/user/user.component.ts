import {Component, EventEmitter, Input, Output} from '@angular/core';

interface UserInterface {
  name: string;
  age: string;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: UserInterface;

  @Output() userEvent: EventEmitter<UserInterface>;

  constructor() {
    this.userEvent = new EventEmitter<UserInterface>();
    this.user = {} as UserInterface;
  }

  sendUserEvent(): void {
    this.userEvent.emit(this.user);
  }
}

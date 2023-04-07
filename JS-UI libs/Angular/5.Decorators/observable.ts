observable

import ngIniit
import { Observable } from 'rxjs'
import { HabitService } from DataTransfer... 

export class HabitList implement OnInit {

habits = []

// inject data
constructor(private habitService: HabitService) {}

// after constructor, subscribe to the getData method
// so when that changes getHabits is called
ngOnInit(): void {
  this.habitService.getHabits().subscribe(habits => {
    this.habits = habits;
  })
}

// we can call and get all habits
getHabits(): observable<any> {
  return of(this.habits);
}

/// use an async pipe ... 
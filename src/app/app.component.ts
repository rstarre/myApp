import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {AppState, ChangeVariable} from "./app.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {
  }

  @Select(AppState.getVariable)
  variable: Observable<any> | undefined;

  doThing() {
    this.store.dispatch(new ChangeVariable())
  }
}

// login en logout
// als docent met tabel studenten en cijfers enz en knop om student toe te voegen
// pagina om studenten toe te voegen

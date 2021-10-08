import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";

export class AppStateModel {
  variable: any
}

export class ChangeVariable {
  static readonly type = '[APP] change variable';
}

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    variable: 'default'
  }
})
@Injectable()
export class AppState {

  @Selector()
  static getVariable(state: AppStateModel) {
    return state.variable;
  }

  @Action(ChangeVariable)
  changeVariable(stateContext: StateContext<AppStateModel>) {
    stateContext.patchState({variable: 'new value'})
  }

}

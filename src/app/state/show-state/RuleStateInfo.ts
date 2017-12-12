export class RuleStateInfo {
  private _machine: string;
  private _container: string;
  private _rule: string;
  private _modules: string;

  constructor(machine: string, container: string, rule: string, modules: string) {
    this._machine = machine;
    this._container = container;
    this._rule = rule;
    this._modules = modules;
  }

  get machine(): string {
    return this._machine;
  }

  get container(): string {
    return this._container;
  }

  get rule(): string {
    return this._rule;
  }

  get modules(): string {
    return this._modules;
  }
}

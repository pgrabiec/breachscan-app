export class RuleInfo {
  name: string;
  id: string;
  type: string;
  input: string;
  output: string;

  constructor(name: string, id: string, type: string, input: string, output: string) {
    this.name = name;
    this.id = id;
    this.type = type;
    this.input = input;
    this.output = output;
  }
}

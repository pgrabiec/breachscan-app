export class RuleDetails {
  name: string;
  id: string;
  description: string;
  type: string;
  properties: { [index: string]: string };


  constructor(name: string, id: string, description: string, type: string, properties: { [p: string]: string }) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.type = type;
    this.properties = properties;
  }
}

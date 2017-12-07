// Generated using typescript-generator version 1.30.381 on 2017-12-07 15:45:51.

export namespace Breachscan {

  export class Machine {
    name: string;
    address: string;
    description: string;
    containers: { [index: string]: Container };
  }

  export class MachineId {
    address: string;
    name: string;
  }

  export class Container {
    id: string;
    name: string;
    description: string;
    rules: MonitoringRules;
  }

  export class ContainerId {
    id: string;
    name: string;
  }

  export class MonitoringRules {
    interaction: { [index: string]: InteractionAssignment };
    detection: { [index: string]: DetectionAssignment };
    reaction: { [index: string]: ReactionAssignment };
  }

  export class DetectionAssignment {
    active: boolean;
    configuration: DetectionRule;
  }

  export class InteractionAssignment {
    active: boolean;
    configuration: InteractionRule;
  }

  export class ReactionAssignment {
    active: boolean;
    configuration: ReactionRule;
  }

  export class DetectionEvent {
    address: string;
    id: string;
    type: DetectionEventType;
    properties: { [index: string]: string };
  }

  export class DetectionRule {
    id: string;
    name: string;
    description: string;
    type: DetectionRuleType;
    properties: { [index: string]: string };
  }

  export class DetectionRuleId {
    id: string;
    name: string;
  }

  export class ExecDetectionRuleProperties {
    exec_name: string;
  }

  export class InteractionRequest {
    module: string;
    machine: string;
    container: string;
    rule: string;
  }

  export class InteractionData {
    address: string;
    id: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class ExecDataProperties {
    machine_address: string;
    container_id: string;
    command: string;
    timestamp: number;
  }

  export class ExecEventProperties extends ExecDataProperties {
  }

  export class InteractionRule {
    id: string;
    name: string;
    description: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class InteractionRuleId {
    id: string;
    name: string;
  }

  export class ReactionRule {
    id: string;
    name: string;
    description: string;
    type: ReactionType;
    properties: { [index: string]: string };
  }

  export class ReactionRuleId {
    id: string;
    name: string;
  }

  export type DetectionEventType = "EVENT_EXEC";

  export type DetectionRuleType = "DETECT_EXEC_NAME";

  export type InteractionDataType = "DATA_EXEC" | "DATA_FILE_CHANGED";

  export type ReactionType = "REACTION_STOP_CONTAINER";

}

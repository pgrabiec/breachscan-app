// Generated using typescript-generator version 1.30.381 on 2017-12-12 19:23:48.

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

  export class ExecDetectionEvent extends DetectionEvent {
  }

  export class DetectionRule {
    id: string;
    name: string;
    description: string;
    type: DetectionRuleType;
    input: InteractionDataType;
    output: DetectionEventType;
    properties: { [index: string]: string };
  }

  export class ExecDetectionRule extends DetectionRule {
    execName: string;
  }

  export class InteractionData {
    address: string;
    id: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class ExecInteractionData extends InteractionData {
  }

  export class InteractionRule {
    id: string;
    name: string;
    description: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class ReactionRule {
    id: string;
    name: string;
    description: string;
    type: ReactionRuleType;
    input: DetectionEventType;
    output: ReactionType;
    properties: { [index: string]: string };
  }

  export class AnyInputEventReactionRule extends ReactionRule {
  }

  export class ReactionRuleImplementation {
  }

  export class ErrorResponse {
    message: string;
  }

  export class InteractionRequest {
    module: string;
    machine: string;
    container: string;
    rule: string;
  }

  export class RuleAssignmentRequest {
    active: boolean;
    rule: string;
  }

  export class BreachScanState {
    machines: { [index: string]: MachineState };
    interactionModulesState: InteractionModulesState;
    detectionModulesState: DetectionModulesState;
    reactionModulesState: ReactionModulesState;
  }

  export class DetectionModulesState {
    detectionModulesOnline: string[];
  }

  export class InteractionModulesState {
    interactionModulesOnline: string[];
    interactionRequests: InteractionRequestState[];
  }

  export class InteractionRequestState {
    interactionModuleId: string;
    machineAddress: string;
    containerId: string;
    interactionRuleId: string;
    interactionRequestId: string;
  }

  export class MachineState {
    machineAddress: string;
    containers: { [index: string]: ContainerState };
  }

  export class ContainerState {
    containerId: string;
    interactions: { [index: string]: InteractionRuleState };
    detections: { [index: string]: DetectionRuleState };
    reactions: { [index: string]: ReactionRuleState };
  }

  export class DetectionRuleState {
    detectionRuleId: string;
    detectionModules: string[];
  }

  export class InteractionRuleState {
    interactionRuleId: string;
    interactionModules: string[];
  }

  export class ReactionRuleState {
    reactionRuleId: string;
    reactionModules: string[];
  }

  export class ReactionModulesState {
    reactionModulesOnline: string[];
  }

  export class ImmutableUtils {
  }

  export type DetectionEventType = 'EVENT_EXEC';

  export type DetectionRuleType = 'DETECT_EXEC_NAME';

  export type InteractionDataType = 'DATA_EXEC';

  export type ReactionRuleType = 'REACTION_ANY_INPUT_EVENT';

  export type ReactionType = 'REACTION_RESTART_CONTAINER';
}

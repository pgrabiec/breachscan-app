// Generated using typescript-generator version 1.30.381 on 2017-12-16 20:37:02.

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
    timestamp: number;
    address: string;
    id: string;
    type: DetectionEventType;
    properties: { [index: string]: string };
    cause: string;
  }

  export class ExecDetectionEvent extends DetectionEvent {
  }

  export class FilesystemDetectionEvent extends DetectionEvent {
  }

  export class ProcessDetectionEvent extends DetectionEvent {
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

  export class FilesystemDetectionRule extends DetectionRule {
    changeType: FilesystemChange;
    path: string;
  }

  export class ProcessesDetectionRule extends DetectionRule {
    command: string;
  }

  export class InteractionData {
    timestamp: number;
    address: string;
    id: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class ExecInteractionData extends InteractionData {
  }

  export class FilesystemInteractionData extends InteractionData {
  }

  export class ProcessInteractionData extends InteractionData {
  }

  export class InteractionRule {
    id: string;
    name: string;
    description: string;
    type: InteractionDataType;
    properties: { [index: string]: string };
  }

  export class FilesystemInteractionRule extends InteractionRule {
  }

  export class ProcessesInteractionRule extends InteractionRule {
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

  export class ReactionEvent {
    timestamp: number;
    machine: string;
    container: string;
    rule: string;
    reaction: ReactionType;
    cause: string;
  }

  export class AnyInputEventReactionRule extends ReactionRule {
  }

  export class ErrorResponse {
    message: string;
  }

  export class Identifier {
    id: string;
    name: string;
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

  export class DetectionEventInfo {
    event: DetectionEvent;
    machine: Identifier;
    container: Identifier;
  }

  export class InteractionDataInfo {
    data: InteractionData;
    machine: Identifier;
    container: Identifier;
  }

  export class ReactionEventInfo {
    event: ReactionEvent;
    machine: Identifier;
    container: Identifier;
  }

  export class MonitoringState {
    interaction: RuleMonitoringState[];
    detection: RuleMonitoringState[];
    reaction: RuleMonitoringState[];
  }

  export class RuleMonitoringState {
    machine: Identifier;
    container: Identifier;
    rule: Identifier;
    modules: string[];
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

  export class Function<T, R> {
  }

  export type DetectionEventType = 'EVENT_EXEC' | 'EVENT_FILESYSTEM' | 'EVENT_PROCESS';

  export type DetectionRuleType = 'DETECT_EXEC_NAME' | 'DETECT_FILE_CHANGE' | 'DETECT_PROCESS';

  export type InteractionDataType = 'DATA_EXEC' | 'DATA_PROCESSES' | 'DATA_FILESYSTEM';

  export type FilesystemChange = 'MODIFIED' | 'CREATED' | 'DELETED';

  export type ReactionRuleType = 'REACTION_ANY_INPUT_EVENT';

  export type ReactionType = 'REACTION_RESTART_CONTAINER' | 'REACTION_STOP_CONTAINER' | 'REACTION_KILL_CONTAINER';

}

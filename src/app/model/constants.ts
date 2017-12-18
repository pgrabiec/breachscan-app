import {Breachscan} from './breachscan-api';
import DetectionEventType = Breachscan.DetectionEventType;
import ReactionRuleType = Breachscan.ReactionRuleType;
import FilesystemChange = Breachscan.FilesystemChange;
import InteractionDataType = Breachscan.InteractionDataType;
import DetectionRuleType = Breachscan.DetectionRuleType;
import ReactionType = Breachscan.ReactionType;

export class Constants {
  static detectionEventTypes: DetectionEventType[] = ['EVENT_EXEC', 'EVENT_FILESYSTEM', 'EVENT_PROCESS'];
  static detectionRuleTypes: DetectionRuleType[] = ['DETECT_EXEC_NAME', 'DETECT_FILE_CHANGE', 'DETECT_PROCESS'];
  static interactionDataTypes: InteractionDataType[] = ['DATA_EXEC', 'DATA_PROCESSES', 'DATA_FILESYSTEM'];
  static filesystemChanges: FilesystemChange[] = ['MODIFIED', 'CREATED', 'DELETED'];
  static reactionRuleTypes: ReactionRuleType[] = ['REACTION_ANY_INPUT_EVENT'];
  static reactionTypes: ReactionType[] = ['REACTION_RESTART_CONTAINER', 'REACTION_STOP_CONTAINER', 'REACTION_KILL_CONTAINER'];
}

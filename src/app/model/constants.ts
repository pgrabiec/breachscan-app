import {Breachscan} from './breachscan-api';
import DetectionEventType = Breachscan.DetectionEventType;
import FilesystemChange = Breachscan.FilesystemChange;
import ReactionType = Breachscan.ReactionType;

export class Constants {
  static detectionEventTypes: DetectionEventType[] = ['EVENT_EXEC', 'EVENT_FILESYSTEM', 'EVENT_PROCESS'];
  static filesystemChanges: FilesystemChange[] = ['MODIFIED', 'CREATED', 'DELETED'];
  static reactionTypes: ReactionType[] = ['REACTION_RESTART_CONTAINER', 'REACTION_STOP_CONTAINER', 'REACTION_KILL_CONTAINER'];
}

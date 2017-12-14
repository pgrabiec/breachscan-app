import {Breachscan} from '../../model/breachscan-api';
import RuleMonitoringState = Breachscan.RuleMonitoringState;

export class RuleMonitoringStateInfo extends RuleMonitoringState {
  type: RuleType;
}

export type RuleType = 'Interaction' | 'Detection' | 'Reaction';

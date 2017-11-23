import {MonitoringConfiguration} from '../monitoring/monitoring-configuration';
import {Container} from './container/container';

export class Machine {
  address: string;
  monitoring: MonitoringConfiguration;
  containers: Map<string, Container>;
}

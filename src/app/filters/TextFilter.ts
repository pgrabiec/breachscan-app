import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Breachscan} from '../model/breachscan-api';
import RuleMonitoringState = Breachscan.RuleMonitoringState;

@Pipe({
  name: 'filter'
})

@Injectable()
export class RuleStateFilter implements PipeTransform {
  transform(items: RuleMonitoringState[],
            machine: string,
            container: string,
            rule: string,
            modules: number): RuleMonitoringState[] {

    if (!items) {
      return [];
    }

    return items.filter(ruleState => {
      if (machine != null) {
        if (ruleState.machine.name != null) {
          if (!ruleState.machine.name.toLowerCase().includes(machine.toLowerCase())) {
            return false;
          }
        }
      }

      if (container != null) {
        if (ruleState.container.name != null) {
          if (!ruleState.container.name.toLowerCase().includes(container.toLowerCase())) {
            return false;
          }
        }
      }

      if (rule != null) {
        if (ruleState.rule.name != null) {
          if (!ruleState.rule.name.toLowerCase().includes(rule.toLowerCase())) {
            return false;
          }
        }
      }

      if (modules != null) {
        return ruleState.modules.length >= modules;
      }

      return true;
    });
  }
}

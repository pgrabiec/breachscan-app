import {Breachscan} from '../../../../../model/breachscan-api';
import InteractionRule = Breachscan.InteractionRule;
import {RuleInfo} from './rule-info';
import DetectionRule = Breachscan.DetectionRule;
import ReactionRule = Breachscan.ReactionRule;

export class RuleMapper {
  static interactionInfo(interactionRule: InteractionRule): RuleInfo {
    return new RuleInfo(
      interactionRule.name,
      interactionRule.id,
      interactionRule.type,
      'DOCKER_DATA',
      interactionRule.type
    );
  }

  static detectionInfo(detectionRule: DetectionRule): RuleInfo {
    return new RuleInfo(
      detectionRule.name,
      detectionRule.id,
      detectionRule.type,
      detectionRule.input,
      detectionRule.output
    );
  }

  static reactionInfo(reactionRule: ReactionRule): RuleInfo {
    return new RuleInfo(
      reactionRule.name,
      reactionRule.id,
      reactionRule.type,
      reactionRule.input,
      reactionRule.output
    );
  }
}

import {Breachscan} from '../../../../model/breachscan-api';
import {RuleDetails} from './RuleDetails';
import InteractionRule = Breachscan.InteractionRule;
import DetectionRule = Breachscan.DetectionRule;
import ReactionRule = Breachscan.ReactionRule;

export class RuleDetailsMapper {
  static createInteractionDetails(rule: InteractionRule) {
    return new RuleDetails(
      rule.name,
      rule.id,
      rule.description,
      rule.type,
      rule.properties
    );
  }

  static createDetectionDetails(rule: DetectionRule) {
    return new RuleDetails(
      rule.name,
      rule.id,
      rule.description,
      rule.type,
      rule.properties
    );
  }

  static createReactionDetails(rule: ReactionRule) {
    return new RuleDetails(
      rule.name,
      rule.id,
      rule.description,
      rule.type,
      rule.properties
    );
  }

  static createInteraction(rule: RuleDetails) {
    const newRule = new InteractionRule();

    newRule.name = rule.name;
    newRule.id = rule.id;
    newRule.description = rule.description;
    newRule.properties = rule.properties;

    return newRule;
  }

  static createDetection(rule: RuleDetails) {
    const newRule = new DetectionRule();

    newRule.name = rule.name;
    newRule.id = rule.id;
    newRule.description = rule.description;
    newRule.properties = rule.properties;

    return newRule;
  }

  static createReaction(rule: RuleDetails) {
    const newRule = new ReactionRule();

    newRule.name = rule.name;
    newRule.id = rule.id;
    newRule.description = rule.description;
    newRule.properties = rule.properties;

    return newRule;
  }
}

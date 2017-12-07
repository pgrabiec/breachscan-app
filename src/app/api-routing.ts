export class ApiRouting {
  // Placeholders

  static machineAddressName = 'machineAddress';
  static machineAddressPlaceholder = ':' + ApiRouting.machineAddressName;

  static containerIdName = 'containerId';
  static containerIdPlaceholder = ':' + ApiRouting.containerIdName;

  static interactionRuleIdName = 'interactionRuleId';
  static interactionRuleIdPlaceholder = ':' + ApiRouting.interactionRuleIdName;

  static detectionRuleIdName = 'detectionRuleId';
  static detectionRuleIdPlaceholder = ':' + ApiRouting.detectionRuleIdName;

  static reactionRuleIdName = 'reactionRuleId';
  static reactionRuleIdPlaceholder = ':' + ApiRouting.reactionRuleIdName;

  // Endpoints

  static configuration = '/configuration';
  static confMachines = ApiRouting.configuration + '/machines';
  static confMachineAddress = ApiRouting.confMachines + '/' + ApiRouting.machineAddressPlaceholder;
  static confContainers = ApiRouting.confMachineAddress + '/containers';
  static confContainerId = ApiRouting.confContainers + '/' + ApiRouting.containerIdPlaceholder;
  static confContainerRules = ApiRouting.confContainerId + '/rules';

  static confContainerInteractions = ApiRouting.confContainerRules + '/interactions';
  static confContainerInteractionId = ApiRouting.confContainerInteractions + '/' + ApiRouting.interactionRuleIdPlaceholder;
  static confContainerDetections = ApiRouting.confContainerRules + '/detections';
  static confContainerDetectionId = ApiRouting.confContainerDetections + '/' + ApiRouting.detectionRuleIdPlaceholder;
  static confContainerReactions = ApiRouting.confContainerRules + '/reactions';
  static confContainerReactionId = ApiRouting.confContainerReactions + '/' + ApiRouting.reactionRuleIdPlaceholder;

  static confRules = ApiRouting.configuration + '/rules';
  static confInteractions = ApiRouting.confRules + '/interactions';
  static confInteractionId = ApiRouting.confInteractions + '/' + ApiRouting.interactionRuleIdPlaceholder;
  static confDetections = ApiRouting.confRules + '/detections';
  static confDetectionId = ApiRouting.confDetections + '/' + ApiRouting.detectionRuleIdPlaceholder;
  static confReactions = ApiRouting.confRules + '/reactions';
  static confReactionId = ApiRouting.confReactions + '/' + ApiRouting.reactionRuleIdPlaceholder;

  static confDefinitions = ApiRouting.configuration + '/definitions';
  static confDefinitionsRules = ApiRouting.configuration + '/rules';
  static confDefinitionsInteractions = ApiRouting.confDefinitionsRules + '/interactions';
  static confDefinitionsDetections = ApiRouting.confDefinitionsRules + '/detections';
  static confDefinitionsReactions = ApiRouting.confDefinitionsRules + '/reactions';

  static state = '/state';
  static stateMachines = ApiRouting.state + '/machines';
  static stateMachineAddress = ApiRouting.stateMachines + '/' + ApiRouting.machineAddressPlaceholder;
  static stateContainers = ApiRouting.stateMachineAddress + '/containers';
  static stateContainerId = ApiRouting.stateContainers + '/' + ApiRouting.containerIdPlaceholder;
  static stateContainerInteractions = ApiRouting.stateContainerId + '/interactions';
  static stateContainerInteractionId = ApiRouting.stateContainerInteractions + '/' + ApiRouting.interactionRuleIdPlaceholder;
  static stateContainerDetections = ApiRouting.stateContainerId + '/detections';
  static stateContainerDetectionId = ApiRouting.stateContainerDetections + '/' + ApiRouting.detectionRuleIdPlaceholder;
  static stateContainerReactions = ApiRouting.stateContainerId + '/reactions';
  static stateContainerReactionId = ApiRouting.stateContainerReactions + '/' + ApiRouting.reactionRuleIdPlaceholder;

  static stateModules = ApiRouting.state + '/modules';
  static stateModulesInteraction = ApiRouting.stateModules + '/interaction';
  static stateModulesDetection = ApiRouting.stateModules + '/detection';
  static stateModulesReaction = ApiRouting.stateModules + '/reaction';

  // Path replacement utils

  static replaceMachineAddress(routingPath: string, machineAddress: string): string {
    return routingPath.replace(ApiRouting.machineAddressPlaceholder, machineAddress);
  }

  static replaceContainerId(routingPath: string, containerId: string): string {
    return routingPath.replace(ApiRouting.containerIdPlaceholder, containerId);
  }

  static replaceInteractionRuleId(routingPath: string, interactionRuleId: string): string {
    return routingPath.replace(ApiRouting.interactionRuleIdPlaceholder, interactionRuleId);
  }

  static replaceDetectionRuleId(routingPath: string, detectionRuleId: string): string {
    return routingPath.replace(ApiRouting.detectionRuleIdPlaceholder, detectionRuleId);
  }

  static replaceReactionRuleId(routingPath: string, reactionRuleId: string): string {
    return routingPath.replace(routingPath, reactionRuleId);
  }

  static replaceContainer(routingPath: string, machineAddress: string, containerId: string): string {
    return ApiRouting.replaceMachineAddress(routingPath, machineAddress)
      .replace(ApiRouting.containerIdPlaceholder, containerId);
  }

  static replaceContainerInteraction(routingPath: string, machineAddress: string, containerId: string, interactionRuleId): string {
    return ApiRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(ApiRouting.interactionRuleIdPlaceholder, interactionRuleId);
  }

  static replaceContainerDetection(routingPath: string, machineAddress: string, containerId: string, detectionRuleId): string {
    return ApiRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(ApiRouting.detectionRuleIdPlaceholder, detectionRuleId);
  }

  static replaceContainerReaction(routingPath: string, machineAddress: string, containerId: string, reactionRuleId): string {
    return ApiRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(ApiRouting.reactionRuleIdPlaceholder, reactionRuleId);
  }
}

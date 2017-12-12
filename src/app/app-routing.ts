export class AppRouting {
  // Placeholders

  static machineAddressName = 'machineName';
  static machineAddressPlaceholder = ':' + AppRouting.machineAddressName;

  static containerIdName = 'containerName';
  static containerIdPlaceholder = ':' + AppRouting.containerIdName;

  static interactionRuleIdName = 'interactionRuleId';
  static interactionRuleIdPlaceholder = ':' + AppRouting.interactionRuleIdName;

  static detectionRuleIdName = 'detectionRuleId';
  static detectionRuleIdPlaceholder = ':' + AppRouting.detectionRuleIdName;

  static reactionRuleIdName = 'reactionRuleId';
  static reactionRuleIdPlaceholder = ':' + AppRouting.reactionRuleIdName;

  // Endpoints

  static home = 'home';
  static configuration = 'configuration';
  static confMachines = AppRouting.configuration + '/machines';
  static confAddMachine = AppRouting.confMachines + '/add';
  static confMachineAddress = AppRouting.confMachines + '/' + AppRouting.machineAddressPlaceholder;
  static confContainers = AppRouting.confMachineAddress + '/containers';
  static confAddContainer = AppRouting.confContainers + '/add';
  static confContainerId = AppRouting.confContainers + '/' + AppRouting.containerIdPlaceholder;
  static confContainerRules = AppRouting.confContainerId + '/rules';

  static confContainerInteractions = AppRouting.confContainerRules + '/interactions';
  static confContainerAssignInteraction = AppRouting.confContainerInteractions + '/add';
  static confContainerInteractionId = AppRouting.confContainerInteractions + '/' + AppRouting.interactionRuleIdPlaceholder;
  static confContainerDetections = AppRouting.confContainerRules + '/detections';
  static confContainerAssignDetection = AppRouting.confContainerDetections + '/add';
  static confContainerDetectionId = AppRouting.confContainerDetections + '/' + AppRouting.detectionRuleIdPlaceholder;
  static confContainerReactions = AppRouting.confContainerRules + '/reactions';
  static confContainerAssignReaction = AppRouting.confContainerReactions + '/add';
  static confContainerReactionId = AppRouting.confContainerReactions + '/' + AppRouting.reactionRuleIdPlaceholder;

  static confRules = AppRouting.configuration + '/rules';
  static confInteractions = AppRouting.confRules + '/interactions';
  static confAddInteraction = AppRouting.confInteractions + '/add';
  static confInteractionId = AppRouting.confInteractions + '/' + AppRouting.interactionRuleIdPlaceholder;
  static confDetections = AppRouting.confRules + '/detections';
  static confAddDetection = AppRouting.confDetections + '/add';
  static confDetectionId = AppRouting.confDetections + '/' + AppRouting.detectionRuleIdPlaceholder;
  static confReactions = AppRouting.confRules + '/reactions';
  static confAddReaction = AppRouting.confReactions + '/add';
  static confReactionId = AppRouting.confReactions + '/' + AppRouting.reactionRuleIdPlaceholder;

  static confDefinitions = AppRouting.configuration + '/definitions';
  static confDefinitionsRules = AppRouting.configuration + '/rules';
  static confDefinitionsInteractions = AppRouting.confDefinitionsRules + '/interactions';
  static confDefinitionsDetections = AppRouting.confDefinitionsRules + '/detections';
  static confDefinitionsReactions = AppRouting.confDefinitionsRules + '/reactions';

  static state = 'state';
  static stateMachines = AppRouting.state + '/machines';
  static stateMachineAddress = AppRouting.stateMachines + '/' + AppRouting.machineAddressPlaceholder;
  static stateContainers = AppRouting.stateMachineAddress + '/containers';
  static stateContainerId = AppRouting.stateContainers + '/' + AppRouting.containerIdPlaceholder;
  static stateContainerInteractions = AppRouting.stateContainerId + '/interactions';
  static stateContainerInteractionId = AppRouting.stateContainerInteractions + '/' + AppRouting.interactionRuleIdPlaceholder;
  static stateContainerDetections = AppRouting.stateContainerId + '/detections';
  static stateContainerDetectionId = AppRouting.stateContainerDetections + '/' + AppRouting.detectionRuleIdPlaceholder;
  static stateContainerReactions = AppRouting.stateContainerId + '/reactions';
  static stateContainerReactionId = AppRouting.stateContainerReactions + '/' + AppRouting.reactionRuleIdPlaceholder;

  static stateModules = AppRouting.state + '/modules';
  static stateModulesInteraction = AppRouting.stateModules + '/interaction';
  static stateModulesDetection = AppRouting.stateModules + '/detection';
  static stateModulesReaction = AppRouting.stateModules + '/reaction';

  // Path replacement utils

  static replaceMachineAddress(routingPath: string, machineAddress: string): string {
    return routingPath.replace(AppRouting.machineAddressPlaceholder, machineAddress);
  }

  static replaceContainerId(routingPath: string, containerId: string): string {
    return routingPath.replace(AppRouting.containerIdPlaceholder, containerId);
  }

  static replaceInteractionRuleId(routingPath: string, interactionRuleId: string): string {
    return routingPath.replace(AppRouting.interactionRuleIdPlaceholder, interactionRuleId);
  }

  static replaceDetectionRuleId(routingPath: string, detectionRuleId: string): string {
    return routingPath.replace(AppRouting.detectionRuleIdPlaceholder, detectionRuleId);
  }

  static replaceReactionRuleId(routingPath: string, reactionRuleId: string): string {
    return routingPath.replace(AppRouting.reactionRuleIdPlaceholder, reactionRuleId);
  }

  static replaceContainer(routingPath: string, machineAddress: string, containerId: string): string {
    return AppRouting.replaceMachineAddress(routingPath, machineAddress)
      .replace(AppRouting.containerIdPlaceholder, containerId);
  }

  static replaceContainerInteraction(routingPath: string, machineAddress: string, containerId: string, interactionRuleId): string {
    return AppRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(AppRouting.interactionRuleIdPlaceholder, interactionRuleId);
  }

  static replaceContainerDetection(routingPath: string, machineAddress: string, containerId: string, detectionRuleId): string {
    return AppRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(AppRouting.detectionRuleIdPlaceholder, detectionRuleId);
  }

  static replaceContainerReaction(routingPath: string, machineAddress: string, containerId: string, reactionRuleId): string {
    return AppRouting.replaceContainer(routingPath, machineAddress, containerId)
      .replace(AppRouting.reactionRuleIdPlaceholder, reactionRuleId);
  }
}

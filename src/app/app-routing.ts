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
  static confContainerDetections = AppRouting.confContainerRules + '/detections';
  static confContainerAssignDetection = AppRouting.confContainerDetections + '/add';
  static confContainerReactions = AppRouting.confContainerRules + '/reactions';
  static confContainerAssignReaction = AppRouting.confContainerReactions + '/add';

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

  static state = 'state';

  static events = 'events';
  static interactionEvents = AppRouting.events + '/interaction';
  static detectionEvents = AppRouting.events + '/detection';
  static reactionEvents = AppRouting.events + '/reaction';

  // Path replacement utils

  static replaceMachineAddress(routingPath: string, machineAddress: string): string {
    return routingPath.replace(AppRouting.machineAddressPlaceholder, machineAddress);
  }

  static replaceContainer(routingPath: string, machineAddress: string, containerId: string): string {
    return AppRouting.replaceMachineAddress(routingPath, machineAddress)
      .replace(AppRouting.containerIdPlaceholder, containerId);
  }
}

// Generated using typescript-generator version 1.30.381 on 2017-12-07 01:00:03.

declare namespace Breachscan {

    interface Machine {
        name: string;
        address: string;
        description: string;
        containers: { [index: string]: Container };
    }

    interface MachineId {
        address: string;
        name: string;
    }

    interface Container {
        id: string;
        name: string;
        description: string;
        rules: MonitoringRules;
    }

    interface ContainerId {
        id: string;
        name: string;
    }

    interface MonitoringRules {
        interaction: { [index: string]: InteractionAssignment };
        detection: { [index: string]: DetectionAssignment };
        reaction: { [index: string]: ReactionAssignment };
    }

    interface DetectionAssignment {
        active: boolean;
        configuration: DetectionRule;
    }

    interface InteractionAssignment {
        active: boolean;
        configuration: InteractionRule;
    }

    interface ReactionAssignment {
        active: boolean;
        configuration: ReactionRule;
    }

    interface DetectionEvent {
        address: string;
        id: string;
        type: DetectionEventType;
        properties: { [index: string]: string };
    }

    interface ExecEventProperties extends ExecDataProperties {
    }

    interface DetectionRule {
        id: string;
        name: string;
        description: string;
        type: DetectionRuleType;
        properties: { [index: string]: string };
    }

    interface DetectionRuleId {
        id: string;
        name: string;
    }

    interface ExecDetectionRuleProperties {
        exec_name: string;
    }

    interface InteractionRequest {
        module: string;
        machine: string;
        container: string;
        rule: string;
    }

    interface InteractionData {
        address: string;
        id: string;
        type: InteractionDataType;
        properties: { [index: string]: string };
    }

    interface ExecDataProperties {
        machine_address: string;
        container_id: string;
        command: string;
        timestamp: number;
    }

    interface InteractionRule {
        id: string;
        name: string;
        description: string;
        type: InteractionDataType;
        properties: { [index: string]: string };
    }

    interface InteractionRuleId {
        id: string;
        name: string;
    }

    interface ReactionRule {
        id: string;
        name: string;
        description: string;
        type: ReactionType;
        properties: { [index: string]: string };
    }

    interface ReactionRuleId {
        id: string;
        name: string;
    }

    type DetectionEventType = "EVENT_EXEC";

    type DetectionRuleType = "DETECT_EXEC_NAME";

    type InteractionDataType = "DATA_EXEC" | "DATA_FILE_CHANGED";

    type ReactionType = "REACTION_STOP_CONTAINER";

}

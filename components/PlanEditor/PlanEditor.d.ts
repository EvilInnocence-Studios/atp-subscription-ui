import { IUpdater } from "@core/lib/useUpdater";
import { ISubscriptionPlan } from "@subscription-shared/types";

export declare interface IPlanEditorProps extends IUpdater<ISubscriptionPlan> {
    plan: ISubscriptionPlan;
    isLoading: boolean;
    remove: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IPlanEditorInputProps {
    defaultPlan: ISubscriptionPlan;
    refresh: () => void;
}

export type PlanEditorProps = IPlanEditorInputProps & IPlanEditorProps;
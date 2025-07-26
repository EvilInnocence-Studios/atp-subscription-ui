import { ISubscriptionPlan } from "@subscription-shared/types";

export declare interface IPlanManagerProps{
    plans: ISubscriptionPlan[];
    addPlan: () => void;
    isLoading: boolean;
    refresh: () => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IPlanManagerInputProps {

}

export type PlanManagerProps = IPlanManagerInputProps & IPlanManagerProps;
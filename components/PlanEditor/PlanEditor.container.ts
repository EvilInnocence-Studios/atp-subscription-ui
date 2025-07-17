import { createInjector, inject, mergeProps } from "unstateless";
import {PlanEditorComponent} from "./PlanEditor.component";
import {IPlanEditorInputProps, PlanEditorProps, IPlanEditorProps} from "./PlanEditor.d";
import { useUpdater } from "@core/lib/useUpdater";
import { ISubscriptionPlan } from "@subscription-shared/types";
import { services } from "@core/lib/api";

const injectPlanEditorProps = createInjector(({defaultPlan}:IPlanEditorInputProps):IPlanEditorProps => {
    const updater = useUpdater<ISubscriptionPlan>(
        "plan",
        defaultPlan.id,
        defaultPlan,
        services().subscription.plans.get,
        services().subscription.plans.update,
        "manual"
    );
    
    return {plan: updater.history.entity, ...updater};
});

const connect = inject<IPlanEditorInputProps, PlanEditorProps>(mergeProps(
    injectPlanEditorProps,
));

export const PlanEditor = connect(PlanEditorComponent);

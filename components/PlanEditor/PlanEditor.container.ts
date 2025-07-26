import { createInjector, inject, mergeProps } from "unstateless";
import {PlanEditorComponent} from "./PlanEditor.component";
import {IPlanEditorInputProps, PlanEditorProps, IPlanEditorProps} from "./PlanEditor.d";
import { useUpdater } from "@core/lib/useUpdater";
import { ISubscriptionPlan } from "@subscription-shared/types";
import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";

const injectPlanEditorProps = createInjector(({defaultPlan, refresh}:IPlanEditorInputProps):IPlanEditorProps => {
    const updater = useUpdater<ISubscriptionPlan>(
        "plan",
        defaultPlan.id,
        defaultPlan,
        services().subscription.plans.get,
        services().subscription.plans.update,
        "manual"
    );

    const remove = () => {
        services().subscription.plans.remove(updater.history.entity.id)
            .then(() => {
                flash.success("Plan removed")();
                refresh();
            }
        ).catch(() => {
            flash.error("Failed to remove plan")();
        });
    }
    
    return {plan: updater.history.entity, ...updater, remove};
});

const connect = inject<IPlanEditorInputProps, PlanEditorProps>(mergeProps(
    injectPlanEditorProps,
));

export const PlanEditor = connect(PlanEditorComponent);

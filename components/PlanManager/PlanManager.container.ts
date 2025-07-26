import { services } from "@core/lib/api";
import { useLoaderAsync } from "@core/lib/useLoader";
import { ISubscriptionPlan } from "@subscription-shared/types";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { PlanManagerComponent } from "./PlanManager.component";
import { IPlanManagerInputProps, IPlanManagerProps, PlanManagerProps } from "./PlanManager.d";

const injectPlanManagerProps = createInjector(({}:IPlanManagerInputProps):IPlanManagerProps => {
    const [plans, setPlans] = useState<ISubscriptionPlan[]>([]);
    const loader = useLoaderAsync();

    const refresh = () => {
        loader(() => services().subscription.plans.search().then(setPlans));
    }

    useEffect(refresh, []);

    const addPlan = () => {
        loader(() => services().subscription.plans.create({}).then((plan) => {
            setPlans((prevPlans) => [...prevPlans, plan]);
        }));
    };
    
    return {plans, isLoading: loader.isLoading, addPlan, refresh};
});

const connect = inject<IPlanManagerInputProps, PlanManagerProps>(mergeProps(
    injectPlanManagerProps,
));

export const PlanManager = connect(PlanManagerComponent);

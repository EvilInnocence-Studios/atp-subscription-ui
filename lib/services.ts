import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";
import { ISubscriptionPlan, NewSubscriptionPlan } from "@subscription-shared/types";

export const subscriptionServices = ({get, post, patch, remove}:IMethods) => ({
    subscription: {
        plans: {
            search: ():Promise<ISubscriptionPlan[]> => get("subscriptionPlans").then(getResults),
            create: (plan:NewSubscriptionPlan):Promise<ISubscriptionPlan> => post("subscriptionPlans", plan).then(getResults),
            update: (id: string, plan:Partial<ISubscriptionPlan>):Promise<ISubscriptionPlan> => patch(`subscriptionPlans/${id}`, plan).then(getResults),
            remove: (id: string):Promise<void> => remove(`subscriptionPlans/${id}`),
            get: (id: string):Promise<ISubscriptionPlan> => get(`subscriptionPlans/${id}`).then(getResults ),
        }
    }
});
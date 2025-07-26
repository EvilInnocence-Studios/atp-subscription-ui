import { services } from "@core/lib/api";
import { flash } from "@core/lib/flash";
import { useLoaderAsync } from "@core/lib/useLoader";
import { ISubscriptionPlan } from "@subscription-shared/types";
import { useLoggedInUser } from "@uac/lib/login/services";
import { useEffect, useState } from "react";
import { all } from "ts-functional";
import { createInjector, inject, mergeProps } from "unstateless";
import { SignUpFormComponent } from "./SignUpForm.component";
import { ISignUpFormInputProps, ISignUpFormProps, SignUpFormProps } from "./SignUpForm.d";

const injectSignUpFormProps = createInjector(({}:ISignUpFormInputProps):ISignUpFormProps => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [user, _setUser, refresh] = useLoggedInUser();
    const [plans, setPlans] = useState<ISubscriptionPlan[]>([]);
    const loader = useLoaderAsync();
    
    useEffect(() => {
        loader(() => services().subscription.plans.search().then(setPlans))
    }, []);

    const createSubscription = (option:any) => (data:any, actions:any) => {
        console.log("Create subscription", data, actions);
        return actions.subscription.create({
            plan_id: option.planId
        });
    }

    const onApprove = (data:any, actions:any) => {
        console.log("One approve", data, actions);
        return services().user.subscribe(user.user.id, data.subscriptionID)
            .then(all(flash.success("Subscription created"), refresh));
    }

    return {selectedOption, setSelectedOption, userId: user.user.id, createSubscription, onApprove, plans};
});

const connect = inject<ISignUpFormInputProps, SignUpFormProps>(mergeProps(
    injectSignUpFormProps,
));

export const SignUpForm = connect(SignUpFormComponent);

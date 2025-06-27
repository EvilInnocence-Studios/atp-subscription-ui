import { createInjector, inject, mergeProps } from "unstateless";
import {SignUpFormComponent} from "./SignUpForm.component";
import {ISignUpFormInputProps, SignUpFormProps, ISignUpFormProps} from "./SignUpForm.d";
import { useState } from "react";
import { useLoggedInUser } from "@uac/lib/login/services";
import { services } from "@core/lib/api";
import { all } from "ts-functional";
import { flash } from "@core/lib/flash";
import { localConfig } from "../../../config.local";

const injectSignUpFormProps = createInjector(({}:ISignUpFormInputProps):ISignUpFormProps => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [user, _setUser, refresh] = useLoggedInUser();
    
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

    const plans = localConfig.paypal.plans;

    return {selectedOption, setSelectedOption, userId: user.user.id, createSubscription, onApprove, plans};
});

const connect = inject<ISignUpFormInputProps, SignUpFormProps>(mergeProps(
    injectSignUpFormProps,
));

export const SignUpForm = connect(SignUpFormComponent);

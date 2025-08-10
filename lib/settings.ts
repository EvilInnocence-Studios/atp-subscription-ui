import { ISettingContainer } from "@common/lib/setting/types";
import { services } from "@core/lib/api";
import { map } from "ts-functional";

export const subscriptionSettings:ISettingContainer = {
    "Subscription": {
        "General": {
            subscriptionName: {
                displayName: "Subscription Name",
                type: "string",
                defaultValue: "My Subscription",
                description: "The name of the subscription as it appears in emails and other communications.",
            },
            subscriptionInfoUrl: {
                displayName: "Subscription Info URL",
                type: "string",
                defaultValue: "",
                description: "The URL for the subscription info page.",
            }
        },
    },
    UAC: {
        Roles: {
            subscriptionRole: {
                displayName: "Subscription Role",
                type: "select",
                defaultValue: "subscriber",
                description: "The role assigned to users who subscribe.",
                options: () => services().role.search({}).then(map(role => ({ value: role.id, label: role.name }))),
            }
        }
    }
};
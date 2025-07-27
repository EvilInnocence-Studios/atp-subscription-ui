import { ISettingContainer } from "@common/lib/setting/types";

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
};
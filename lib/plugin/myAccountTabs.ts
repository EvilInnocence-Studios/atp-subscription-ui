import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { SubscriptionEditor } from "@subscription/components/SubscriptionEditor";
import { uacPlugins } from "@uac/lib/plugin/slots";

export const registerMyAccountTabPlugins = () => {
    uacPlugins.myAccount.tabs.register({
        key: "subscription",
        title: "Subscription",
        icon: faCrown,
        priority: 900,
        component: SubscriptionEditor,
    });
}

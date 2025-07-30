import { IModule } from "@core/lib/module";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlanManager } from "./components/PlanManager";
import { registerMyAccountTabPlugins } from "./lib/plugin/myAccountTabs";
import { subscriptionSettings } from "./lib/settings";

export const module:IModule = {
    name: "subscription",
    menus: {
        admin: [{
            key: "subscription-plans",
            label: "Subscription Plans",
            icon: <FontAwesomeIcon icon={faDollarSign} />,
        }]
    },
    routes: {
        admin: [
            {path: "/subscription-plans", component: PlanManager},
        ]
    },
    settings: subscriptionSettings,
};

registerMyAccountTabPlugins();
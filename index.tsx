import { IModule } from "@core/lib/module";
import { faCrown, faDollarSign, faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { uacPlugins } from "@uac/lib/plugin/slots";
import { PlanManager } from "./components/PlanManager";
import { SubscriptionEditor } from "./components/SubscriptionEditor";
import { subscriptionSettings } from "./lib/settings";
import { UserWishlist } from "@store/components/UserWishlist";

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


uacPlugins.myAccount.tabs.register({
    key: "subscription",
    title: "Subscription",
    icon: faCrown,
    priority: 900,
    component: SubscriptionEditor,
});

uacPlugins.myAccount.tabs.register({
    key: "wishlist",
    title: "Wishlist",
    icon: faHeart,
    priority: 700,
    component: UserWishlist,
});

uacPlugins.myAccount.tabs.register({
    key: "files",
    title: "My Files",
    icon: faDownload,
    priority: 600,
    component: UserWishlist,
});

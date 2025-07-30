import { faCrown, faDownload, faHeart } from "@fortawesome/free-solid-svg-icons";
import { UserFileList } from "@store/components/UserFileList";
import { UserWishlist } from "@store/components/UserWishlist";
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
        component: UserFileList,
    });
}    
import { createInjector, inject, mergeProps } from "unstateless";
import {SubscriptionEditorComponent} from "./SubscriptionEditor.component";
import {ISubscriptionEditorInputProps, SubscriptionEditorProps, ISubscriptionEditorProps} from "./SubscriptionEditor.d";
import { useLoggedInUser } from "@uac/lib/login/services";
import { services } from "@core/lib/api";
import { useSetting } from "@common/lib/setting/services";

const injectSubscriptionEditorProps = createInjector(({}:ISubscriptionEditorInputProps):ISubscriptionEditorProps => {
    const [user, , refresh] = useLoggedInUser();

    const name = useSetting("subscriptionName");

    const cancel = () => services().user.unsubscribe(user.user.id).then(refresh);

    return {cancel, name};
});

const connect = inject<ISubscriptionEditorInputProps, SubscriptionEditorProps>(mergeProps(
    injectSubscriptionEditorProps,
));

export const SubscriptionEditor = connect(SubscriptionEditorComponent);

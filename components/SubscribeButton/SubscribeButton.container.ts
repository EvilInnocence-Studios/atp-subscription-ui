import { createInjector, inject, mergeProps } from "unstateless";
import {SubscribeButtonComponent} from "./SubscribeButton.component";
import {ISubscribeButtonInputProps, SubscribeButtonProps, ISubscribeButtonProps} from "./SubscribeButton.d";
import { useModal } from "@core/lib/useModal";
import { useSetting } from "@common/lib/setting/services";

const injectSubscribeButtonProps = createInjector(({}:ISubscribeButtonInputProps):ISubscribeButtonProps => {
    const modal = useModal();
    const subscriptionName = useSetting("subscriptionName");
    const infoUrl = useSetting("subscriptionInfoUrl");
    
    return {modal, subscriptionName, infoUrl};
});

const connect = inject<ISubscribeButtonInputProps, SubscribeButtonProps>(mergeProps(
    injectSubscribeButtonProps,
));

export const SubscribeButton = connect(SubscribeButtonComponent);

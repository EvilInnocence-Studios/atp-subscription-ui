import { IModal } from "@core/lib/useModal";

export declare interface ISubscribeButtonProps {
    modal: IModal;
    subscriptionName?: string;
    infoUrl?: string;
}

// What gets passed into the component from the parent as attributes
export declare interface ISubscribeButtonInputProps {
    className?: string;
}

export type SubscribeButtonProps = ISubscribeButtonInputProps & ISubscribeButtonProps;
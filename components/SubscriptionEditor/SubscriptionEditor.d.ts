import { SafeUser } from "@uac-shared/user/types";

export declare interface ISubscriptionEditorProps {
    name: string;
    cancel: () => Promise<void>;
}

// What gets passed into the component from the parent as attributes
export declare interface ISubscriptionEditorInputProps {

}

export type SubscriptionEditorProps = ISubscriptionEditorInputProps & ISubscriptionEditorProps;
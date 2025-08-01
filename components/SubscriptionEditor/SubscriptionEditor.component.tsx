import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignUpForm } from "@subscription/components/SignUpForm";
import { hasPermission } from "@uac/components/HasPermission";
import { Alert, Button, Popconfirm } from "antd";
import { SubscriptionEditorProps } from "./SubscriptionEditor.d";
import styles from './SubscriptionEditor.module.scss';

const IsSubscribed = hasPermission("product.subscription");

export const SubscriptionEditorComponent = ({cancel, name}:SubscriptionEditorProps) => <div className={styles.bspEditor}>
    <h1>{name}</h1>
    <IsSubscribed no>
        <SignUpForm onSignup={() => {}} />
    </IsSubscribed>
    <IsSubscribed yes>
        <Alert message={`You are currently subscribed to our ${name} subscription.`} />
        <br/>
    </IsSubscribed>
    <br/>
    <IsSubscribed yes>
        <div className={styles.bspCancel}>
            <Popconfirm
                onConfirm={cancel}
                title={`Are you sure you want to cancel your ${name} subscription?`}
                cancelText="Stay subscribed"
                okText="Cancel subscription"
            >
                <Button type="primary">
                    <FontAwesomeIcon icon={faTrash} /> Cancel {name} Subscription
                </Button>
            </Popconfirm>
        </div>
    </IsSubscribed>
</div>;

import { faArrowRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import clsx from "clsx";
import { SubscribeButtonProps } from "./SubscribeButton.d";
import styles from './SubscribeButton.module.scss';
import { Link } from "react-router";
import { SignUpForm } from "../SignUpForm";

export const SubscribeButtonComponent = ({className, modal, subscriptionName, infoUrl}:SubscribeButtonProps) => <>
    <Button className={clsx([styles.subscribeButton, className])} type="primary" size="small" onClick={modal.open}>
        <FontAwesomeIcon icon={faUserPlus} /> Subscribe
    </Button>
    <Modal
            wrapClassName={styles.subscribeModal}
            title={`Subscribe to ${subscriptionName || "My Subscription"}`}
            open={modal.visible}
            onCancel={modal.close}
            footer={<Link to={infoUrl || ""}>Learn more <FontAwesomeIcon icon={faArrowRight} /></Link>}
    >
        <SignUpForm />
    </Modal>
</>;

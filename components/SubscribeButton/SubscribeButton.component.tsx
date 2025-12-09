import { faArrowRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Alert } from "antd";
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
        <Alert className={styles.info} message={
            <>
                <b>BSP</b> products are <b>FREE</b> but only available to <b>Backstage Pass Subscribers</b>.  Subscribe to a monthly plan to get instant access to this and over 900 other products at no extra cost.  New products are released each month.
                <div style={{textAlign: "right"}}>
                    <Link to={infoUrl || ""}>Learn more <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </>
        } type="info" />
        <SignUpForm />
    </Modal>
</>;

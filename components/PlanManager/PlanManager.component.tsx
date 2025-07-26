import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Spin } from "antd";
import { PlanEditor } from "../PlanEditor";
import { PlanManagerProps } from "./PlanManager.d";
import styles from './PlanManager.module.scss';

export const PlanManagerComponent = ({plans, isLoading, addPlan, refresh}:PlanManagerProps) =>
    <Spin spinning={isLoading} tip="Loading subscription plans...">
        <div className={styles.planManager}>
            <h1>Subscription Plans</h1>

            <Button type="primary" className={styles.addPlanButton} onClick={addPlan}>
                <FontAwesomeIcon icon={faPlus} />
                Add New Plan
            </Button>

            <Row gutter={16} className={styles.planList}>
                {plans.map(plan => (
                    <Col key={plan.id} xs={6} className={styles.planItem}>
                        <PlanEditor defaultPlan={plan} refresh={refresh} />
                    </Col>
                ))}
            </Row>
        </div>
    </Spin>;

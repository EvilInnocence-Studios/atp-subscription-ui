import { Spin } from "antd";
import {PlanManagerProps} from "./PlanManager.d";
import styles from './PlanManager.module.scss';
import { PlanEditor } from "../PlanEditor";

export const PlanManagerComponent = ({plans, isLoading}:PlanManagerProps) =>
    <Spin spinning={isLoading} tip="Loading subscription plans...">
        <div className={styles.planManager}>
            <h1>Subscription Plans</h1>

            <ul className={styles.planList}>
                {plans.map(plan => (
                    <li key={plan.id} className={styles.planItem}>
                        <PlanEditor defaultPlan={plan} />
                    </li>
                ))}
            </ul>
        </div>
    </Spin>;

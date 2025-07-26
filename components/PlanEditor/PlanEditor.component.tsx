import { DeleteBtn } from "@core/components/DeleteBtn";
import { Editable } from "@core/components/Editable";
import { Label } from "@core/components/Label";
import { InputNumber, Spin } from "antd";
import { PlanEditorProps } from "./PlanEditor.d";
import styles from './PlanEditor.module.scss';

export const PlanEditorComponent = ({plan, isLoading, updateString, updateNumber, UpdateButtons, remove}:PlanEditorProps) =>
    <Spin spinning={isLoading}>
        <div className={styles.planEditor}>
            <div className={styles.updateButtons}>
                <UpdateButtons />
                <DeleteBtn entityType="subscription plan" onClick={remove} />
            </div>
            {plan && <>
                <Label label="Plan ID"><Editable value={plan.planId} onChange={updateString("planId")}/></Label>
                <Label label="Name"><Editable value={plan.name} onChange={updateString("name")}/></Label>
                <Label label="Description"><Editable value={plan.description} onChange={updateString("description")}/></Label>
                <Label label="Price"><InputNumber value={plan.price} onChange={updateNumber("price")} /></Label>
                <Label label="Period (months)"><InputNumber value={plan.period} onChange={updateNumber("period")} /></Label>
                <Label label="Renews"><Editable value={plan.renews} onChange={updateString("renews")}/></Label>
            </>}
        </div>
    </Spin>;

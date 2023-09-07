import {
    List,
    TextField,
    TextInput,
    NumberField,
    SelectField,
    SelectInput,
    usePermissions,
} from 'react-admin';
import * as React from "react";
import {txStatusChoices, txStatusForQuery} from "@/common/constants";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="准备记录ID"/>,
    <TextInput key="begin_num" name="begin_num" source="begin_num" label="起始专用编号"/>,
    <TextInput key="limit_num" name="limit_num" source="limit_num" label="选择钱包数量"/>,
    <SelectInput key="gas_status" name="gas_status" source="gas_status" label="打款gas状态"
                 choices={txStatusForQuery}/>,
    <TextInput key="gas_tx_hash" name="gas_tx_hash" source="gas_tx_hash" label="打款gas交易hash"/>,
    <TextInput key="gas_remark" name="gas_remark" source="gas_remark" label="打款gas备注"/>,
    <SelectInput key="token_status" name="token_status" source="token_status" label="打款token状态"
                 choices={txStatusForQuery}/>,
    <TextInput key="token_tx_hash" name="token_tx_hash" source="token_tx_hash" label="打款token交易hash"/>,
    <TextInput key="token_tx_hash" name="token_tx_hash" source="token_tx_hash" label="打款token备注"/>,
];

export const TransactionPrepareList = () => {

    const {permissions} = usePermissions();

    return (
        <List filters={postFilters}
              actions={<PostListActions/>}
              filter={{"task.admin": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="准备记录ID" emptyText="-"/>
                <TextField source="task.id" label="任务ID" emptyText="-"/>
                <NumberField source="begin_num" label="钱包起始专用编号" emptyText="-"/>
                <NumberField source="limit_num" label="选择钱包数量" emptyText="-"/>
                <TextField source="gas_amount" label="打款gas数量" emptyText="-"/>
                <SelectField source="gas_status" label="打款gas状态" choices={txStatusChoices}/>
                <TextField source="gas_tx_hash" label="打款gas交易hash" emptyText="-"/>
                <TextField source="gas_remark" label="打款gas备注" emptyText="-"/>
                <TextField source="token_address" label="打款token地址" emptyText="-"/>
                <TextField source="token_amount" label="打款token数量" emptyText="-"/>
                <SelectField source="token_status" label="打款token状态" choices={txStatusChoices}/>
                <TextField source="token_tx_hash" label="打款token交易hash" emptyText="-"/>
                <TextField source="token_remark" label="打款token备注" emptyText="-"/>
            </MyDatagridConfigurable>
        </List>
    );
}
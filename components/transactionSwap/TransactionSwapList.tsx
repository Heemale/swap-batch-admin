import {
    List,
    SelectField,
    SelectInput,
    TextField,
    TextInput, usePermissions,
} from 'react-admin';
import * as React from "react";
import TimeTextField from "@/components/ui/TimeTextField";
import {txStatusChoices, txStatusForQuery} from "@/common/constants";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="swap记录ID"/>,
    <TextInput key="task.id" name="task.id" source="task.id" label="任务ID"/>,
    <TextInput key="wallet.id" name="wallet.id" source="wallet.id" label="钱包ID"/>,
    <TextInput key="wallet.address" name="wallet.address" source="wallet.address" label="钱包地址"/>,
    <SelectInput key="status" name="status" source="status" label="状态" choices={txStatusForQuery}/>,
    <TextInput key="hash" name="hash" source="hash" label="交易hash"/>,
    <TextInput key="remark" name="remark" source="remark" label="备注"/>,
];

export const TransactionSwapList = () => {

    const {permissions} = usePermissions();

    return (
        <List
            filters={postFilters}
            actions={<PostListActions/>}
            filter={{"wallet.admin_id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="swap记录ID"/>
                <TextField source="task.id" label="任务ID" emptyText="-"/>
                <TextField source="wallet.id" label="钱包ID" emptyText="-"/>
                <TextField source="wallet.address" label="钱包地址" emptyText="-"/>
                <TextField source="times" label="第几次循环"/>
                <TextField source="interval_num" label="间隔时间"/>
                <TimeTextField source="executetime" label="交易执行时间"/>
                <TimeTextField source="rangestarttime" label="区间起始时间"/>
                <TimeTextField source="rangeendtime" label="区间结束时间"/>
                <TextField source="amount_in" label="swap转入金额"/>
                <TextField source="amount_out" label="swap转出金额"/>
                <TextField source="token_in" label="转入的token"/>
                <TextField source="token_out" label="转出的token"/>
                <SelectField source="status" label="状态" choices={txStatusChoices}/>
                <TextField source="hash" label="交易hash"/>
                <TextField source="remark" label="备注" emptyText="-"/>
                <TextField source="failed_counts" label="失败次数"/>
            </MyDatagridConfigurable>
        </List>
    );

}
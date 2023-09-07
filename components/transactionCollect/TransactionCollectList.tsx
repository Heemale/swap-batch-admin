import {
    List,
    TextField,
    TextInput,
    SelectField,
    SelectInput,
    usePermissions
} from 'react-admin';
import * as React from "react";
import {txStatusChoices, txStatusForQuery} from "@/common/constants";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="归集记录ID"/>,
    <TextInput key="task.id" name="task.id" source="task.id" label="任务ID"/>,
    <TextInput key="wallet.id" name="wallet.id" source="wallet.id" label="钱包ID"/>,
    <TextInput key="wallet.address" name="wallet.address" source="wallet.address" label="钱包地址"/>,
    <TextInput key="token_address" name="token_address" source="token_address" label="token地址"/>,
    <TextInput key="amount" name="amount" source="amount" label="归集数量"/>,
    <SelectInput key="status" name="status" source="status" label="状态" choices={txStatusForQuery}/>,
    <TextInput key="hash" name="hash" source="hash" label="交易hash"/>,
    <TextInput key="remark" name="remark" source="remark" label="备注"/>,
];

export const TransactionCollectList = () => {

    const {permissions} = usePermissions();

    return (
        <List
            filters={postFilters}
            actions={<PostListActions/>}
            filter={{"wallet.admin_id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="归集记录ID" emptyText="-"/>
                <TextField source="task.id" label="任务ID" emptyText="-"/>
                <TextField source="wallet.id" label="钱包ID" emptyText="-"/>
                <TextField source="wallet.address" label="钱包地址" emptyText="-"/>
                <TextField source="token_address" label="token地址" emptyText="-"/>
                <TextField source="amount" label="归集数量" emptyText="-"/>
                <SelectField source="status" label="状态" choices={txStatusChoices}/>
                <TextField source="hash" label="交易hash" emptyText="-"/>
                <TextField source="remark" label="备注" emptyText="-"/>
            </MyDatagridConfigurable>
        </List>
    );

}
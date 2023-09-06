import {
    List,
    TextField,
    TextInput, usePermissions,
} from 'react-admin';
import * as React from "react";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="id" name="id" source="id" label="余额记录ID"/>,
    <TextInput key="wallet.task.id" name="wallet.task.id" source="wallet.task.id" label="任务ID"/>,
    <TextInput key="wallet.id" name="wallet.id" source="wallet.id" label="钱包ID"/>,
    <TextInput key="wallet.address" name="wallet.address" source="wallet.address" label="钱包地址"/>,
    <TextInput key="token_address" name="token_address" source="token_address" label="token地址"/>,
];

export const BalanceList = () => {

    const {permissions} = usePermissions();

    return (
        <List filters={postFilters}
              actions={<PostListActions/>}
              filter={{"wallet.admin_id": permissions.sub}}
        >
            <MyDatagridConfigurable>
                <TextField source="id" label="余额记录ID"/>
                <TextField source="wallet.task.id" label="任务ID" emptyText="-"/>
                <TextField source="wallet.id" label="钱包ID" emptyText="-"/>
                <TextField source="wallet.address" label="钱包地址" emptyText="-"/>
                <TextField source="token_address" label="token地址" emptyText="-"/>
                <TextField source="balance" label="余额"/>
            </MyDatagridConfigurable>
        </List>
    );

}
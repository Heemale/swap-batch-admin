import {
    List,
    TextField,
    SelectField,
    SelectInput,
    usePermissions,
} from 'react-admin';
import * as React from "react";
import {txStatusChoices, txStatusForQuery} from "@/common/constants";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <SelectInput key="status" name="status" source="status" label="状态" choices={txStatusForQuery}/>,
];

export const TransactionApproveAdminList = () => {

    const {permissions} = usePermissions();

    return (
        <List filters={postFilters}
              actions={<PostListActions/>}
              filter={{"task.admin.id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="管理员授权记录ID" emptyText="-"/>
                <TextField source="admin.id" label="管理员ID" emptyText="-"/>
                <TextField source="admin.username" label="管理员用户名" emptyText="-"/>
                <TextField source="admin.admin_address" label="管理员地址" emptyText="-"/>
                <TextField source="token_address" label="token地址" emptyText="-"/>
                <TextField source="spender" label="使用者" emptyText="-"/>
                <SelectField source="status" label="状态" choices={txStatusChoices}/>
                <TextField source="hash" label="交易hash" emptyText="-"/>
                <TextField source="remark" label="备注" emptyText="-"/>
            </MyDatagridConfigurable>
        </List>
    );
}
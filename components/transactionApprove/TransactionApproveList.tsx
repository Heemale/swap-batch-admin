import {
    DatagridConfigurable,
    EditButton,
    List,
    TextField,
    TextInput,
    SelectField,
    SelectInput, usePermissions,
} from 'react-admin';
import * as React from "react";
import TimeTextField from "@/components/ui/TimeTextField";
import {Role, txStatusChoices, txStatusForQuery} from "@/common/constants";
import PostListActions from "@/components/ui/PostListActions";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <SelectInput key="status" name="status" source="status" label="状态" choices={txStatusForQuery}/>,
];

export const TransactionApproveList = () => {

    const {permissions} = usePermissions();

    return (
        <List filters={postFilters}
              actions={<PostListActions/>}
              filter={{"wallet.admin_id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="授权记录ID" emptyText="-"/>
                <TextField source="wallet.id" label="钱包ID" emptyText="-"/>
                <TextField source="wallet.address" label="钱包地址" emptyText="-"/>
                <TextField source="token_address" label="token地址" emptyText="-"/>
                <TextField source="spender" label="使用者" emptyText="-"/>
                <SelectField source="status" label="状态" choices={txStatusChoices}/>
                <TextField source="hash" label="交易hash" emptyText="-"/>
                <TextField source="remark" label="备注" emptyText="-"/>
            </MyDatagridConfigurable>
        </List>
    );
}
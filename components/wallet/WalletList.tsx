import {
    List,
    TextField,
    TextInput,
    NumberField,
    ReferenceField,
    usePermissions, TopToolbar, SelectColumnsButton, FilterButton, CreateButton, ExportButton,
} from "react-admin";
import * as React from "react";
import {Role} from "@/common/constants";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <TextInput key="task.id" name="task.id" source="task.id" label="任务ID"/>,
    <TextInput key="admin_special_num" name="admin_special_num" source="admin_special_num" label="专用编号"/>,
    <TextInput key="address" name="address" source="address" label="地址"/>,
    <TextInput key="private_key" name="private_key" source="private_key" label="私钥"/>,
];

const PostListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <FilterButton/>
        <ExportButton/>
    </TopToolbar>
);

export const WalletList = () => {

    const {permissions} = usePermissions();

    return (
        <List filters={postFilters}
              actions={<PostListActions/>}
              filter={{"admin_id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="钱包ID"/>
                <TextField source="task.id" label="任务ID" emptyText="-"/>
                {permissions.group === Role.Super &&
                    <ReferenceField source="admin_id" reference="admins" label="管理员ID"/>
                }
                <NumberField source="admin_special_num" label="专用编号"/>
                <TextField source="address" label="地址"/>
                <TextField source="private_key" label="私钥"/>
                <TextField source="mnemonic" label="助记词"/>
                <NumberField source="interval_max" label="创建交易间隔最大值（分钟）"/>
                <NumberField source="interval_min" label="创建交易间隔最小值（分钟）"/>
            </MyDatagridConfigurable>
        </List>
    );
};
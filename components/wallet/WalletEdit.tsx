import {Edit, SimpleForm, TextInput, NumberInput, usePermissions} from 'react-admin';
import {Role} from "@/common/constants";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";
import React from "react";

export const WalletEdit = () => {

    const {permissions} = usePermissions();

    return (
        <Edit actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <TextInput source="id" name="id" disabled fullWidth/>
                {permissions.group === Role.Super &&
                    <NumberInput source="admin.id" name="admin.id" label="管理员ID" disabled fullWidth/>
                }
                <NumberInput source="admin_special_num" name="admin_special_num" label="专用编号" disabled fullWidth/>
                <TextInput source="address" name="address" label="地址" fullWidth/>
                <TextInput source="private_key" name="private_key" label="私钥" fullWidth/>
                <TextInput source="mnemonic" name="mnemonic" label="助记词" fullWidth/>
                <NumberInput source="interval_max" name="interval_max" label="创建交易间隔最大值（分钟）" fullWidth/>
                <NumberInput source="interval_min" name="interval_min" label="创建交易间隔最小值（分钟）" fullWidth/>
            </SimpleForm>
        </Edit>
    );
}
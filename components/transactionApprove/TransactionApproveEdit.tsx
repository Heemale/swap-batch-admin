import {Edit, SimpleForm, TextInput, SelectInput, required} from 'react-admin';
import React from "react";
import {transform} from "@/common/util";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const TransactionApproveEdit = () => (
    <Edit transform={transform} actions={<PostCreateEditActions/>}>
        <SimpleForm>
            <TextInput source="id" name="id" disabled fullWidth/>
            <TextInput source="wallet.id" name="wallet.id" label="钱包ID" disabled fullWidth/>
            <TextInput source="wallet.address" name="wallet.address" label="钱包地址" disabled fullWidth/>
            <TextInput source="token_address" name="token_address" label="token地址" fullWidth/>
            <TextInput source="spender" name="spender" label="使用者" fullWidth/>
            <SelectInput source="status" name="status" label="状态"
                         choices={[
                             {id: '0', name: '未交易'},
                             {id: '1', name: '待交易'},
                             {id: '2', name: '交易失败'},
                             {id: '3', name: '待核验'},
                             {id: '4', name: '核验失败'},
                             {id: '5', name: '校验成功'},
                         ]}
                         validate={required()}
                         fullWidth
            />
            <TextInput source="hash" name="hash" label="交易hash" fullWidth/>
            <TextInput source="remark" name="remark" label="备注" fullWidth multiline rows={5}/>
        </SimpleForm>
    </Edit>
);
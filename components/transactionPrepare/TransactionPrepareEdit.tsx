import {Edit, SimpleForm, TextInput, NumberInput, SelectInput, required} from 'react-admin';
import React from "react";
import {transform} from "@/common/util";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const TransactionPrepareEdit = () => (
    <Edit transform={transform} actions={<PostCreateEditActions/>}>
        <SimpleForm>
            <TextInput source="id" name="id" disabled fullWidth/>
            <NumberInput source="begin_num" name="begin_num" label="钱包起始专用编号" fullWidth/>
            <NumberInput source="limit_num" name="limit_num" label="选择钱包数量" fullWidth/>
            <SelectInput source="gas_status" name="gas_status" label="打款gas状态"
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
            <TextInput source="gas_amount" name="gas_amount" label="打款gas数量" fullWidth/>
            <TextInput source="gas_tx_hash" name="gas_tx_hash" label="打款gas交易hash" fullWidth/>
            <TextInput source="gas_remark" name="gas_remark" label="打款gas备注" fullWidth multiline rows={5}/>
            <SelectInput source="token_status" name="token_status" label="打款token状态"
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
            <TextInput source="token_address" name="token_address" label="打款token地址" fullWidth/>
            <TextInput source="token_amount" name="token_amount" label="打款token数量" fullWidth/>
            <TextInput source="token_tx_hash" name="token_tx_hash" label="打款token交易hash" fullWidth/>
            <TextInput source="token_remark" name="token_remark" label="打款token备注" fullWidth multiline rows={5}/>
        </SimpleForm>
    </Edit>
);
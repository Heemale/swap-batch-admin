import {Edit, SimpleForm, TextInput, NumberInput, required, SelectInput} from 'react-admin';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import React from "react";
import {transform} from "@/common/util";
import MyDateTimePicker from "@/components/ui/MyDateTimePicker";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const TransactionSwapEdit = () => (
    <Edit transform={transform} actions={<PostCreateEditActions/>}>
        <SimpleForm>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextInput source="id" name="id" disabled fullWidth/>
                <TextInput source="task.id" name="task.id" label="任务ID" disabled fullWidth/>
                <TextInput source="wallet.id" name="wallet.id" label="钱包ID" disabled fullWidth/>
                <TextInput source="wallet.address" name="wallet.address" label="钱包地址" disabled fullWidth/>
                <NumberInput source="times" name="times" label="第几次循环" disabled fullWidth/>
                <NumberInput source="interval_num" name="interval_num" label="间隔时间" disabled fullWidth/>
                <MyDateTimePicker source="executetime" label="交易执行时间"/>
                <MyDateTimePicker source="rangestarttime" label="区间起始时间"/>
                <MyDateTimePicker source="rangeendtime" label="区间结束时间"/>
                <TextInput source="amount_in" name="amount_in" label="swap转入金额" fullWidth/>
                <TextInput source="amount_out" name="amount_out" label="swap转出金额" fullWidth/>
                <TextInput source="token_in" name="token_in" label="转入的token" fullWidth/>
                <TextInput source="token_out" name="token_out" label="转出的token" fullWidth/>
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
                <NumberInput source="failed_counts" name="failed_counts" label="失败次数" fullWidth/>
            </LocalizationProvider>
        </SimpleForm>
    </Edit>
);
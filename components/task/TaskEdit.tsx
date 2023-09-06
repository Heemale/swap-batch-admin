import {
    Edit,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    usePermissions
} from 'react-admin';
import React, {useState} from "react";
import {timestamp} from "@/common/util";
import {switchChoices, SwitchEnum, tradeTypeChoices, walletSourceChoices} from "@/common/constants";
import MyDateTimePicker from "@/components/ui/MyDateTimePicker";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const TaskEdit = () => {

    const {permissions} = usePermissions();

    const [tradePairId, setTradePairId] = useState<number | null>();

    const handleTradePairId = (e: any) => setTradePairId(parseInt(e.target.value));

    const transform = async (data: any) => {
        return {
            ...data,
            admin: permissions.sub,
            trade_pair: tradePairId,
            updatetime: timestamp()
        };
    };

    return (
        <Edit transform={transform} actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextInput source="id" name="id" disabled fullWidth/>
                    <TextInput source="order_num" name="order_num" label="订单号" fullWidth/>
                    <SelectInput source="swap_switch" name="swap_switch" label="swap开关"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <SelectInput source="status" name="status" label="状态"
                                 choices={[
                                     {id: '0', name: '未执行'},
                                     {id: '1', name: '管理员授权中'},
                                     {id: '2', name: '管理员授权完成'},
                                     {id: '3', name: '打款中'},
                                     {id: '4', name: '打款完成'},
                                     {id: '5', name: 'swap中'},
                                     {id: '6', name: 'swap完成'},
                                     {id: '7', name: '归集中'},
                                     {id: '8', name: '归集完成'},
                                 ]}
                                 validate={required()}
                                 fullWidth
                    />
                    <SelectInput source="wallet_source" name="wallet_source" label="钱包来源"
                                 choices={walletSourceChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <NumberInput source="wallet_create_counts" name="wallet_create_counts" label="创建钱包数量"
                                 fullWidth/>
                    <TextInput source="wallet_begin_num"
                               name="wallet_begin_num"
                               label="选择钱包起始专用编号"
                               fullWidth
                    />
                    <TextInput source="wallet_limit_num"
                               name="wallet_limit_num"
                               label="选择钱包数量"
                               fullWidth
                    />
                    {/*<TextInput source="wallet_from_task_id" name="wallet_from_task_id" label="钱包来源订单ID"*/}
                    {/*           fullWidth/>*/}
                    <TextInput source="subsidy_gas_max" name="subsidy_gas_max" label="打款gas最大值" fullWidth/>
                    <TextInput source="subsidy_gas_min" name="subsidy_gas_min" label="打款gas最小值" fullWidth/>
                    <ReferenceInput source="trade_pair.id"
                                    name="trade-pairs-id"
                                    reference="trade-pairs"
                                    filter={{open_switch: SwitchEnum.OPEN}}
                    >
                        <SelectInput label="交易对"
                                     validate={required()}
                                     onChange={handleTradePairId}
                                     fullWidth
                        />
                    </ReferenceInput>
                    <SelectInput source="trade_type" name="trade_type" label="交易类型"
                                 choices={tradeTypeChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <TextInput source="subsidy_token_max" name="subsidy_token_max" label="打款token最大值" fullWidth/>
                    <TextInput source="subsidy_token_min" name="subsidy_token_min" label="打款token最小值" fullWidth/>
                    <TextInput source="swap_max" name="swap_max" label="swap最大值" fullWidth/>
                    <TextInput source="swap_min" name="swap_min" label="swap最小值" fullWidth/>
                    <NumberInput source="token_in_amount" name="token_in_amount" label="转入的token数量（计算市值）"
                                 fullWidth/>
                    <TextInput source="price_max" name="price_max" label="市值最大值" fullWidth/>
                    <TextInput source="price_min" name="price_min" label="市值最小值" fullWidth/>
                    <NumberInput source="times" name="times" label="循环次数" fullWidth/>
                    <SelectInput source="disposable_switch" name="disposable_switch" label="是否一次性交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <SelectInput source="dense_switch" name="dense_switch" label="是否密集交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <SelectInput source="range_switch" name="range_switch" label="是否区间交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                    />
                    <MyDateTimePicker source="rangestarttime" label="区间交易起始时间"/>
                    <MyDateTimePicker source="rangeendtime" label="区间交易结束时间"/>
                    <MyDateTimePicker source="collecttime" label="归集时间"/>
                    {/*<MyDateTimePicker source="disposabletime" label="一次性交易时间"/>*/}
                </LocalizationProvider>
            </SimpleForm>
        </Edit>
    )
};
import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    required,
    SelectInput,
    NumberInput,
    usePermissions,
} from "react-admin";
import {switchChoices, SwitchEnum, tradeTypeChoices, walletSourceChoices} from "@/common/constants";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import MyDateTimePicker from "@/components/ui/MyDateTimePicker";
import {timestamp} from "@/common/util";
import {useState} from "react";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const TaskCreate = () => {

    const {permissions} = usePermissions();

    const [tradePairId, setTradePairId] = useState<number | null>(1);

    const handleTradePairId = (e: any) => setTradePairId(parseInt(e.target.value));

    const transform = async (data: any) => {

        const {id, ...rest} = data; // Exclude 'id' property from data

        return {
            ...rest,
            admin: permissions.sub,
            trade_pair: tradePairId,
            createtime: timestamp()
        };
    };

    return (
        <Create transform={transform} actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TextInput source="order_num" name="order_num" label="订单号" fullWidth/>
                    <SelectInput source="swap_switch"
                                 name="swap_switch"
                                 label="swap开关"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="0"
                    />
                    <SelectInput source="wallet_source"
                                 name="wallet_source"
                                 label="钱包来源"
                                 choices={walletSourceChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="0"
                    />
                    <NumberInput source="wallet_create_counts"
                                 name="wallet_create_counts"
                                 label="创建钱包数量"
                                 fullWidth
                                 defaultValue="10"
                    />
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
                    <TextInput source="subsidy_gas_max" name="subsidy_gas_max" label="打款gas最大值" defaultValue="10"
                               fullWidth/>
                    <TextInput source="subsidy_gas_min" name="subsidy_gas_min" label="打款gas最小值" defaultValue="10"
                               fullWidth/>
                    <ReferenceInput source="id"
                                    name="trade-pairs-id"
                                    reference="trade-pairs"
                                    filter={{open_switch: SwitchEnum.OPEN}}
                    >
                        <SelectInput label="交易对"
                                     validate={required()}
                                     onChange={handleTradePairId}
                                     defaultValue="1"
                                     fullWidth
                        />
                    </ReferenceInput>
                    <SelectInput source="trade_type"
                                 name="trade_type"
                                 label="交易类型"
                                 choices={tradeTypeChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="0"
                    />
                    <TextInput source="subsidy_token_max" name="subsidy_token_max" label="打款token最大值"
                               defaultValue="1000" fullWidth/>
                    <TextInput source="subsidy_token_min" name="subsidy_token_min" label="打款token最小值"
                               defaultValue="1000" fullWidth/>
                    <TextInput source="swap_max" name="swap_max" label="swap最大值" defaultValue="1" fullWidth/>
                    <TextInput source="swap_min" name="swap_min" label="swap最小值" defaultValue="1" fullWidth/>
                    <NumberInput source="token_in_amount"
                                 name="token_in_amount"
                                 label="转入的token数量（计算市值）"
                                 fullWidth
                                 defaultValue="10000"
                    />
                    <TextInput source="price_max" name="price_max" label="市值最大值" defaultValue="11000" fullWidth/>
                    <TextInput source="price_min" name="price_min" label="市值最小值" defaultValue="9000" fullWidth/>
                    <NumberInput source="times" name="times" label="循环次数" defaultValue="1" fullWidth/>
                    <SelectInput source="disposable_switch"
                                 name="disposable_switch"
                                 label="是否一次性交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="0"
                    />
                    <SelectInput source="dense_switch"
                                 name="dense_switch"
                                 label="是否密集交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="0"
                    />
                    <SelectInput source="range_switch"
                                 name="range_switch"
                                 label="是否区间交易"
                                 choices={switchChoices}
                                 validate={required()}
                                 fullWidth
                                 defaultValue="1"
                    />
                    <MyDateTimePicker source="rangestarttime" label="区间交易起始时间"/>
                    <MyDateTimePicker source="rangeendtime" label="区间交易结束时间"/>
                    <MyDateTimePicker source="collecttime" label="归集时间"/>
                </LocalizationProvider>
            </SimpleForm>
        </Create>
    );
};
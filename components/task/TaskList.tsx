import {
    List,
    NumberField,
    TextField,
    SelectField,
    SelectInput,
    usePermissions, TopToolbar, SelectColumnsButton, FilterButton, CreateButton, ExportButton
} from 'react-admin';
import * as React from 'react';
import TimeTextField from "@/components/ui/TimeTextField";
import {
    Role,
    switchChoices,
    taskTxStatusChoices,
    taskTxStatusForQuery,
    tradeTypeChoices,
    walletSourceChoices
} from "@/common/constants";
import MyDatagridConfigurable from "@/components/ui/MyDatagridConfigurable";

const postFilters = [
    <SelectInput key="status" name="status" source="status" choices={taskTxStatusForQuery}  label="状态"/>
];

const PostListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

export const TaskList = () => {

    const {permissions} = usePermissions();

    return (
        <List
            filters={postFilters}
            actions={<PostListActions/>}
            filter={{"admin.id": permissions.sub}}
        >
            <MyDatagridConfigurable hasEdit>
                <TextField source="id" label="swap任务ID" emptyText="-"/>
                {permissions.group === Role.Super &&
                    <TextField source="admin.id" label="管理员ID" emptyText="-"/>
                }
                <TextField source="order_num" label="订单号" emptyText="-"/>
                <SelectField source="swap_switch" label="任务是否启动" choices={switchChoices}/>
                <SelectField source="status" label="状态" choices={taskTxStatusChoices}/>
                <SelectField source="wallet_source" label="钱包来源" choices={walletSourceChoices}/>
                <NumberField source="wallet_create_counts" label="创建钱包数量" emptyText="-"/>
                <NumberField source="wallet_begin_num" label="选择钱包起始专用编号" emptyText="-"/>
                <NumberField source="wallet_limit_num" label="选择钱包数量" emptyText="-"/>
                {/*<NumberField source="wallet_from_task_id" label="钱包来源订单ID" emptyText="-"/>*/}
                <TextField source="subsidy_gas_max" label="打款gas最大值" emptyText="-"/>
                <TextField source="subsidy_gas_min" label="打款gas最小值" emptyText="-"/>
                <TextField source="trade_pair.id" label="交易对ID" emptyText="-"/>
                <SelectField source="trade_type" label="交易类型" choices={tradeTypeChoices}/>
                <TextField source="subsidy_token_max" label="打款token最大值" emptyText="-"/>
                <TextField source="subsidy_token_min" label="打款token最小值" emptyText="-"/>
                <TextField source="swap_max" label="swap最大值" emptyText="-"/>
                <TextField source="swap_min" label="swap最小值" emptyText="-"/>
                <NumberField source="token_in_amount" label="转入的token数量（计算市值）" emptyText="-"/>
                <TextField source="price_max" label="市值最大值" emptyText="-"/>
                <TextField source="price_min" label="市值最小值" emptyText="-"/>
                <NumberField source="times" label="循环次数" emptyText="-"/>
                <SelectField source="disposable_switch" label="是否一次性交易" choices={switchChoices}/>
                <SelectField source="dense_switch" label="是否密集交易" choices={switchChoices}/>
                <SelectField source="range_switch" label="是否区间交易" choices={switchChoices}/>
                <TimeTextField source="rangestarttime" label="区间交易起始时间"/>
                <TimeTextField source="rangeendtime" label="区间交易结束时间"/>
                <TimeTextField source="collecttime" label="归集时间"/>
                <TimeTextField source="disposabletime" label="一次性交易时间"/>
            </MyDatagridConfigurable>
        </List>
    );
}


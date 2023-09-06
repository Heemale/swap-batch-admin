import * as React from 'react';
import {Create, NumberInput, required, SelectInput, SimpleForm, TextInput} from 'react-admin';
import {timestamp} from "@/common/util";
import {switchChoices} from "@/common/constants";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

export const transform = async (data:any) => {
    return {
        ...data,
        createtime: timestamp()
    }
}

export const TradePairCreate = () => {
    return (
        <Create transform={transform} actions={<PostCreateEditActions/>}>
            <SimpleForm>
                <TextInput source="token0_address" name="token0_address" label="第一合约地址" fullWidth/>
                <TextInput source="token1_address" name="token1_address" label="第二合约地址" fullWidth/>
                <TextInput source="token0_name" name="token0_name" label="第一合约名称" fullWidth/>
                <TextInput source="token1_name" name="token1_name" label="第二合约名称" fullWidth/>
                <NumberInput source="limits" name="limits" label="每次提交交易数" fullWidth/>
                <SelectInput source="open_switch" name="open_switch" label="是否开放"
                             choices={switchChoices}
                             validate={required()}
                             fullWidth
                />
            </SimpleForm>
        </Create>
    )
};
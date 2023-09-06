import * as React from 'react';
import {
    SimpleForm,
    Toolbar,
    SaveButton,
    useNotify,
    Title,
    ArrayInput,
    SimpleFormIterator,
    TextInput
} from 'react-admin';
import {apiUrl} from "@/common/constants";
import {Card} from "@mui/material";

const PostEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton/>
    </Toolbar>
);

const getBalance = async (token_addresses: Array<string>) => {
    const request = new Request(`${apiUrl}/balance/statistical`, {
        method: 'POST',
        body: JSON.stringify({token_addresses}),
        headers: new Headers({'Content-Type': 'application/json'}),
    });

    try {
        return await fetch(request);
    } catch (e: any) {
        console.log("getBalance err =>", e.message);
        throw new Error(e.message);
    }
};

const BalancePage = () => {

    const notify = useNotify();

    const onSubmit = async (data: any) => {

        console.log(data);

        const filteredData = data.tokenAddresses
            .filter((item: any) => item.tokenAddress !== null)
            .map((item: any) => {
                if (item.tokenAddress === "gas") {
                    return "";
                }
                return item.tokenAddress.trim();
            });
        const uniqueArray: Array<string> = Array.from(new Set(filteredData));

        console.log({uniqueArray});

        try {
            await getBalance(uniqueArray);
            notify('提交成功', {type: 'success'});
        } catch (error: any) {
            notify('请求服务器失败', {type: 'error'});
        }

    };

    return (
        <Card>
            <SimpleForm onSubmit={onSubmit} toolbar={<PostEditToolbar/>}>
                <Title title="余额统计"/>
                <ArrayInput source="tokenAddresses" label="token地址列表" helperText="统计gas请填写单词：gas">
                    <SimpleFormIterator inline>
                        <TextInput source="tokenAddress" label="token地址" helperText={false}/>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Card>

    );
}

export default BalancePage;
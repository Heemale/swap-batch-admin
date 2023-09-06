import * as React from 'react';
import {SimpleForm, required, NumberInput, Toolbar, SaveButton, useNotify, Title} from 'react-admin';
import {apiUrl} from "@/common/constants";
import {Card} from "@mui/material";


const PostEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton/>
    </Toolbar>
);

const collectGas = async (task_id: number) => {
    const request = new Request(`${apiUrl}/transaction/collect/gas`, {
        method: 'POST',
        body: JSON.stringify({task_id}),
        headers: new Headers({'Content-Type': 'application/json'}),
    });

    try {
        return await fetch(request);
    } catch (e: any) {
        console.log("collectGas err =>", e.message);
        throw new Error(e.message);
    }
};

const CollectPage = () => {

    const notify = useNotify();

    const onSubmit = async (data: any) => {

        const {id} = data;

        try {
            await collectGas(id);
            notify('提交成功', {type: 'success'});
        } catch (error: any) {
            notify('请求服务器失败', {type: 'error'});
        }

    };

    return (
        <Card>
            <SimpleForm onSubmit={onSubmit} toolbar={<PostEditToolbar/>}>
                <Title title="归集gas费"/>
                <NumberInput
                    source="id"
                    name="id"
                    label="任务ID"
                    validate={[required()]}
                    helperText="根据任务ID创建归集gas记录"
                    fullWidth
                />
            </SimpleForm>
        </Card>
    );
}

export default CollectPage;
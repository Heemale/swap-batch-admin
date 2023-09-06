import {Edit, SaveButton, SimpleForm, TextInput, Toolbar} from 'react-admin';
import React from "react";
import PostCreateEditActions from "@/components/ui/PostCreateEditActions";

const PostEditToolbar = (props: any) => (
    <Toolbar {...props} >
        <SaveButton alwaysEnable/>
    </Toolbar>
);

export const AuthGroupEdit = () => {
    return (
        <Edit actions={<PostCreateEditActions/>}>
            <SimpleForm toolbar={<PostEditToolbar/>}>
                <TextInput source="id" name="id" disabled fullWidth/>
                <TextInput source="name" name="name" label="名称" fullWidth/>
            </SimpleForm>
        </Edit>
    )
};
import {DatagridConfigurable, EditButton, usePermissions} from "react-admin";
import {Role} from "@/common/constants";
import TimeTextField from "@/components/ui/TimeTextField";
import * as React from "react";

const MyDatagridConfigurable = ({children, hasEdit = false}: {
    children: React.ReactNode,
    hasEdit?: boolean | undefined
}) => {

    const {permissions} = usePermissions();

    return (
        <DatagridConfigurable
            // @ts-ignore
            bulkActionButtons={permissions.group === Role.Super}
            sx={{
                '& .RaDatagrid-root': {},
                '& .RaDatagrid-tableWrapper': {
                    maxWidth: "83vw",
                    overflowX: "auto"
                },
                '& .RaDatagrid-thead': {
                    whiteSpace: "nowrap",
                },
                '& .RaDatagrid-row': {
                    whiteSpace: "nowrap",
                },
            }}>
            {children}
            <TimeTextField source="createtime" label="创建时间"/>
            <TimeTextField source="updatetime" label="更新时间"/>
            {hasEdit &&
                <EditButton/>
            }
        </DatagridConfigurable>
    )
}

export default MyDatagridConfigurable;
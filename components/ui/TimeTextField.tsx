import {useRecordContext} from "react-admin";
import {formatTimestamp} from "@/common/util";
import * as React from "react";

const TimeTextField = ({source, label}: { source: string, label?: string }) => {
    const record = useRecordContext();
    if (!record[source]) {
        return <span>-</span>;
    } else {
        return (<span>{formatTimestamp(record[source])}</span>);

    }
};

export default TimeTextField;
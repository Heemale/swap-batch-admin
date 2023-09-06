export const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export const dateToTimestamp = (date: string): number => {
    const dateTime = new Date(date);
    return Math.floor(dateTime.getTime() / 1000);
}

export const timestampToDate = (timestamp: number): string => {
    const dateTime = new Date(timestamp * 1000);
    return dateTime.toISOString();
}

export const timestamp = (): number => {
    return Math.round((new Date()).valueOf() / 1000);
}

// @ts-ignore
export const transform = async (data) => {

    console.log({
        ...data,
        updatetime: timestamp()
    })

    return {
        ...data,
        updatetime: timestamp()
    }
}

export interface DateTimeObject {
    M: number;   // Month (0-11)
    $D: number;  // Day of the month (1-31)
    $H: number;  // Hours (0-23)
    $L: string;  // Locale
    $M: number;  // Minutes (0-59)
    $W: number;  // Day of the week (0-6)
    $d: Date;    // Full date object
    $m: number;  // Month (0-11)
    $ms: number; // Milliseconds (0-999)
    $s: number;  // Seconds (0-59)
    $u: any;     // Undefined value
    $x: any;     // Any additional properties
    $y: number;  // Year
}

export const timestampToDateTimeObject = (timestamp: number): DateTimeObject => {

    const date = new Date(timestamp * 1000); // Convert to milliseconds

    return {
        M: date.getMonth(),
        $D: date.getDate(),
        $H: date.getHours(),
        $L: date.toLocaleString(),
        $M: date.getMinutes(),
        $W: date.getDay(),
        $d: date,
        $m: date.getMonth(),
        $ms: date.getMilliseconds(),
        $s: date.getSeconds(),
        $u: undefined,
        $x: {},
        $y: date.getFullYear(),
    };
}


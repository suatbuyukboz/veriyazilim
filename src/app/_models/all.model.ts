
export class Image {
    itemType?: string;
    itemId?: string;
    imageSize?: string;
    base64?: string;
    storeId?: string;
}

export class Location {
    type?: string;
    coordinates?: number[];
}

export class GeoLocation {
    latitude?: number;
    longitude?: number;
}

export class WorkingHour {
    day?: number;
    open?: string;
    close?: string;
    closed?: boolean;
}

export class StoreInfo {
    id?: string;
    geoLocation?: GeoLocation;
    userPoint?: number;
    workingHours?: WorkingHour[];
    status?: string;
    rate?: number;
    minOrderPrice?: number;
}

export class Response {
    id?: string;
    title?: string
    text?: string;
    type?: string;
    images?: Image[];
    location?: Location;
    isDinner?: boolean;
    isDelivery?: boolean;
    storeInfo?: StoreInfo;
    categoryId?: string;
}

export class MainResponse {
    response?: Response[];
}


export class GetRequest {
    skip?: number = 0
    limit?: number = 5
    latitude?: number
    longitude?: number
}
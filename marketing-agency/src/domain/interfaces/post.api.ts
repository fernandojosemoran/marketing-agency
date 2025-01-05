import { ICategoryApi } from "./blog.api.interface";

export interface IBodyPostApi {
    count:    number;
    next:     null | string;
    previous: null | string;
    results:  Results;
}

interface Results {
    posts: IPostApi[];
}

export interface IPostApi {
    id:          number;
    title:       string;
    slug:        string;
    thumbnail:   string;
    category:    ICategoryApi;
    description: string;
    published:   Date;
    views:       number;
    time_stamp:  number;
}

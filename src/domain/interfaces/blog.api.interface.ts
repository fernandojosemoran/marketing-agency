export interface IBlogPostAPI {
    count:    number;
    next:     null | string;
    previous: null | string;
    results:  IPostApiResults;
}

export interface IPostApiResults {
    post: IDetailPostApi;
    posts: IPostApi[];
}

export interface IDetailPostApi extends IPostApi{
    content: string;
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

export interface ICategoryApi {
    id:    number;
    name:  string;
    slug:  string;
    views: number;
}


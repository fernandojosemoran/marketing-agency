import { IPostApi } from "./blog.api.interface";

export interface ISearchBlogAPI {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  ResultsSearchBlogApi;
}

export interface ResultsSearchBlogApi {
    post_filtered: IPostApi[];
}


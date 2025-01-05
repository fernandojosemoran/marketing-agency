export interface ICategoryListAPI {
    categories: Category[];
}

export interface Category {
    id:             number;
    name:           string;
    slug:           string;
    views:          number;
    sub_categories: [];
}

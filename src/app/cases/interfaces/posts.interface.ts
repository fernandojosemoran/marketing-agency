import { StaticImageData } from "next/image";

export interface IPost {
    id?: number;
    img?: StaticImageData | string;
    category: ICategory;
    title: string;
    href: string;
    imageUrl: string;
    datetime: string;
    description: string;
    date: string;
    readingTime: string;
    author: IAuthor
}

export interface IAuthor {
    name: string;
    href: string;
    imageUrl: string;
}

export interface ICategory {
    name: string;
    href: string;
};

import { ICategoryListAPI } from "@/domain/interfaces/category.api.interface";
import { Env } from "@/infrastructure/constants";

import axios, { AxiosRequestConfig } from "axios";

// hidden dependencies
const REACT_APP_API_URL: string = Env.REACT_APP_API_URL;

class CategoryService {
    private readonly config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
    };
    
    public async getCategories(): Promise<ICategoryListAPI> {
        const url: string = `${REACT_APP_API_URL}/category/view_categories`;

        const response = await axios.get<ICategoryListAPI>(url, this.config);

        if (response.status !== 200) {
            throw "get categories not found";
        }

        return Promise.resolve(response.data);
    }
}

export default CategoryService;
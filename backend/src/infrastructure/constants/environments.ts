class Env {
    private static readonly env: ImportMetaEnv = import.meta.env;

    public static readonly PORT: number = Number(this.env.VITE_PORT);
    public static readonly AUTH_API_URL: string = this.env.VITE_AUTH_API_URL;
    public static readonly BLOG_API_URL: string = this.env.VITE_BLOG_API_URL;
}

export default Env;

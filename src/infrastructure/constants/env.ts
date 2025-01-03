export class Env {
    public static readonly REACT_APP_API_URL: string = process.env.REACT_APP_API_URL ?? "http://localhost:80/api";
}
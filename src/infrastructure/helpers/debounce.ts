interface IDebounce {
    timeout: number;
    callback: () => void
}

class Debounce {
    private static setTimeout: ReturnType<typeof setTimeout> | null = null;

    public static debounce({ callback, timeout }: IDebounce): void {

        if (this.setTimeout) clearTimeout(this.setTimeout);

        this.setTimeout = setTimeout(() => {
            callback();
        }, timeout ?? 300);
    }
}

export default Debounce;
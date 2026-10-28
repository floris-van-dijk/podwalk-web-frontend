declare module '@vueuse/core' {
    export function useWindowSize(): {
        width: import('vue').Ref<number>;
        height: import('vue').Ref<number>;
    };
}
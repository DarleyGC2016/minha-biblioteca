import useSWR from "swr";
import Api from "../services/api";

export function useFetch(url) {
    const {data, mutate} = useSWR(url, async url => {
        const response = await Api.get(url);

        return response.data;
    })

    return {data, mutate}
}
import axiosInstance from "@/shared/utils/axios_instance";

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;

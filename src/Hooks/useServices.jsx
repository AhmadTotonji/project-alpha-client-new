import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import primaryAxios from "./primaryAxios";

const useServices = () => {

    
    const { data, isLoading } = useQuery(["Services"], () =>
    primaryAxios.get(`/services`)
    );

    // console.log(Services);
    
    if (isLoading) {
        return <Loading></Loading>;
    };


  return {data};
};

export default useServices;

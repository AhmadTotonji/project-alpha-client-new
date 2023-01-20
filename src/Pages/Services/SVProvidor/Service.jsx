
import React from 'react';
import { useParams } from 'react-router-dom';
// import { ServicesNewData } from '../../../Data/ServicesNewData';
import useServices from '../../../Hooks/useServices';
import ServiceDetails from './ServiceDetails';

const Service = () => {
    const { id } = useParams();
    const {data} = useServices();

    const singleData = data?.data?.find(s => s?.id === Number(id));
    // console.log(singleData);

    return (
        <div className="container bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto py-20 px-3 md:px-5">
            {
                singleData?.provider?.map((data) => <ServiceDetails key={data?.name} data={data} id={id} />)
            }
        </div>
    );
};

export default Service;
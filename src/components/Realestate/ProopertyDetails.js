import React from 'react';
import bedroom from '../../assets/images/bedroom.jpg';
import '../../assets/styles/common.scss';
import '../Realestate/PropertyDetails.scss';
import { FaBath, FaBed, FaCar } from 'react-icons/fa';
// import city from '../../assets/images/images(1).jpg';

const Property = () => {
    const propertyDetails = {
        information: [
            {
                title: 'OLEA',
                place: 'Caulfield North, Victoria',
                img: bedroom,
            },
            {
                title: 'Live City',
                place: 'Footscray, Victoria',
                img: bedroom,
            },
            {
                title: 'Victoria & Albert, Broadbeach',
                place: 'Broadbeach Queensland',
                img: bedroom,
            },
        ],
    };
    // console.log(propertyDetails.information[0].img);
    return (
        <div className='hero'>
            <div className='container'>
                <div className='title'>
                    <h3 className='font--size-md'>
                        Australia's best investment property deals
                    </h3>
                </div>
                <div className='property-info flex'>
                    {propertyDetails.information.map((info) => (
                        <div className='property-img justify--content_space-between'>
                            <img
                                src={info.img}
                                alt='bedroom'
                                className='bedroom-img'></img>
                            <div>
                                <p>{info.title}</p>
                            </div>
                            <div>
                                <p>{info.place}</p>
                            </div>
                            <div>
                                <FaBath />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Property;

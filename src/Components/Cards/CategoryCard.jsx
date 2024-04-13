import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ x }) => {
    return (
        <Link to={`/category/${x.name}`} className="group relative block bg-black">
            <img
                alt="Developer"
                src={x.bgImage}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
                {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Developer
                </p> */}

                <Link to={`/category/${x.name}`} className="text-xl font-bold text-pink-500 sm:text-2xl">{x.name}</Link>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                            perferendis hic asperiores quibusdam quidem voluptates doloremque
                            reiciendis nostrum harum. Repudiandae?
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard;

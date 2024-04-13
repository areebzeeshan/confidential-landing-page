import React, { useState } from 'react';
import './index.css';

export default function ProductBanner({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {item.GameProducts.map((x) => (
                        <div
                            className="lg:w-1/4 md:w-1/2 p-4 w-full"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div
                                className="relative overflow-hidden rounded-lg shadow transition parent"
                                style={{
                                    boxShadow: isHovered
                                        ? `0 25px 50px -12px ${x.secondaryColor}`
                                        : 'none',
                                }}
                            >
                                <img
                                    alt="Office"
                                    src={x.bgImage}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div
                                    className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                                >
                                    <div className="p-4 sm:p-6">
                                        <h2 className="mt-0.5 text-lg text-white child hover:text-[#EC4899]">
                                            {x.name}
                                        </h2>

                                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                            Molestias explicabo corporis voluptatem?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

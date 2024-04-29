import React from "react";

export default function MiniCard() {
    return (
        <div className="flex items-center gap-6 group">
            <div className="size-24 overflow-hidden">
                <img
                    src="https://picsum.photos/900"
                    alt=""
                    className="h-full max-w-full object-cover group-hover:scale-105 duration-300"
                />
            </div>
            <p className="w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                culpa quos quia natus!
            </p>
        </div>
    );
}

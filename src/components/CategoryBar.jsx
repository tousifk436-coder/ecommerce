import {
    Sparkles,
    SprayCan,
    Sofa,
    ShoppingBasket,
    Home,
    Laptop,
    Shirt,
    Footprints,
    Watch,
    Dumbbell,
    Car
} from "lucide-react";

const categories = [
    { label: "Men's", icon: Shirt, badge:"new" },
    { label: "Women's", icon: Shirt },
    { label: "Beauty", icon: Sparkles },
    { label: "Fragrances", icon: SprayCan },
    { label: "Sports", icon: Dumbbell },
    { label: "Shoes", icon: Footprints },
    { label: "Watches", icon: Watch },
    { label: "Home & Kitchen", icon: Home },
    { label: "Groceries", icon: ShoppingBasket },
    { label: "Furniture", icon: Sofa },
    { label: "Electronics", icon: Laptop },
    { label: "Vehicle", icon: Car },
];

export default function CategoryBar() {
    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-4 flex-wrap">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col items-center justify-center text-center gap-2 min-w-[90px] cursor-pointer group"
                        >
                            {/* Badge */}
                            {cat.badge && (
                                <span className="absolute -top-2 right-2 text-[10px] bg-pink-600 text-white px-1.5 py-0.5 rounded">
                                    {cat.badge}
                                </span>
                            )}

                            {/* Icon */}
                            <div className="p-3 rounded-full bg-slate-100 group-hover:bg-sky-100 transition">
                                <cat.icon className="w-6 h-6 text-red-500 group-hover:text-sky-600" />
                            </div>

                            {/* Label */}
                            <div className="flex text-pink-600 items-center gap-1 text-sm font-medium text-slate-800">
                                {cat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

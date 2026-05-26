import ProductCard from "./ProductCard"

const mockData = [
    {
        id: "01",
        name: "Trendy Queen Womens Off the Shoulder Tops Oversized Summer Spring T-Shirts 2026",
        img: "https://m.media-amazon.com/images/I/61GXXIx+SgL._AC_UL320_.jpg",
        price: "300.000",
        quantity: 1,
    }

]

export default function ProductGrid() {

    return (
        <div>
            {mockData.length > 0 && mockData.map((product) =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    )
}
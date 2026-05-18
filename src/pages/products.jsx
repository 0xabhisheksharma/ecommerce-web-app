import ProductCard from '../components/ProductCard';

function Products() {

  const products = [
    {
      id: 1,
      title: 'Sneakers',
      price: 2999,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },

    {
      id: 2,
      title: 'Headphones',
      price: 4999,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    },

    {
      id: 3,
      title: 'Watch',
      price: 6999,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    },

    {
      id: 4,
      title: 'Hoodie',
      price: 1999,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    },
  ]

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </div>
  )
}

export default Products
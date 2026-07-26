import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductGallery from './components/ProductGallery/ProductGallery';
import ProductInfo from './components/ProductInfo/ProductInfo';
import ProductDetailsTab from './components/ProductDetailsTab/ProductDetailsTab';
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import useScrollAnimation from '../../hooks/useScrollAnimation';
import api from '../../config/api';

const Product = () => {
  const { id } = useParams();
  const galleryRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top and fetch product when the ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    api.get(`/products/${id}`)
      .then(res => {
        const data = res.data?.data || res.data;
        const normalizedProduct = {
          ...data,
          id: data._id || data.id,
          name: data.productName || data.name,
          price: parseFloat(data.offerPrice || data.price || 0),
          oldPrice: data.offerPrice ? parseFloat(data.price) : null,
          image: data.mainImage || data.image,
          gallery: [data.mainImage, data.addImg1, data.addImg2, data.addImg3, data.addImg4, data.addImg5].filter(Boolean),
          description: data.description || '',
          colors: data.colors ? data.colors.split(',').map(c => c.trim()) : [],
          tags: data.tag ? data.tag.split(',').map(t => t.trim()) : [],
        };
        
        if (data.craftsmanship || data.materials || data.sizes || data.hsnCode || data.productCode) {
          normalizedProduct.specifications = {};
          if (data.craftsmanship) normalizedProduct.specifications['Craftsmanship'] = data.craftsmanship;
          if (data.materials) normalizedProduct.specifications['Materials'] = data.materials;
          if (data.sizes) normalizedProduct.specifications['Sizes'] = data.sizes;
          if (data.hsnCode) normalizedProduct.specifications['HSN Code'] = data.hsnCode;
          if (data.productCode) normalizedProduct.specifications['Product Code'] = data.productCode;
        }

        setProduct(normalizedProduct);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-[#15110F] flex items-center justify-center text-white">Loading...</div>;
  }

  if (!product) {
    return <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>Product not found</div>;
  }

  return (
    <main className="bg-[#15110F] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-[#15110F] border-b border-[#2c241c]">
        <nav className="px-6 py-3 max-w-7xl mx-auto font-sans relative z-10" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center m-0 p-0">
            <li className="flex items-center text-[0.85rem] text-[#b5aaa0] tracking-[0.5px]">
              <Link to="/" className="text-[#b5aaa0] no-underline transition-colors duration-200 hover:text-[#c8956c]">
                Home
              </Link>
              <ChevronRight size={14} className="mx-2 text-[#4a3e35] opacity-70" />
            </li>
            <li className="flex items-center text-[0.85rem] text-[#b5aaa0] tracking-[0.5px]">
              <Link to="/products" className="text-[#b5aaa0] no-underline transition-colors duration-200 hover:text-[#c8956c]">
                Products
              </Link>
              <ChevronRight size={14} className="mx-2 text-[#4a3e35] opacity-70" />
            </li>
            {product.category && (
              <li className="flex items-center text-[0.85rem] text-[#b5aaa0] tracking-[0.5px]">
                <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-[#b5aaa0] no-underline transition-colors duration-200 hover:text-[#c8956c]">
                  {product.category}
                </Link>
                <ChevronRight size={14} className="mx-2 text-[#4a3e35] opacity-70" />
              </li>
            )}
            {product.subCategory && (
              <li className="flex items-center text-[0.85rem] text-[#b5aaa0] tracking-[0.5px]">
                <Link to={`/products?category=${encodeURIComponent(product.category)}&subcategory=${encodeURIComponent(product.subCategory)}`} className="text-[#b5aaa0] no-underline transition-colors duration-200 hover:text-[#c8956c]">
                  {product.subCategory}
                </Link>
                <ChevronRight size={14} className="mx-2 text-[#4a3e35] opacity-70" />
              </li>
            )}
            <li className="flex items-center text-[0.85rem] text-[#b5aaa0] tracking-[0.5px]">
              <span className="text-[#c8956c] font-medium" aria-current="page">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Main Top Section: Gallery + Info */}
      <section className="py-16 px-8 max-sm:py-8 max-sm:px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8">
            {/* Left Column: Image Gallery */}
            <div ref={galleryRef} className="relative z-20" style={{opacity:0,transform:'translateX(-40px)',transition:'opacity 0.7s ease,transform 0.7s ease'}}>
              <ProductGallery product={product} />
            </div>
            
            <div ref={infoRef} className="relative z-10" style={{opacity:0,transform:'translateX(40px)',transition:'opacity 0.7s ease,transform 0.7s ease,transition-delay:0.15s'}}>
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section: Tabs, Description, Banner */}
      <ProductDetailsTab product={product} />

      {/* Related Products Section */}
      <RelatedProducts currentProductId={product.id} category={product.category} subCategory={product.subCategory} />

    </main>
  );
};

export default Product;

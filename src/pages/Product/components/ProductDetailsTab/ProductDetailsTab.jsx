import React from 'react';

const ProductDetailsTab = ({ product }) => {
  return (
    <section className="p-8 max-sm:p-4 bg-[#15110F]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center border-b border-[#2c241c] mb-8">
          <button className="bg-transparent border-none font-serif text-[0.95rem] py-4 px-8 cursor-pointer tracking-[1px] relative text-[#c07a5d] after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-full after:h-[2px] after:bg-[#c07a5d]">DESCRIPTION</button>
        </div>

        <div className="text-[#b5aaa0] font-sans">
          <h2 className="font-serif text-[1.4rem] text-white mb-4 font-medium">About <br /> <span style={{ color: 'var(--color-brand-base)' }}>this item</span></h2>
          <p className="text-[0.95rem] leading-[1.6] mb-8">
            {product?.description || "These bowl set are very light to hold for microwave utensils and the smooth round edges make you touch them with delight. Unlike ceramic bowls or plastic bowl our unbreakable wheat straw bowls are made of a robust and light material that protects the bowl from breaking if it is dropped, get this must-have tableware item that is both eco-friendly and stylish for your home."}
          </p>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden max-md:h-[300px]">
            <img 
              src={product?.addImg1 || product?.mainImage || "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"} 
              alt={product?.productName || "Product image"} 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400&auto=format&fit=crop"; }}
            />
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 bg-white/90 p-8 max-sm:p-4 rounded max-md:left-[2%] max-md:right-[2%] max-md:text-center">
              <h3 className="font-serif text-[1.8rem] text-black mb-4 m-0">{product?.category || "Product Details"}</h3>
              {product?.subCategory && <p className="m-0 mb-2 text-[#b5aaa0]">{product.subCategory}</p>}
              {product?.materials && <p className="m-0 mb-2 text-[#b5aaa0]">{product.materials}</p>}
              {product?.craftsmanship && <p className="m-0 mb-2 text-[#b5aaa0]">{product.craftsmanship}</p>}
              {!product?.subCategory && !product?.materials && !product?.craftsmanship && (
                <>
                  <p className="m-0 mb-2 text-[#b5aaa0]">High Quality Material</p>
                  <p className="m-0 mb-2 text-[#b5aaa0]">Handcrafted with precision</p>
                  <p className="m-0 mb-2 text-[#b5aaa0]">Durable and Stylish</p>
                </>
              )}
            </div>
          </div>

          {product?.highlight || product?.craftHighlight ? (
            <ul className="pl-5 marker:text-[#c07a5d]">
              {product.highlight && <li className="text-[0.95rem] leading-[1.6] mb-4"><strong>Highlight:</strong> {product.highlight}</li>}
              {product.craftHighlight && <li className="text-[0.95rem] leading-[1.6] mb-4"><strong>Craftsmanship:</strong> {product.craftHighlight}</li>}
              {product.sizes && <li className="text-[0.95rem] leading-[1.6] mb-4"><strong>Available Sizes:</strong> {product.sizes}</li>}
            </ul>
          ) : (
            <ul className="pl-5 marker:text-[#c07a5d]">
              <li className="text-[0.95rem] leading-[1.6] mb-4">Perfect Brew Everytime: Perfectly brews 2 - 3 cups of tea.</li>
              <li className="text-[0.95rem] leading-[1.6] mb-4">Lead FREE Ceramic: Made from lead free high-fired finely glazed ceramic.</li>
              <li className="text-[0.95rem] leading-[1.6] mb-4">1 Year Warranty: Crafted with meticulous attention to detail.</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTab;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Heart, GitCompare, ChevronDown, ChevronUp, Share, Minus, Plus, Truck, Shirt, Ruler, Mail, MessageCircle, Fingerprint, Globe, Leaf, Shield } from 'lucide-react';

const defaultAccordionData = [
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    icon: Truck,
    content: (
      <>
        <p className="m-0 mb-4 last:mb-0">Free shipping and returns available on all orders!</p>
        <p className="m-0 mb-4 last:mb-0">We ship all US domestic orders within 5-10 <strong>business days</strong></p>
      </>
    )
  },
  {
    id: 'materials',
    title: 'Materials',
    icon: Shirt,
    content: (
      <p className="m-0 mb-4 last:mb-0">The item with the Committed label has a lower environmental impact because it was made with sustainable materials or methods. We are committed to creating items that combine sustainability with style. Made with recycled cashmere and industrial by-categories.</p>
    )
  },
  {
    id: 'size',
    title: 'Size Chart',
    icon: Ruler,
    content: (
      <>
        <p className="m-0 mb-4 last:mb-0">Finding the perfect fit is essential for a comfortable and flattering wardrobe. To assist you in selecting the right size, we've compiled comprehensive size guides for both men's and women's clothing. Please refer to the following information to ensure a perfect fit every time.</p>
        <p className="m-0 mb-4 last:mb-0"><strong>Men's Clothing Size Guide Table:</strong></p>
        <div className="w-full overflow-x-auto my-6">
          <table className="w-full border-collapse text-center font-serif text-[0.8rem] text-[#b5aaa0]">
            <thead>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none">
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Size</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Chest (inches)</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Waist (inches)</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Hips (inches)</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Neck (inches)</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Sleeve Length (inches)</th>
                <th className="bg-[#15110F] font-semibold py-4 px-2 border-b-2 border-white max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1">Inseam (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">XS</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">34-36</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">28-30</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">34-36</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">14.5-15</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">32-33</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">30-32</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">S</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">36-38</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">30-32</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">36-38</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">15-15.5</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">33-34</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">30-32</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">M</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">38-40</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">32-34</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">38-40</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">15.5-16</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">34-35</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">32-33</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">L</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">40-42</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">34-36</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">40-42</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">16-16.5</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">35-36</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">33-34</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">XL</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">42-44</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">36-38</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">42-44</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">16.5-17</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">36-37</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">34-35</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">XXL</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">44-46</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">38-40</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">44-46</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">17-17.5</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">37-38</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">35-36</td></tr>
              <tr className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none"><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">XXXL</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">46-48</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">40-42</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">46-48</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">17.5-18</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">38-39</td><td className="py-4 px-2 border-b-2 border-white bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0">36-37</td></tr>
            </tbody>
          </table>
        </div>
        <p className="m-0 mb-4 last:mb-0">Please note that sizes may vary slightly between brands and styles. It's always best to refer to the specific size chart provided by the manufacturer or retailer for the most accurate sizing information.</p>
      </>
    )
  },
  {
    id: 'care',
    title: 'Care Instructions',
    icon: Heart,
    content: (
      <p className="m-0 mb-4 last:mb-0">We advise routinely dusting your items with a gentle cleanser to preserve its look. Periodically, it may need to be softly wet with a mild detergent solution.</p>
    )
  }
];

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const navigate = useNavigate();

  if (!product) return null;

  const accordionsToRender = [];

  if (product.specifications) {
    accordionsToRender.push({
      id: 'specifications',
      title: 'Specifications',
      icon: Ruler,
      content: (
        <div className="bg-[#15110F] rounded">
          <table className="w-full border-collapse text-left">
            <tbody>
              {Object.entries(product.specifications).map(([key, value], idx, arr) => (
                <tr key={key} className="max-sm:border-b max-sm:border-[#2c241c] last:max-sm:border-none">
                  <th className={`py-3 px-4 font-medium text-white w-[40%] bg-[#15110F] max-sm:block max-sm:w-full max-sm:border-none max-sm:bg-transparent max-sm:pb-1 ${idx === arr.length - 1 ? '' : 'border-b border-[#2c241c]'}`}>{key}</th>
                  <td className={`py-3 px-4 text-[#b5aaa0] max-sm:block max-sm:w-full max-sm:border-none max-sm:pt-0 ${idx === arr.length - 1 ? '' : 'border-b border-[#2c241c]'}`}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    });
  }

  if (product.accordions) {
    accordionsToRender.push(...product.accordions.map(a => ({ ...a, icon: ChevronDown })));
  } else {
    accordionsToRender.push(...defaultAccordionData);
  }

  return (
    <div className="flex flex-col gap-5 font-sans text-[#b5aaa0]">
      <h1 className="font-serif text-[3.5rem] text-white font-medium m-0 leading-[1.3]">{product.name}</h1>
      
      <div className="flex items-center gap-4">
        {product.priceOnRequest ? (
          <span className="text-[#c07a5d] text-[1.4rem] font-semibold">Price on Request</span>
        ) : (
          <>
            {product.oldPrice && <span className="line-through text-[#999999] text-[1.1rem]">${product.oldPrice.toFixed(2)}</span>}
            <span className="text-[#c07a5d] text-[1.4rem] font-semibold">${product.price.toFixed(2)}</span>
            <span className="border border-[#c07a5d] text-[#c07a5d] text-[0.65rem] font-bold py-1 px-2 uppercase tracking-[1px]">SOLD OUT</span>
          </>
        )}
      </div>

      <p className="text-[0.95rem] leading-[1.6] text-[#b5aaa0] m-0">{product.description}</p>

      <div className="flex items-center gap-2 text-[0.9rem] font-medium text-white">
        <Eye size={16} />
        <span>16 people are viewing this right now</span>
      </div>

      <div className="flex items-center gap-2 text-[0.9rem]">
        <span className="font-semibold text-white">Availability:</span>
        <span className="flex items-center gap-[0.35rem] text-[#888888]">
          <span className="w-[6px] h-[6px] bg-[#cccccc] rounded-full"></span> Out of stock
        </span>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3">
        <span className="text-[0.9rem] font-semibold text-white">Material</span>
        <div className="flex gap-2">
          <button className="bg-transparent border border-[#2c241c] py-2 px-4 font-sans text-[0.85rem] text-[#999999] cursor-not-allowed relative after:content-[''] after:absolute after:top-1/2 after:left-[10%] after:right-[10%] after:h-[1px] after:bg-[#999999] after:-rotate-10" disabled>Standard</button>
          <button className="bg-transparent border border-[#2c241c] py-2 px-4 font-sans text-[0.85rem] text-[#999999] cursor-not-allowed relative after:content-[''] after:absolute after:top-1/2 after:left-[10%] after:right-[10%] after:h-[1px] after:bg-[#999999] after:-rotate-10" disabled>Premium</button>
          <button className="bg-transparent border border-[#2c241c] py-2 px-4 font-sans text-[0.85rem] text-[#999999] cursor-not-allowed relative after:content-[''] after:absolute after:top-1/2 after:left-[10%] after:right-[10%] after:h-[1px] after:bg-[#999999] after:-rotate-10" disabled>Elite</button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[0.9rem] font-semibold text-white">Color</span>
        <div className="flex gap-2">
          {product.colors && product.colors.map((color, idx) => (
             <button 
               key={idx}
               className={`w-6 h-6 rounded-full border-2 border-transparent cursor-pointer p-0 ${selectedColor === color ? 'shadow-[0_0_0_2px_#ffffff,0_0_0_4px_#cccccc]' : ''}`}
               style={{ backgroundColor: color }}
               onClick={() => setSelectedColor(color)}
               aria-label={`Color ${color}`}
             ></button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[0.9rem] font-semibold text-white">Set Quantity</span>
        <div className="flex gap-4 h-[44px] max-sm:flex-col max-sm:h-auto max-sm:gap-2">
          <div className="flex border border-[#2c241c] w-[120px] max-sm:w-full max-sm:h-[44px]">
            <button className="bg-transparent border-none w-[35px] flex items-center justify-center cursor-pointer text-[#b5aaa0]" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14}/></button>
            <input className="flex-1 w-full border-none text-center font-sans text-[1rem] outline-none bg-transparent text-[#b5aaa0]" type="number" value={quantity} readOnly />
            <button className="bg-transparent border-none w-[35px] flex items-center justify-center cursor-pointer text-[#b5aaa0]" onClick={() => setQuantity(quantity + 1)}><Plus size={14}/></button>
          </div>
          {product.priceOnRequest ? null : (
            <button className="flex-1 bg-[#e8a598] text-white border-none font-sans font-semibold tracking-[1px] cursor-not-allowed max-sm:w-full" disabled>SOLD OUT</button>
          )}
        </div>
        {product.priceOnRequest ? (
          <div className="flex gap-4 mt-4 max-sm:flex-col max-sm:gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 p-4 border-none rounded bg-[#c2957b] text-white font-sans font-semibold text-[0.9rem] cursor-pointer transition-opacity duration-200 hover:opacity-90" onClick={() => navigate(`/product/${product.id}/enquiry`)}>
              <Mail size={16} /> REQUEST QUOTE
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 p-4 border-none rounded bg-[#25d366] text-white font-sans font-semibold text-[0.9rem] cursor-pointer transition-opacity duration-200 hover:opacity-90"><MessageCircle size={16} /> WHATSAPP INQUIRY</button>
          </div>
        ) : (
          <button className="h-[44px] bg-[#15110F] border border-[#222222] text-white font-sans font-semibold tracking-[1px] cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black max-sm:w-full mt-4">BUY IT NOW</button>
        )}
      </div>

      {/* Badges Section */}
      {product.badges && (
        <div className="flex justify-between items-center border border-[#f0e6d2] rounded-lg py-6 px-8 mt-6 bg-[#15110F] max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:py-4 max-sm:px-6">
          {product.badges.map((badge, idx) => {
            let Icon = Shield;
            if (badge === 'Authentic') Icon = Fingerprint;
            if (badge === 'Global') Icon = Globe;
            if (badge === 'Artisan') Icon = Leaf;
            if (badge === 'Secure') Icon = Shield;

            return (
              <div key={idx} className="flex flex-col items-center gap-2 max-sm:flex-row max-sm:gap-4">
                <Icon size={24} className="text-[#8f6a50]" />
                <span className="font-sans text-[0.85rem] font-semibold text-[#b5aaa0]">{badge}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Meta Links */}
      <div className="flex gap-6 mt-2">
        <button className="bg-transparent border-none flex items-center gap-[0.4rem] font-sans text-[0.9rem] text-[#b5aaa0] cursor-pointer p-0 hover:text-[#c07a5d]"><Heart size={16} /> Wishlist</button>
        <button className="bg-transparent border-none flex items-center gap-[0.4rem] font-sans text-[0.9rem] text-[#b5aaa0] cursor-pointer p-0 hover:text-[#c07a5d]"><GitCompare size={16} /> Compare</button>
      </div>

      {/* Accordions (Now includes Specifications) */}
      <div className="flex flex-col mt-4">
        {accordionsToRender.map((tab) => (
          <div key={tab.id} className="mb-2 group">
            <div 
              className="flex items-center justify-between p-4 px-5 bg-[#15110F] cursor-pointer transition-colors duration-200" 
              onClick={() => setOpenAccordion(openAccordion === tab.id ? null : tab.id)}
            >
              <div className="flex items-center gap-3 text-[0.9rem] font-medium text-white">
                {tab.icon && typeof tab.icon === 'function' ? <tab.icon size={16} /> : null}
                <span>{tab.title}</span>
              </div>
              {openAccordion === tab.id ? <ChevronUp size={16} className="text-[#b5aaa0]" /> : <ChevronDown size={16} className="text-[#b5aaa0]" />}
            </div>
            
            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openAccordion === tab.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
              <div className="py-6 px-2 text-[0.85rem] leading-[1.6] text-[#b5aaa0]">
                {tab.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      {product.tags && (
        <div className="mt-6 flex flex-col gap-2">
          <span className="text-[0.85rem] font-semibold text-white">Trending Tags:</span>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#15110F] text-[#b5aaa0] py-[0.4rem] px-4 rounded-full text-[0.75rem] font-medium cursor-pointer transition-colors duration-200 hover:bg-[#c2957b] hover:text-white">{tag}</span>
            ))}
          </div>
        </div>
      )}

      <button className="bg-transparent border-none flex items-center gap-2 font-sans text-[0.85rem] font-semibold text-white cursor-pointer mt-4 w-fit p-0" onClick={() => {
        const shareData = {
          title: product.name,
          text: `Check out this amazing product: ${product.name}`,
          url: window.location.href
        };
        if (navigator.share) {
          navigator.share(shareData).catch((err) => console.error("Error sharing:", err));
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      }}>
        <Share size={16} /> SHARE
      </button>

    </div>
  );
};

export default ProductInfo;

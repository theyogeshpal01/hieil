import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Heart, GitCompare, ChevronDown, ChevronUp, Share, Minus, Plus, Truck, Shirt, Ruler, Mail, MessageCircle, Fingerprint, Globe, Leaf, Shield } from 'lucide-react';
import styles from './ProductInfo.module.css';

const defaultAccordionData = [
  {
    id: 'shipping',
    title: 'Shipping & Returns',
    icon: Truck,
    content: (
      <>
        <p>Free shipping and returns available on all orders!</p>
        <p>We ship all US domestic orders within 5-10 <strong>business days</strong></p>
      </>
    )
  },
  {
    id: 'materials',
    title: 'Materials',
    icon: Shirt,
    content: (
      <p>The item with the Committed label has a lower environmental impact because it was made with sustainable materials or methods. We are committed to creating items that combine sustainability with style. Made with recycled cashmere and industrial by-categories.</p>
    )
  },
  {
    id: 'size',
    title: 'Size Chart',
    icon: Ruler,
    content: (
      <>
        <p>Finding the perfect fit is essential for a comfortable and flattering wardrobe. To assist you in selecting the right size, we've compiled comprehensive size guides for both men's and women's clothing. Please refer to the following information to ensure a perfect fit every time.</p>
        <p><strong>Men's Clothing Size Guide Table:</strong></p>
        <div className={styles.tableWrapper}>
          <table className={styles.sizeTable}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (inches)</th>
                <th>Waist (inches)</th>
                <th>Hips (inches)</th>
                <th>Neck (inches)</th>
                <th>Sleeve Length (inches)</th>
                <th>Inseam (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>XS</td><td>34-36</td><td>28-30</td><td>34-36</td><td>14.5-15</td><td>32-33</td><td>30-32</td></tr>
              <tr><td>S</td><td>36-38</td><td>30-32</td><td>36-38</td><td>15-15.5</td><td>33-34</td><td>30-32</td></tr>
              <tr><td>M</td><td>38-40</td><td>32-34</td><td>38-40</td><td>15.5-16</td><td>34-35</td><td>32-33</td></tr>
              <tr><td>L</td><td>40-42</td><td>34-36</td><td>40-42</td><td>16-16.5</td><td>35-36</td><td>33-34</td></tr>
              <tr><td>XL</td><td>42-44</td><td>36-38</td><td>42-44</td><td>16.5-17</td><td>36-37</td><td>34-35</td></tr>
              <tr><td>XXL</td><td>44-46</td><td>38-40</td><td>44-46</td><td>17-17.5</td><td>37-38</td><td>35-36</td></tr>
              <tr><td>XXXL</td><td>46-48</td><td>40-42</td><td>46-48</td><td>17.5-18</td><td>38-39</td><td>36-37</td></tr>
            </tbody>
          </table>
        </div>
        <p>Please note that sizes may vary slightly between brands and styles. It's always best to refer to the specific size chart provided by the manufacturer or retailer for the most accurate sizing information.</p>
      </>
    )
  },
  {
    id: 'care',
    title: 'Care Instructions',
    icon: Heart,
    content: (
      <p>We advise routinely dusting your items with a gentle cleanser to preserve its look. Periodically, it may need to be softly wet with a mild detergent solution.</p>
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
        <div className={styles.specificationsBox}>
          <table className={styles.specTable}>
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
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
    <div className={styles.infoWrapper}>
      <h1 className={styles.title}>{product.name}</h1>
      
      <div className={styles.priceContainer}>
        {product.priceOnRequest ? (
          <span className={styles.newPrice}>Price on Request</span>
        ) : (
          <>
            {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>}
            <span className={styles.newPrice}>${product.price.toFixed(2)}</span>
            <span className={styles.badge}>SOLD OUT</span>
          </>
        )}
      </div>

      <p className={styles.description}>{product.description}</p>

      <div className={styles.viewingNow}>
        <Eye size={16} />
        <span>16 people are viewing this right now</span>
      </div>

      <div className={styles.availability}>
        <span className={styles.metaLabel}>Availability:</span>
        <span className={styles.outOfStock}>
          <span className={styles.dot}></span> Out of stock
        </span>
      </div>

      {/* Options */}
      <div className={styles.optionsGroup}>
        <span className={styles.optionLabel}>Material</span>
        <div className={styles.materialOptions}>
          <button className={styles.materialBtn} disabled>Standard</button>
          <button className={styles.materialBtn} disabled>Premium</button>
          <button className={styles.materialBtn} disabled>Elite</button>
        </div>
      </div>

      <div className={styles.optionsGroup}>
        <span className={styles.optionLabel}>Color</span>
        <div className={styles.colorOptions}>
          {product.colors && product.colors.map((color, idx) => (
             <button 
               key={idx}
               className={`${styles.colorBtn} ${selectedColor === color ? styles.active : ''}`}
               style={{ backgroundColor: color }}
               onClick={() => setSelectedColor(color)}
               aria-label={`Color ${color}`}
             ></button>
          ))}
        </div>
      </div>

      <div className={styles.optionsGroup}>
        <span className={styles.optionLabel}>Set Quantity</span>
        <div className={styles.actionRow}>
          <div className={styles.quantitySelector}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14}/></button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}><Plus size={14}/></button>
          </div>
          {product.priceOnRequest ? null : (
            <button className={styles.addToCartBtn} disabled>SOLD OUT</button>
          )}
        </div>
        {product.priceOnRequest ? (
          <div className={styles.inquiryButtonsRow}>
            <button className={styles.quoteBtn} onClick={() => navigate(`/product/${product.id}/enquiry`)}>
              <Mail size={16} /> REQUEST QUOTE
            </button>
            <button className={styles.whatsappBtn}><MessageCircle size={16} /> WHATSAPP INQUIRY</button>
          </div>
        ) : (
          <button className={styles.buyNowBtn}>BUY IT NOW</button>
        )}
      </div>

      {/* Badges Section */}
      {product.badges && (
        <div className={styles.badgesBox}>
          {product.badges.map((badge, idx) => {
            let Icon = Shield;
            if (badge === 'Authentic') Icon = Fingerprint;
            if (badge === 'Global') Icon = Globe;
            if (badge === 'Artisan') Icon = Leaf;
            if (badge === 'Secure') Icon = Shield;

            return (
              <div key={idx} className={styles.badgeItem}>
                <Icon size={24} className={styles.badgeIcon} />
                <span className={styles.badgeText}>{badge}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Meta Links */}
      <div className={styles.actionLinks}>
        <button><Heart size={16} /> Wishlist</button>
        <button><GitCompare size={16} /> Compare</button>
      </div>

      {/* Accordions (Now includes Specifications) */}
      <div className={styles.accordions}>
        {accordionsToRender.map((tab) => (
          <div key={tab.id} className={`${styles.accordionWrapper} ${openAccordion === tab.id ? styles.open : ''}`}>
            <div 
              className={styles.accordionHeader} 
              onClick={() => setOpenAccordion(openAccordion === tab.id ? null : tab.id)}
            >
              <div className={styles.accordionTitle}>
                {tab.icon && typeof tab.icon === 'function' ? <tab.icon size={16} /> : null}
                <span>{tab.title}</span>
              </div>
              {openAccordion === tab.id ? <ChevronUp size={16} className={styles.chevron} /> : <ChevronDown size={16} className={styles.chevron} />}
            </div>
            
            <div className={styles.accordionContent}>
              <div className={styles.accordionContentInner}>
                {tab.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Section */}
      {product.tags && (
        <div className={styles.productTagsWrapper}>
          <span className={styles.tagsTitle}>Trending Tags:</span>
          <div className={styles.tagsContainer}>
            {product.tags.map((tag, idx) => (
              <span key={idx} className={styles.pillTag}>{tag}</span>
            ))}
          </div>
        </div>
      )}

      <button className={styles.shareBtn} onClick={() => {
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

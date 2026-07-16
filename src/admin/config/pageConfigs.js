import React from 'react';
import { FaBus, FaPlane, FaCar, FaEnvelope, FaPhone, FaWhatsapp, FaFileAlt, FaTruck, FaStore, FaTrash, FaCheck, FaEye, FaDownload, FaEdit } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

export const genericData = [
];

export const categoryData = [
  { id: 1, name: 'Handcrafted Wooden Products', image: 'image.jpg', status: 'ACTIVE' },
  { id: 2, name: 'Handcrafted Metal Products', image: 'image2.jpg', status: 'ACTIVE' },
  { id: 3, name: 'Handcrafted Blue Pottery', image: 'image3.jpg', status: 'ACTIVE' },
];

export const subcategoryData = [
  { id: 1, category: 'Handcrafted Wooden Products', subcategoryName: 'Preparation Tools', description: '' },
  { id: 2, category: 'Handcrafted Wooden Products', subcategoryName: 'Storage and Organization', description: '' },
  { id: 3, category: 'Handcrafted Metal Products', subcategoryName: 'Candle Holder', description: '' },
  { id: 4, category: 'Handcrafted Blue Pottery', subcategoryName: 'Luxury kitchen Collections', description: '' },
];

export const productData = [
  { id: 1, category: 'Handcrafted Blue Pottery', subCategory: 'Luxury Dining & Tableware', productName: 'Serving Tray', tag: 'TOP PICK', sizes: '21 x 11.5 x 5 cm', material: 'stone' },
  { id: 2, category: 'Handcrafted Blue Pottery', subCategory: 'Luxury Decorative Collections', productName: 'Decorative', tag: 'TRENDING NOW', sizes: '20 cm to 43 cm', material: 'stone' },
];

export const blogData = [
  { id: 1, category: 'Handicraft', title: 'The art of pottery', tag: 'Art', image: 'blog1.jpg' },
  { id: 2, category: 'Woodwork', title: 'Wooden carvings explained', tag: 'Wood', image: 'blog2.jpg' },
];

export const testimonialData = [
  { id: 7, date: '22 Mar 2026', userDetails: 'Sakura, Business Man', rating: '5 Stars', city: 'JAPAN, TOKYO', message: 'I recently purchased a beautiful handicraft...', status: 'APPROVED' },
  { id: 6, date: '23 Feb 2026', userDetails: 'test test', rating: '3 Stars', city: 'CITY', message: 'message', status: 'REJECTED' },
];

export const galleryData = [
  { id: 1, date: '2026-06-20', userDetails: 'John Doe', submittedPhotos: '3 photos', status: 'PENDING' },
  { id: 2, date: '2026-06-21', userDetails: 'Jane Smith', submittedPhotos: '1 photo', status: 'APPROVED' },
];

export const inquiryData = [
  { id: 1, product: 'Serving Tray', customer: 'Alice', contact: 'alice@email.com', message: 'I want 50 pieces' },
  { id: 2, product: 'Candle Holder', customer: 'Bob', contact: 'bob@email.com', message: 'Do you ship internationally?' },
];

const getCols = (title, specificCols = null) => ({
  title: `${title} Details`,
  headers: specificCols || [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'createdAt', label: 'Created At' }
  ]
});

export const pageConfigs = [

  { 
    path: 'subcategories', 
    title: 'Subcategory List', 
    subtitle: 'All Subcategories',
    breadcrumbParent: 'Subcategories',
    formCardTitle: 'SUBCATEGORY FORM',
    formSubtitle: 'Welcome to Hieil Application',
    formTitleAdd: 'Add Subcategory',
    formTitleEdit: 'Edit Subcategory',
    columns: {
      title: 'VIEW SUBCATEGORY',
      icon: 'list',
      addButtonText: 'Add New SubCategory',
      formSubmitText: 'Add Subcategory',
      headers: [
        { key: 'id', label: '#' },
        { 
          key: 'category', 
          label: 'Category',
          type: 'select',
          formLabel: 'Select Category',
          options: ['Handcrafted Wooden Products', 'Handcrafted Metal Products', 'Handcrafted Blue Pottery', 'Handcrafted Marble Products']
        },
        { key: 'subcategoryName', label: 'Subcategory Name', formLabel: 'Subcategory Name', placeholder: 'Enter subcategory name' },
        { key: 'description', label: 'Description', formLabel: 'Subcategory Description', placeholder: 'Enter subcategory description' }
      ]
    },
    data: subcategoryData
  },
  { 
    path: 'products', 
    title: 'Show Product', 
    subtitle: 'Welcome to Hieil Application',
    breadcrumbParent: 'Products',
    formCardTitle: 'PRODUCT FORM',
    formSubtitle: 'Welcome to Hieil Application',
    formTitleAdd: 'Add Product',
    formTitleEdit: 'Edit Product',
    columns: {
      title: 'PRODUCT LIST',
      icon: 'list',
      addButtonText: 'Add New Product',
      formSubmitText: 'Save Product',
      headers: [
        { key: 'id', label: 'ID', hideInForm: true },
        { key: 'category', label: 'Category', type: 'select', formLabel: 'Select Category *', options: ['Handcrafted Blue Pottery', 'Handcrafted Wooden Products'] },
        { key: 'subCategory', label: 'SubCategory', type: 'select', formLabel: 'Select Sub-Category *', options: ['Luxury Dining & Tableware', 'Luxury Decorative Collections', 'Preparation Tools'] },
        { key: 'productName', label: 'Product Name', formLabel: 'Product Name *', placeholder: 'Enter Product Name' },
        { key: 'tag', label: 'Tag', formLabel: 'Tag Name (Optional)', placeholder: 'Enter Product Tag', required: false },
        { key: 'highlight', label: 'Highlight', formLabel: 'Product Highlight (Optional)', placeholder: 'Enter Highlight (e.g. Bestseller)', required: false },
        { key: 'sizes', label: 'Sizes', formLabel: 'Size (Optional)', placeholder: 'Enter size (e.g. 21 x 11.5 x 5 cm)', required: false },
        { key: 'materials', label: 'Materials', formLabel: 'Materials (Optional)', placeholder: 'Enter materials (e.g. quartz stone powder)', required: false },
        { key: 'colors', label: 'Colors', formLabel: 'Color options (Optional)', placeholder: 'Select colors will appear here', required: false },
        { key: 'hsnCode', label: 'HSN Code', formLabel: 'HSN Code (Optional)', placeholder: 'Enter HSN Code', required: false },
        { key: 'productCode', label: 'Product Code', formLabel: 'Product Code (Optional)', placeholder: 'Enter Product Code', required: false },
        { key: 'price', label: 'Price', formLabel: 'Product Price (Optional)', placeholder: 'Enter Product Price', required: false },
        { key: 'offerPrice', label: 'Offer Price', formLabel: 'Offer Price (Optional)', placeholder: 'Enter Offer Price', required: false },
        { key: 'discount', label: 'Discount', hideInForm: true },
        { key: 'stock', label: 'Stock', formLabel: 'Available Stock *', placeholder: 'Enter Product Stock' },
        { key: 'craftHighlight', label: 'Highlight / Craft', type: 'rich-text', formLabel: 'Highlight / Craft (Optional)', required: false },
        { key: 'mainImage', label: 'Main Image', type: 'file', formLabel: 'Product Main Image *', render: (val) => val ? React.createElement('img', { src: val, style: { width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0' } }) : 'No image' },
        { 
          key: 'additionalImages', 
          label: 'Additional Images', 
          hideInForm: true, 
          render: (val, row) => {
            const images = [row.addImg1, row.addImg2, row.addImg3, row.addImg4, row.addImg5].filter(Boolean);
            if (images.length === 0) return 'No images';
            return React.createElement('div', { style: { display: 'flex', gap: '5px', flexWrap: 'wrap' } }, 
              images.map((img, i) => React.createElement('img', { key: i, src: img, style: { width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e2e8f0' } }))
            );
          }
        },
        { key: 'addImg1', label: 'Add Img 1', type: 'file', formLabel: 'Additional Image 1 (Optional)', hideInTable: true, required: false },
        { key: 'addImg2', label: 'Add Img 2', type: 'file', formLabel: 'Additional Image 2 (Optional)', hideInTable: true, required: false },
        { key: 'addImg3', label: 'Add Img 3', type: 'file', formLabel: 'Additional Image 3 (Optional)', hideInTable: true, required: false },
        { key: 'addImg4', label: 'Add Img 4', type: 'file', formLabel: 'Additional Image 4 (Optional)', hideInTable: true, required: false },
        { key: 'addImg5', label: 'Add Img 5', type: 'file', formLabel: 'Additional Image 5 (Optional)', hideInTable: true, required: false },
        { key: 'aboutProduct', label: 'About Product', hideInForm: true },
        { key: 'description', label: 'Description', type: 'rich-text', formLabel: 'Product Description (Optional)', minWidth: '400px', required: false },
        { key: 'craftsmanship', label: 'Craftsmanship', type: 'rich-text', formLabel: 'Craftsmanship & Care (Optional)', required: false },
        { key: 'shipping', label: 'Shipping', type: 'rich-text', formLabel: 'Shipping & Returns (Optional)', required: false },
      ]
    },
    data: []
  },
  { 
    path: 'categories', 
    title: 'Category List', 
    subtitle: 'View all categories',
    breadcrumbParent: 'Categories',
    formCardTitle: 'VERTICAL LAYOUT',
    formSubtitle: 'Welcome to Hieil Application',
    formTitleAdd: 'Add Category',
    formTitleEdit: 'Edit Category',
    columns: {
      title: 'Category Details',
      icon: 'list',
      addButtonText: 'Add New Category',
      formSubmitText: 'Add Category',
      formSubmitIcon: 'FaTh',
      headerStyle: { backgroundColor: '#374151', color: 'white' },
      headers: [
        { key: 'id', label: 'ID', hideInForm: true },
        { key: 'name', label: 'Category Name', formLabel: 'Category Name', placeholder: 'Enter category name' },
        { key: 'tag', label: 'Tag', formLabel: 'Category Tag', placeholder: 'Enter tag (e.g. 200+ DESIGNS)' },
        { key: 'description', label: 'Description', formLabel: 'Category Description', type: 'textarea' },
        { key: 'image', label: 'Image', type: 'file', formLabel: 'Category Image' },
        { key: 'createdAt', label: 'Created At', hideInForm: true }
      ]
    },
    data: []
  },
  { 
    path: 'blogs', 
    title: 'All Blogs', 
    breadcrumbParent: 'Blogs',
    formTitleAdd: 'Add New Blog',
    formTitleEdit: 'Edit Blog',
    formSubtitle: 'Create a new Blog',
    formCardTitle: '+ Add Blog',
    columns: {
      title: 'Blog List',
      icon: 'list',
      addButtonText: 'Add New Blog',
      formSubmitText: 'Add Blog',
      formSubmitIcon: 'FaSave',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'category', 
          label: 'Category',
          type: 'select',
          formLabel: 'Blog Category',
          options: ['Handicraft', 'Woodwork', 'Art', 'Design']
        },
        { key: 'title', label: 'Title', formLabel: 'Blog Title', placeholder: 'Enter blog title' },
        { key: 'tag', label: 'Tag', formLabel: 'Tag', placeholder: 'Enter tags' },
        { key: 'description', label: 'Description', formLabel: 'Short Description', placeholder: 'Enter short description', hideInTable: true },
        { key: 'image', label: 'Image', type: 'file', formLabel: 'Upload Image' },
        { key: 'content', label: 'Content', type: 'rich-text', formLabel: 'Content', placeholder: 'Enter content here...', hideInTable: true }
      ]
    },
    data: []
  },
  { 
    path: 'testimonials', 
    title: 'Manage Testimonials', 
    columns: {
      title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, React.createElement(FaIcons.FaStar, null), 'REVIEW SUBMISSIONS'),
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'date', label: 'Date' },
        { 
          key: 'userDetails', 
          label: 'User Details', 
          render: (val, row) => React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '10px'}},
            React.createElement('div', null,
              React.createElement('div', {style: {fontWeight: 'bold', color: '#111827'}}, row.userName),
              React.createElement('div', {style: {fontSize: '12px', color: '#6b7280'}}, row.userDesignation)
            )
          )
        },
        { 
          key: 'rating', 
          label: 'Rating',
          render: (val) => React.createElement('div', {style: {color: '#facc15', fontSize: '16px'}}, '★'.repeat(Math.max(0, Math.min(5, Number(val) || 0))) + '☆'.repeat(Math.max(0, 5 - (Math.min(5, Number(val) || 0)))))
        },
        { 
          key: 'city', 
          label: 'City',
          render: (val) => React.createElement('span', {style: {backgroundColor: '#06b6d4', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase'}}, val || '')
        },
        { key: 'message', label: 'Message', render: (val) => React.createElement('div', {style: {maxWidth: '500px', whiteSpace: 'normal', lineHeight: '1.5', color: '#4b5563', padding: '10px 0'}}, val || '') },
        { 
          key: 'status', 
          label: 'Status',
          type: 'select',
          options: ['PENDING', 'APPROVED', 'REJECTED'],
          render: (val) => React.createElement('span', {style: {backgroundColor: val === 'APPROVED' ? '#22c55e' : (val === 'REJECTED' ? '#ef4444' : '#eab308'), color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase'}}, val || 'PENDING')
        }
      ],
      hideDefaultActions: true,
      actions: (row, { onUpdateRow, onDeleteRow }) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
        row.status !== 'APPROVED' && React.createElement('button', {
          style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => onUpdateRow(row.id, 'status', 'APPROVED')
        }, React.createElement(FaIcons.FaCheck, null)),
        row.status !== 'REJECTED' && React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => onUpdateRow(row.id, 'status', 'REJECTED')
        }, React.createElement(FaIcons.FaTimes, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => onDeleteRow(row.id)
        }, React.createElement(FaIcons.FaTrash, null))
      )
    },
    data: []
  },
  { 
      path: 'submissions/reviews', 
      title: 'Manage Testimonials',
      breadcrumbParent: 'Manage Reviews',
      columns: {
        title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, React.createElement(FaIcons.FaStar, null), 'REVIEW SUBMISSIONS'),
        headers: [
          { key: 'id', label: 'ID' },
          { key: 'date', label: 'Date' },
          { 
            key: 'userDetails', 
            label: 'User Details', 
            render: (val, row) => React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '10px'}},
              React.createElement('img', {src: row.userImage || 'https://via.placeholder.com/40', style: {width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover'}}),
              React.createElement('div', null,
                React.createElement('div', {style: {fontWeight: 'bold', color: '#111827'}}, row.userName),
                React.createElement('div', {style: {fontSize: '12px', color: '#6b7280'}}, row.userDesignation)
              )
            )
          },
          { 
            key: 'rating', 
            label: 'Rating',
            render: (val) => React.createElement('div', {style: {color: '#facc15', fontSize: '16px'}}, '★'.repeat(Math.max(0, Math.min(5, Number(val) || 0))) + '☆'.repeat(Math.max(0, 5 - (Math.min(5, Number(val) || 0)))))
          },
          { 
            key: 'city', 
            label: 'City',
            render: (val) => React.createElement('span', {style: {backgroundColor: '#06b6d4', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase'}}, val || '')
          },
          { key: 'message', label: 'Message', render: (val) => React.createElement('div', {style: {maxWidth: '500px', whiteSpace: 'normal', lineHeight: '1.5', color: '#4b5563', padding: '10px 0'}}, val || '') },
          { 
            key: 'status', 
            label: 'Status',
            type: 'select',
            options: ['PENDING', 'APPROVED', 'REJECTED'],
            render: (val) => React.createElement('span', {style: {backgroundColor: val === 'APPROVED' ? '#22c55e' : (val === 'REJECTED' ? '#ef4444' : '#eab308'), color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase'}}, val || 'PENDING')
          }
        ],
        hideDefaultActions: true,
        actions: (row, { onUpdateRow }) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
          row.status !== 'APPROVED' && React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
            onClick: () => onUpdateRow(row.id, 'status', 'APPROVED')
          }, React.createElement(FaIcons.FaCheck, null)),
          row.status !== 'REJECTED' && React.createElement('button', {
            style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
            onClick: () => onUpdateRow(row.id, 'status', 'REJECTED')
          }, React.createElement(FaIcons.FaTimes, null))
        )
      },
      data: []
    },
    { 
      path: 'submissions/user-moments', 
      title: 'Manage Gallery Submissions',
      breadcrumbParent: 'Gallery Submissions',
      columns: {
        title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, React.createElement(FaIcons.FaImages, null), 'GALLERY SUBMISSIONS'),
        headers: [
          { key: 'id', label: 'ID' },
          { key: 'date', label: 'Date' },
          { 
            key: 'userDetails', 
            label: 'User Details', 
            render: (val, row) => React.createElement('div', null,
              React.createElement('div', {style: {fontWeight: 'bold', color: '#111827'}}, row.userName || ''),
              React.createElement('div', {style: {fontSize: '13px', color: '#6b7280'}}, row.userEmail || '')
            )
          },
          { 
            key: 'submittedPhotos', 
            label: 'Submitted Photos',
            render: (val) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
              (Array.isArray(val) ? val : []).map((photo, i) => React.createElement('img', {key: i, src: photo, style: {width: '40px', height: '40px', objectFit: 'cover', border: '1px solid #e5e7eb', borderRadius: '4px'}}))
            )
          },
          { 
            key: 'status', 
            label: 'Status',
            type: 'select',
            options: ['PENDING', 'APPROVED', 'REJECTED'],
            render: (val) => React.createElement('span', {style: {backgroundColor: val === 'APPROVED' ? '#22c55e' : (val === 'REJECTED' ? '#ef4444' : '#eab308'), color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', textTransform: 'uppercase'}}, val || 'PENDING')
          }
        ],
        hideDefaultActions: true,
        actions: (row, { onUpdateRow }) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
          row.status !== 'APPROVED' && React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
            onClick: () => onUpdateRow(row.id, 'status', 'APPROVED')
          }, React.createElement(FaIcons.FaCheck, null)),
          row.status !== 'REJECTED' && React.createElement('button', {
            style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
            onClick: () => onUpdateRow(row.id, 'status', 'REJECTED')
          }, React.createElement(FaIcons.FaTimes, null))
        )
      },
      data: []
    },
    { 
      path: 'submissions/feedback', 
      title: 'Manage Customer Feedback',
      breadcrumbParent: 'Customer Feedback',
      columns: {
        title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, React.createElement(FaIcons.FaCommentAlt, null), 'FEEDBACK SUBMISSIONS'),
        headers: [
          { key: 'id', label: 'ID' },
          { key: 'date', label: 'Date' },
          { 
            key: 'contactDetails', 
            label: 'Contact Details', 
            render: (val, row) => React.createElement('div', null,
              React.createElement('div', {style: {fontWeight: 'bold', color: '#111827', marginBottom: '4px'}}, row.customerName || ''),
              React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#6b7280', marginBottom: '2px'}}, 
                React.createElement(FaIcons.FaEnvelope, null), row.email || ''
              ),
              React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#06b6d4'}}, 
                React.createElement(FaIcons.FaPhoneAlt, null), row.phone || ''
              )
            )
          },
          { 
            key: 'rating', 
            label: 'Rating',
            render: (val) => React.createElement('div', {style: {color: '#facc15', fontSize: '16px'}}, '★'.repeat(Math.max(0, Math.min(5, Number(val) || 0))) + '☆'.repeat(Math.max(0, 5 - (Math.min(5, Number(val) || 0)))))
          },
          { key: 'feedbackMessage', label: 'Feedback Message', render: (val) => React.createElement('div', {style: {color: '#4b5563'}}, val || '') }
        ],
        hideDefaultActions: true,
        actions: (row, { onDelete }) => React.createElement('div', {style: {display: 'flex'}},
          React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '8px 12px', fontSize: '16px', borderRadius: '4px 0 0 4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
            onClick: () => window.open(`https://wa.me/${row.phone}`, '_blank')
          }, React.createElement(FaIcons.FaWhatsapp, null)),
          React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '8px 12px', fontSize: '16px', borderRadius: '0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
            onClick: () => window.open(`tel:${row.phone}`, '_self')
          }, React.createElement(FaIcons.FaPhoneAlt, null)),
          React.createElement('button', {
            style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', fontSize: '16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
            onClick: () => onDelete && onDelete(row)
          }, React.createElement(FaIcons.FaTrashAlt, null))
        )
      },
      data: []
    },
    { 
      path: 'submissions/newsletter', 
      title: 'Manage Newsletter Subscribers',
      breadcrumbParent: 'Subscribers',
      columns: {
        title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, React.createElement(FaIcons.FaEnvelope, null), 'NEWSLETTER EMAIL LIST'),
        headers: [
          { key: 'id', label: 'ID' },
          { key: 'subscribedAt', label: 'Subscription Date' },
          { 
            key: 'email', 
            label: 'Email Address', 
            render: (val) => React.createElement('div', {style: {fontWeight: 'bold', color: '#111827'}}, val || '')
          }
        ],
        hideDefaultActions: true,
        actions: (row, { onDelete }) => React.createElement('div', {style: {display: 'flex'}},
          React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '8px 12px', fontSize: '16px', borderRadius: '4px 0 0 4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
            onClick: () => window.open(`mailto:${row.email}`, '_blank')
          }, React.createElement(FaIcons.FaEnvelope, null)),
          React.createElement('button', {
            style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', fontSize: '16px', borderRadius: '0 4px 4px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
            onClick: () => onDelete && onDelete(row)
          }, React.createElement(FaIcons.FaTrashAlt, null))
        )
      },
      data: []
    },
  { 
    path: 'gallery', 
    title: 'Gallery List', 
    columns: getCols('Gallery Item', [
      { key: 'id', label: 'ID' },
      { key: 'category', label: 'Category', type: 'select', options: ['Exhibitions', 'Events', 'Workshops'] },
      { key: 'title', label: 'Title' },
      { key: 'image', label: 'Image' }
    ]),
    data: []
  },
  { 
    path: 'inquiry-system/product-inquiries', 
    title: 'Customer Inquiries', 
    subtitle: 'Inquiries',
    columns: {
      title: 'INQUIRY LIST',
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'product', label: 'Product', render: (val, row) => React.createElement('div', {style: {fontSize: '13px'}}, val, React.createElement('div', {style: {color: '#6b7280', marginTop: '4px'}}, 'ID: ' + row.productId)) },
        { key: 'customer', label: 'Customer', render: (val) => React.createElement('div', {style: {maxWidth: '150px', wordWrap: 'break-word', fontSize: '13px'}}, val) },
        { key: 'contact', label: 'Contact', render: (val, row) => React.createElement('div', {style: {fontSize: '12px', lineHeight: '1.6'}}, 
            React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '5px'}}, React.createElement(FaEnvelope, {style: {color: '#6366f1', fontSize: '14px'}}), row.email),
            React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '5px', color: '#dc2626'}}, React.createElement(FaPhone, {style: {fontSize: '14px'}}), row.phone),
            React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '5px', color: '#8b5cf6'}}, React.createElement(FaWhatsapp, {style: {fontSize: '14px'}}), row.whatsapp)
          ) 
        },
        { key: 'location', label: 'Location', render: (val) => React.createElement('div', {style: {maxWidth: '150px', wordWrap: 'break-word', fontSize: '13px'}}, val) },
        { key: 'orderType', label: 'Order Type', render: (val) => React.createElement('span', {style: {backgroundColor: '#0ea5e9', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px'}}, val) },
        { key: 'qty', label: 'Qty' },
        { key: 'budget', label: 'Budget' },
        { key: 'gst', label: 'GST', render: (val, row) => React.createElement('div', {style: {fontSize: '13px'}}, row.gstStatus, React.createElement('div', {style: {color: '#6b7280', marginTop: '4px', maxWidth: '120px', wordWrap: 'break-word'}}, row.gstDetails)) },
        { key: 'shipping', label: 'Shipping', render: (val) => React.createElement('div', {style: {maxWidth: '150px', wordWrap: 'break-word', fontSize: '13px'}}, val) },
        { key: 'date', label: 'Date', render: (val) => React.createElement('div', {style: {maxWidth: '60px', fontSize: '13px', lineHeight: '1.4'}}, val) }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('button', {
        style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px'},
        onClick: () => window.location.href = `/admin/inquiry-system/product-inquiries/create-quotation/${row.id}`
      }, React.createElement(FaFileAlt, {style: {fontSize: '16px'}}), ' Create Quotation'),
      expandedRowRender: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#111827', padding: '5px 0'}}, 
        React.createElement('div', null, React.createElement('strong', null, 'Message: '), row.message),
        React.createElement('div', null, React.createElement('strong', null, 'Delivery Date: '), row.deliveryDate)
      )
    }, 
    data: []
  },
  { 
    path: 'inquiry-system/orders', 
    title: 'Orders', 
    subtitle: 'Orders',
    columns: {
      title: 'ORDER LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'quotation', label: 'Quotation' },
        { key: 'status', label: 'Status', render: (val) => {
            if (val) {
              return React.createElement('span', {style: {backgroundColor: '#22c55e', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #166534'}}, val);
            }
            return '';
          } 
        },
        { key: 'date', label: 'Date' }
      ],
      hideDefaultActions: false,
      actions: () => null
    }, 
    data: []
  },
  { 
    path: 'inquiry-system/quotations', 
    title: 'Quotations', 
    subtitle: 'Quotations',
    columns: {
      title: 'QUOTATION LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'quoteNo', label: 'Quote No', render: (val) => React.createElement('div', {style: {maxWidth: '120px', wordWrap: 'break-word'}}, val) },
        { key: 'customer', label: 'Customer' },
        { key: 'mobile', label: 'Mobile' },
        { key: 'country', label: 'Country' },
        { key: 'product', label: 'Product', render: (val) => React.createElement('div', {style: {maxWidth: '150px', wordWrap: 'break-word'}}, val) },
        { key: 'qty', label: 'Qty' },
        { key: 'budget', label: 'Budget' },
        { key: 'total', label: 'Total' },
        { key: 'status', label: 'Status', render: (val) => {
            const bg = val === 'Accepted' ? '#22c55e' : (val === 'Sent' ? '#eab308' : '#6b7280');
            return React.createElement('span', {style: {backgroundColor: bg, color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', border: '1px solid rgba(0,0,0,0.1)'}}, val);
          } 
        },
        { key: 'date', label: 'Date', render: (val) => React.createElement('div', {style: {maxWidth: '50px', wordWrap: 'break-word', lineHeight: '1.4'}}, val.replace(/-/g, '-\n')) }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
        React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '14px', display: 'flex', justifyContent: 'center'},
            onClick: () => alert(`Viewing Quotation Document: ${row.quoteNo}`)
        }, React.createElement(FaFileAlt, null)),
        row.status === 'Sent' && React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => alert(`Accepted Quote: ${row.quoteNo}`)
        }, 'Accept'),
        row.status === 'Sent' && React.createElement('button', {
            style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => alert(`Rejected Quote: ${row.quoteNo}`)
        }, 'Reject')
      )
    }, 
    data: []
  },
  { 
    path: 'inquiry-system/invoices', 
    title: 'Invoices', 
    subtitle: 'Invoices',
    columns: {
      title: 'INVOICE LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoiceNo', label: 'Invoice No' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'total', label: 'Total' },
        { key: 'status', label: 'Status' }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('div', {style: {display: 'flex', gap: '5px', flexWrap: 'wrap'}},
        React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => window.location.href = `/admin/inquiry-system/invoices/preview/${row.id}`
        }, 'PDF'),
        React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => alert(`Payment for Invoice: ${row.invoiceNo}`)
        }, 'Payment'),
        React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px'},
            onClick: () => alert(`Shipping Details for Order: ${row.orderNo}`)
        }, React.createElement(FaTruck, null), ' Shipping'),
        React.createElement('button', {
            style: {backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px'},
            onClick: () => alert(`Send Invoice to Retailer: ${row.invoiceNo}`)
        }, React.createElement(FaStore, null), ' Send to Retailer')
      )
    }, 
    data: []
  },
  { 
    path: 'inquiry-system/payments', 
    title: 'Payments', 
    subtitle: 'Payments',
    columns: {
      title: 'PAYMENTS LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoiceNo', label: 'Invoice No' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'mode', label: 'Mode' },
        { key: 'reference', label: 'Reference' },
        { key: 'amount', label: 'Amount' },
        { key: 'status', label: 'Status', render: (val) => {
            if (val === 'Paid') {
              return React.createElement('span', {style: {backgroundColor: '#22c55e', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #166534'}}, val);
            }
            return val;
          } 
        },
        { key: 'date', label: 'Date' }
      ],
      hideDefaultActions: true
    }, 
    data: []
  },
  { 
    path: 'inquiry-system/shipping', 
    title: 'Shipping List', 
    subtitle: 'Shipping List',
    columns: {
      title: 'SHIPMENT LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoice', label: 'Invoice' },
        { key: 'mode', label: 'Mode' },
        { key: 'tracking', label: 'Tracking' },
        { key: 'status', label: 'Status', render: (val) => {
            return React.createElement('span', {style: {backgroundColor: '#14b8a6', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', border: '1px solid #0f766e'}}, val);
          } 
        }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('button', {
        style: {backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', boxShadow: '0 2px 4px rgba(59, 130, 246, 0.4)'},
        onClick: () => alert(`Update Shipping for Invoice: ${row.invoice}`)
      }, 'Update')
    }, 
    data: []
  },
  { path: 'inquiry-system/reports', title: 'Inquiry Reports', columns: getCols('Report', [{key: 'id', label: 'ID'}, {key: 'reportName', label: 'Report Name'}, {key: 'date', label: 'Date Generated'}]), data: [] },
  { 
    path: 'custom-products', 
    title: 'Custom Development: Managed Products',
    breadcrumbParent: 'Custom Products',
    formCardTitle: 'ADD CUSTOM PRODUCT',
    formSubtitle: 'Welcome to Hieil Application',
    formTitleAdd: 'Add Custom Product',
    formTitleEdit: 'Edit Custom Product',
    columns: {
      title: 'PRODUCT LIST',
      addButtonText: 'New Product',
      formSubmitText: 'Add Product',
      formLayout: 'two-column',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'image', 
          label: 'Image', 
          type: 'file', 
          formLabel: 'Product Image',
          render: (val) => React.createElement('img', { src: val || 'https://via.placeholder.com/50', alt: 'Product', style: { width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' } })
        },
        { key: 'title', label: 'Title', formLabel: 'Product Title', placeholder: 'e.g. Custom Furniture' },
        { key: 'priceText', label: 'Price Text', formLabel: 'Price / Starting Text', placeholder: 'e.g. Starting ₹15,000', fullWidth: true },
        { key: 'created', label: 'Created', hideInForm: true },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Short Description', placeholder: 'Briefly describe the product...', hideInTable: true, fullWidth: true }
      ]
    }, 
    data: []
  },
  { 
    path: 'wholesale-categories', 
    title: 'Wholesale: Managed Categories',
    breadcrumbParent: 'Wholesale Categories',
    formCardTitle: 'ADD WHOLESALE CATEGORY',
    formSubtitle: 'Welcome to Hieil Application',
    formTitleAdd: 'Add Wholesale Category',
    formTitleEdit: 'Edit Wholesale Category',
    columns: {
      title: 'CATEGORY LIST',
      addButtonText: 'New Category',
      formSubmitText: 'Save Category',
      formLayout: 'two-column',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'image', 
          label: 'Image', 
          type: 'file', 
          formLabel: 'Category Image',
          render: (val) => React.createElement('img', { src: val || 'https://via.placeholder.com/50', alt: 'Category', style: { width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' } })
        },
        { key: 'title', label: 'Title', formLabel: 'Category Title', placeholder: 'e.g. Rugs & Carpets' },
        { key: 'pricingInfo', label: 'Pricing Info', formLabel: 'Price / Pricing Info', placeholder: 'e.g. Bulk Pricing Available / MOQ: 25 pcs', fullWidth: true },
        { key: 'created', label: 'Created', hideInForm: true },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Short Description', placeholder: 'Briefly describe the category...', hideInTable: true, fullWidth: true }
      ]
    }, 
    data: []
  },
  { 
    path: 'blog-category', 
    title: 'Blog Category List', 
    breadcrumbParent: 'Blog Categories',
    formTitleAdd: 'Add New Blog Category',
    formTitleEdit: 'Edit Blog Category',
    formSubtitle: 'Create a new category for blogs',
    formCardTitle: '+ Add Category',
    columns: {
      title: 'Blog Category Details',
      icon: 'list',
      addButtonText: 'New Category',
      formSubmitText: 'Save Category',
      formSubmitIcon: 'FaSave',
      headers: [
        { key: 'id', label: 'ID', hideInForm: true },
        { key: 'name', label: 'Name', formLabel: 'Category Name', placeholder: 'Enter category name' },
        { key: 'postCount', label: 'Post Count', hideInForm: true }
      ]
    }, 
    data: [] 
  },

  { 
    path: 'blog-fdgw', 
    title: 'Show Guides',
    breadcrumbParent: 'Guides',
    formCardTitle: 'ADD FDGW',
    formTitleAdd: 'Add FDGW',
    formTitleEdit: 'Edit FDGW',
    columns: {
      title: 'FDGW LIST',
      addButtonText: 'Add New FDGW',
      formSubmitText: 'Save Changes',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'icon', 
          label: 'Icon', 
          type: 'icon-picker', 
          formLabel: 'Select Icon',
          render: (val) => {
            const IconComp = val && FaIcons[val] ? FaIcons[val] : FaIcons.FaFileAlt;
            return React.createElement(IconComp, { style: { color: '#f59e0b', fontSize: '18px' } });
          }
        },
        { key: 'title', label: 'Title', formLabel: 'Title', placeholder: 'Enter Title' },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Description', placeholder: 'Enter Description' },
        { key: 'buttonText', label: 'Button Text', formLabel: 'Button Text', placeholder: 'Enter button text' },
        { 
          key: 'pdfFile', 
          label: 'PDF File', 
          type: 'file', 
          formLabel: 'Upload PDF',
          render: (val) => React.createElement('a', {
            href: val || '#',
            target: '_blank',
            rel: 'noreferrer',
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#06b6d4',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '500'
            }
          }, React.createElement(FaIcons.FaFileAlt, null), 'View PDF')
        }
      ]
    }, 
    data: []
  },
  { 
    path: 'brands', 
    title: 'Inventory: Managed Brands',
    singularTitle: 'Brand',
    breadcrumbParent: 'Brands',
    formTitleAdd: 'Add Brand',
    formTitleEdit: 'Edit Brand',
    formCardTitle: 'ADD BRAND',
    columns: {
      title: 'BRAND REPOSITORY',
      addButtonText: 'New Brand',
      formSubmitText: 'Add Brand',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'image', 
          label: 'Image', 
          type: 'file', 
          formLabel: 'Brand Image',
          subtext: 'Recommended size: 500x500px | Max 2MB',
          render: (val) => React.createElement('img', {
            src: val || 'https://via.placeholder.com/120x60?text=THE+CONTRACT', 
            alt: 'Brand', 
            style: {maxWidth: '120px', maxHeight: '60px', objectFit: 'contain'}
          }) 
        },
        { key: 'title', label: 'Title', formLabel: 'Brand Title', placeholder: 'e.g. Adidas, Sony, etc.' },
        { key: 'createdDate', label: 'Created Date', formLabel: 'Created Date', type: 'date', hideInForm: true }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', gap: '8px', alignItems: 'center'}},
        React.createElement('button', {
          style: {backgroundColor: 'white', color: '#f59e0b', border: '1px solid #e2e8f0', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: 'white', color: '#ef4444', border: '1px solid #e2e8f0', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'product-cq', 
    title: 'Show Catalogue & Quote',
    singularTitle: 'Catalogue & Quote',
    breadcrumbParent: 'Catalogue & Quote',
    formTitleAdd: 'Add Catalogue & Quote',
    formTitleEdit: 'Edit Catalogue & Quote',
    formCardTitle: 'ADD CATALOGUE & QUOTE',
    columns: {
      title: 'SHOW CATALOGUE & QUOTE',
      addButtonText: 'Add New Catalogue & Quote',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'icon', 
          label: 'Icon', 
          type: 'icon-picker', 
          formLabel: 'Select Icon',
          render: (val) => {
            const IconComp = val && FaIcons[val] ? FaIcons[val] : FaFileAlt;
            return React.createElement(IconComp, { style: { color: '#f59e0b', fontSize: '18px' } }) 
          }
        },
        { key: 'title', label: 'Title', formLabel: 'Title', placeholder: 'Enter Title', minWidth: '150px' },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Description', placeholder: 'Enter Description', minWidth: '150px' },
        { key: 'point1', label: 'Point 1', formLabel: 'Point 1', placeholder: 'Enter Point 1', minWidth: '120px' },
        { key: 'point2', label: 'Point 2', formLabel: 'Point 2', placeholder: 'Enter Point 2', minWidth: '120px' },
        { key: 'point3', label: 'Point 3', formLabel: 'Point 3', placeholder: 'Enter Point 3', minWidth: '120px' },
        { 
          key: 'pdfFile', 
          label: 'PDF File', 
          type: 'file', 
          formLabel: 'Upload PDF',
          render: (val) => React.createElement('a', {
            href: val || '#',
            target: '_blank',
            rel: 'noreferrer',
            style: {
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#06b6d4',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '500'
            }
          }, React.createElement(FaFileAlt, null), 'View PDF')
        }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
        React.createElement('button', {
          style: {backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'artisan', 
    title: 'Artisan Content',
    singularTitle: 'Artisan',
    breadcrumbParent: 'Our Artisan',
    formTitleAdd: 'Add Artisan Video',
    formTitleEdit: 'Edit Artisan Video',
    formCardTitle: 'ADD ARTISAN CONTENT',
    columns: {
      title: 'CONTENT LIST',
      icon: 'users',
      addButtonText: 'Add New Artisan',
      formSubmitText: 'Submit',
      headers: [
        { key: 'id', label: 'ID' },
        { 
          key: 'preview', 
          label: 'Preview', 
          type: 'file', 
          formLabel: 'Video/Image File',
          render: (val) => React.createElement('img', {
            src: val || 'https://via.placeholder.com/80x60?text=Img', 
            alt: 'Preview', 
            style: {width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #e5e7eb'}
          }) 
        },
        { key: 'title', label: 'Title', formLabel: 'Artisan Title', placeholder: 'Enter artisan title' },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Artisan Description', placeholder: 'Enter artisan description' },
        { key: 'text', label: 'Text', formLabel: 'Artisan Text', placeholder: 'Enter artisan text' }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center'}},
        React.createElement('button', {
          style: {backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'leaders', 
    title: 'Manage Leaders',
    singularTitle: 'Leader',
    breadcrumbParent: 'Leaders',
    formTitleAdd: 'Add Leader',
    formTitleEdit: 'Edit Leader',
    formCardTitle: 'ADD LEADER DETAILS',
    columns: {
      title: 'LEADER LIST',
      icon: 'users',
      addButtonText: 'Add Leader',
      headers: [
        { key: 'id', label: '#' },
        { 
          key: 'photo', 
          label: 'Photo', 
          type: 'file', 
          formLabel: 'Leader Photo',
          render: (val) => React.createElement('img', {
            src: val || 'https://via.placeholder.com/60x60?text=Photo', 
            alt: 'Leader', 
            style: {width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'}
          }) 
        },
        { key: 'name', label: 'Name', formLabel: 'Leader Name', placeholder: 'Enter leader name' },
        { key: 'role', label: 'Role', formLabel: 'Leader Designation', placeholder: 'Enter leader designation' },
        { key: 'description', label: 'Description', type: 'textarea', formLabel: 'Leader Description', placeholder: 'Enter leader description' }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center'}},
        React.createElement('button', {
          style: {backgroundColor: '#f59e0b', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'gallery', 
    title: 'Show Gallery',
    singularTitle: 'Gallery',
    breadcrumbParent: 'Gallery',
    formTitleAdd: 'Add Gallery',
    formTitleEdit: 'Edit Gallery',
    formCardTitle: 'ADD GALLERY ITEM',
    columns: {
      title: 'Gallery List',
      addButtonText: 'Add Gallery',
      headers: [
        { key: 'id', label: '#' },
        { key: 'category', label: 'Category', type: 'select', options: ['HANDCRAFTED WOODEN PRODUCTS', 'HANDCRAFTED METAL PRODUCTS'], formLabel: 'Select Category', placeholder: ' ' },
        { key: 'image', label: 'Image', type: 'file', formLabel: 'Upload Image', render: (val) => React.createElement('img', {src: val || 'https://via.placeholder.com/60x40?text=Img', alt: 'Gallery', style: {width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px'}}) },
        { key: 'title', label: 'Title', formLabel: 'Title', placeholder: ' ' }
      ],
      hideDefaultActions: false
    }, 
    data: []
  },
  { 
    path: 'gallery-category', 
    title: 'Gallery Categories', 
    singularTitle: 'Gallery Category',
    breadcrumbParent: 'Gallery Categories',
    formTitleAdd: 'Add Gallery Category',
    formTitleEdit: 'Edit Gallery Category',
    formCardTitle: 'ADD CATEGORY',
    columns: {
      title: 'CATEGORY LIST',
      addButtonText: 'Add Category',
      headers: [
        { key: 'id', label: '#' },
        { key: 'categoryName', label: 'Category', formLabel: 'Category Name', placeholder: 'Enter Gallery Category' }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
        React.createElement('button', {
          style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'faq-category', 
    title: 'FAQ CATEGORY LIST', 
    subtitle: 'FAQ CATEGORY LIST',
    columns: {
      title: 'All FAQ Categories',
      addButtonText: 'Add New',
      headers: [
        { key: 'id', label: '#' },
        { key: 'category', label: 'Category', formLabel: 'Category Name', placeholder: 'Enter category name' }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
        React.createElement('button', {
          style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'faq', 
    title: 'FAQ List', 
    subtitle: 'FAQ List',
    columns: {
      title: 'ALL FAQ',
      addButtonText: 'Add FAQ',
      headers: [
        { key: 'id', label: '#' },
        { key: 'category', label: 'Category', formLabel: 'Select Category', type: 'select', options: ['Information', 'Shipping', 'Returns', 'Pricing', 'General'] },
        { key: 'question', label: 'Question', placeholder: ' ' },
        { key: 'answer', label: 'Answer', type: 'textarea', placeholder: ' ' }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '30px', margin: '0 auto'}},
        React.createElement('button', {
          style: {backgroundColor: '#f97316', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'certifications', 
    title: 'Certificate List', 
    subtitle: 'Certificate List',
    columns: {
      title: 'ALL CERTIFICATES',
      addButtonText: 'Add New Certificate',
      headers: [
        { key: 'id', label: '#' },
        { key: 'title', label: 'Title', formLabel: 'Certificate Title' },
        { key: 'certificateFile', label: 'Upload Certificate (PDF/Image)', type: 'file', hideInTable: true },
        { key: 'preview', label: 'Preview', hideInForm: true, render: (val, row) => React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px'},
            onClick: () => window.open(row.pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank')
          }, React.createElement(FaEye, null), ' View') 
        },
        { key: 'download', label: 'Download', hideInForm: true, render: (val, row) => React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px'},
            onClick: async () => {
              const dummyPdf = 'data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCgoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWzMgMCBSXQogICAgIC9Db3VudCAxCiAgICAgL01lZGlhQm94IFswIDAgMzAwIDE0NF0KICA+PgplbmRvYmoKCjMgMCBvYmoKICA8PCAgL1R5cGUgL1BhZ2UKICAgICAgL1BhcmVudCAyIDAgUgogICAgICAvUmVzb3VyY2VzCiAgICAgICA8PCAvRm9udAogICAgICAgICAgIDw8IC9GMQogICAgICAgICAgICAgICA8PCAvVHlwZSAvRm9udAogICAgICAgICAgICAgICAgICAvU3VidHlwZSAvVHlwZTEKICAgICAgICAgICAgICAgICAgL0Jhc2VGb250IC9UaW1lcy1Sb21hbgogICAgICAgICAgICAgICA+PgogICAgICAgICAgID4+CiAgICAgICA+PgogICAgICAvQ29udGVudHMgNCAwIFIKICA+PgplbmRvYmoKCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDU1ID4+CnN0cmVhbQogIEJUCiAgICAvRjEgMTggVGYKICAgIDAgMCAwIHJnCiAgICAoRHVtbXkgUERGIFRlc3QpIFRqCiAgRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDUKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDE4IDAwMDAwIG4gCjAwMDAwMDAwNzcgMDAwMDAgbiAKMDAwMDAwMDE3OCAwMDAwMCBuIAowMDAwMDAwNDU3IDAwMDAwIG4gCnRyYWlsZXIKICA8PCAgL1Jvb3QgMSAwIFIKICAgICAgL1NpemUgNQogID4+CnN0YXJ0eHJlZgo1NjUKJSVFT0YK';
              const fileUrl = row.pdfUrl || dummyPdf;
              
              if (fileUrl.startsWith('data:')) {
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = row.title + '.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return;
              }

              try {
                const response = await fetch(fileUrl);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = row.title + '.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              } catch (err) {
                console.error("Fetch download failed (likely CORS), falling back to open:", err);
                const fallbackLink = document.createElement('a');
                fallbackLink.href = fileUrl;
                fallbackLink.download = row.title + '.pdf';
                fallbackLink.target = '_blank';
                document.body.appendChild(fallbackLink);
                fallbackLink.click();
                document.body.removeChild(fallbackLink);
              }
            }
          }, React.createElement(FaDownload, null), ' Download') 
        }
      ],
      hideDefaultActions: true,
      actions: (row, handlers) => React.createElement('div', {style: {display: 'flex', gap: '5px'}},
        React.createElement('button', {
          style: {backgroundColor: '#f97316', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onEdit && handlers.onEdit(row)
        }, React.createElement(FaEdit, null)),
        React.createElement('button', {
          style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '4px', cursor: 'pointer'},
          onClick: () => handlers?.onDelete && handlers.onDelete(row)
        }, React.createElement(FaTrash, null))
      )
    }, 
    data: []
  },
  { 
    path: 'sliders', 
    title: 'Slider List', 
    subtitle: 'Slider List',
    columns: {
      title: 'ALL SLIDERS',
      headers: [
        { key: 'id', label: '#' },
        { key: 'title', label: 'Title', formLabel: 'Slider Title', placeholder: 'Enter slider title', render: (val) => React.createElement('strong', null, val) },
        { key: 'subtitle', label: 'Subtitle', formLabel: 'Slider Subtitle', placeholder: 'Enter slider subtitle' },
        { key: 'images1', label: 'Images1', formLabel: 'Slider Image 1' },
        { key: 'images2', label: 'Images2', formLabel: 'Slider Image 2' },
        { key: 'images3', label: 'Images3', formLabel: 'Slider Image 3' }
      ],
      hideDefaultActions: false,
      addButtonText: 'Add Slider'
    }, 
    data: []
  },
  { 
    path: 'contact', 
    title: 'Contact Messages', 
    subtitle: 'Contact Messages',
    columns: {
      title: React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '8px'}}, 
        React.createElement(FaEnvelope, null), 
        'Contact Message Details',
        React.createElement('style', null, `
          .generic-list-page .data-table th {
            background-color: #374151 !important;
            color: #ffffff !important;
            border-bottom: none !important;
          }
          .generic-list-page .data-table th, .generic-list-page .data-table td {
            white-space: nowrap;
            min-width: 150px;
            padding: 12px 20px !important;
          }
        `)
      ),
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'fullName', label: 'Full Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'country', label: 'Country' },
        { key: 'subject', label: 'Subject' },
        { key: 'category', label: 'Category' },
        { key: 'message', label: 'Message' },
        { key: 'createdAt', label: 'Created At' }
      ],
      hideDefaultActions: true
    }, 
    data: []
  },
  { 
    path: 'service-inquiries', 
    title: 'Service Inquiries', 
    subtitle: 'Service Inquiries',
    columns: {
      title: 'SERVICE INQUIRY LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'service', label: 'Service / Sub-Service', render: (val) => React.createElement('span', {style: {backgroundColor: '#14b8a6', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px'}}, val) },
        { key: 'customer', label: 'Customer Details', render: (val, row) => React.createElement('div', {style: {lineHeight: '1.6'}}, 
            React.createElement('div', {style: {fontWeight: 'bold', color: '#111827'}}, row.customerName),
            React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px'}}, React.createElement(FaEnvelope, {style: {color: '#6366f1'}}), row.email),
            React.createElement('div', {style: {display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#dc2626'}}, React.createElement(FaPhone, null), row.phone)
          ) 
        },
        { key: 'location', label: 'Location' },
        { key: 'message', label: 'Message' },
        { key: 'date', label: 'Date' }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('button', {
        style: {backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 4px rgba(239, 68, 68, 0.4)'},
        onClick: () => alert(`Delete Inquiry ID: ${row.id}`)
      }, React.createElement(FaTrash, null))
    }, 
    data: []
  },
  { 
    path: 'download-leads', 
    title: 'Download Leads', 
    subtitle: 'Download Leads',
    columns: {
      title: 'LEADS LIST',
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'email', label: 'Email' },
        { key: 'fileSource', label: 'File Source', render: (val) => React.createElement('a', {href: '#', style: {color: '#3b82f6', textDecoration: 'none'}}, val) },
        { key: 'date', label: 'Date' }
      ],
      hideDefaultActions: true
    }, 
    data: []
  },
  { 
    path: 'vendor-management/master', 
    title: 'Vendor Master', 
    subtitle: 'Vendor Master',
    columns: {
      title: 'VENDOR LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'vendorName', label: 'Vendor Name' },
        { key: 'commission', label: 'Commission %' }
      ],
      hideDefaultActions: false
    }, 
    data: []
  },
  { 
    path: 'vendor-management/report', 
    title: 'Vendor Report', 
    subtitle: 'Vendor Report',
    columns: {
      title: 'VENDOR SUMMARY',
      headers: [
        { key: 'id', label: '#' },
        { key: 'vendorName', label: 'Vendor Name' },
        { key: 'totalInvoices', label: 'Total Invoices' },
        { key: 'totalInvoiceAmount', label: 'Total Invoice Amount' },
        { key: 'totalCommission', label: 'Total Commission' },
        { key: 'totalPayout', label: 'Total Payout', render: (val) => React.createElement('strong', null, val) },
        { key: 'released', label: 'Released', render: (val) => React.createElement('span', {style: {color: '#22c55e'}}, val) },
        { key: 'pending', label: 'Pending', render: (val) => React.createElement('span', {style: {color: '#f59e0b'}}, val) }
      ],
      hideDefaultActions: true
    }, 
    data: []
  },
  { 
    path: 'vendor-management/payout', 
    title: 'Vendor Payout', 
    subtitle: 'Vendor Payout',
    columns: {
      title: 'PAYOUT LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoiceId', label: 'Invoice ID' },
        { key: 'invoiceAmount', label: 'Invoice Amount' },
        { key: 'commission', label: 'Commission' },
        { key: 'payoutAmount', label: 'Payout Amount', render: (val) => React.createElement('strong', null, val) },
        { key: 'status', label: 'Status', render: (val) => React.createElement('span', {style: {backgroundColor: '#facc15', color: '#854d0e', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #ca8a04'}}, val) }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('div', {style: {display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '80px'}},
        React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px'},
            onClick: () => alert(`Release Payout for: ${row.invoiceId}`)
        }, React.createElement(FaCheck, null), ' Release'),
        React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '6px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px'},
            onClick: () => alert(`Download PDF for: ${row.invoiceId}`)
        }, React.createElement(FaFileAlt, null), ' PDF')
      )
    }, 
    data: []
  },
  { 
    path: 'retailer-system/product-inquiries', 
    title: 'Retailer System - Inquiries', 
    subtitle: 'Retailer Inquiries',
    columns: {
      title: 'RETAILER INQUIRY LIST',
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'product', label: 'Product', render: (val, row) => React.createElement('div', null, React.createElement('div', {style: {marginBottom: '6px', color: '#334155'}}, row.productName), React.createElement('div', {style: {color: '#6b7280', fontSize: '13px'}}, 'ID: ' + row.productId)) },
        { key: 'customer', label: 'Customer', render: (val, row) => React.createElement('div', {style: {maxWidth: '80px', lineHeight: '1.4'}}, row.customer) },
        { key: 'contact', label: 'Contact', render: (val, row) => React.createElement('div', {style: {lineHeight: '1.8', fontSize: '13px'}}, 
            React.createElement('div', null, '📧 ' + row.email),
            React.createElement('div', null, '📞 ' + row.phone),
            React.createElement('div', null, '💬 ' + row.altPhone)
        ) },
        { key: 'location', label: 'Location', render: (val, row) => React.createElement('div', {style: {maxWidth: '120px', lineHeight: '1.4'}}, row.location) },
        { key: 'orderType', label: 'Order Type', render: (val) => React.createElement('span', {style: {backgroundColor: '#0ea5e9', color: 'white', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'}}, val) },
        { key: 'qty', label: 'Qty' },
        { key: 'budget', label: 'Budget' },
        { key: 'date', label: 'Date', render: (val, row) => React.createElement('div', {style: {maxWidth: '40px', lineHeight: '1.4'}}, row.date) }
      ],
      actions: (row) => React.createElement('button', {
        style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px'},
        onClick: () => window.location.href = `/admin/retailer-system/product-inquiries/create-quotation/${row.id}`
      }, '📄 Create Quotation')
    }, 
    data: []
  },
  { 
    path: 'retailer-system/orders', 
    title: 'Retailer System - Orders', 
    subtitle: 'Retailer Orders',
    columns: {
      title: 'RETAILER ORDER LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'quotation', label: 'Quotation' },
        { key: 'status', label: 'Status', render: (val) => {
            if (val === 'Processing') {
              return React.createElement('span', {style: {backgroundColor: '#22c55e', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #166534'}}, val);
            }
            return React.createElement('span', {style: {backgroundColor: '#22c55e', width: '16px', height: '6px', borderRadius: '10px', display: 'inline-block', border: '1px solid #166534'}});
          } 
        },
        { key: 'date', label: 'Date' }
      ]
    }, 
    data: []
  },
  { 
    path: 'retailer-system/quotations', 
    title: 'Retailer System - Quotations', 
    subtitle: 'Retailer Quotations',
    columns: {
      title: 'RETAILER QUOTATION LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'quoteNo', label: 'Quote No', render: (val) => React.createElement('div', {style: {maxWidth: '120px', wordWrap: 'break-word'}}, val) },
        { key: 'customer', label: 'Customer' },
        { key: 'product', label: 'Product' },
        { key: 'qty', label: 'Qty' },
        { key: 'total', label: 'Total' },
        { key: 'status', label: 'Status', render: (val) => {
            if (val === 'Accepted') {
              return React.createElement('span', {style: {backgroundColor: '#22c55e', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #166534'}}, val);
            }
            return val;
          } 
        },
        { key: 'date', label: 'Date', render: (val) => React.createElement('div', {style: {maxWidth: '60px'}}, val) }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('button', {
        style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer'},
        onClick: () => alert(`Viewing Quotation: ${row.quoteNo}`)
      }, '📄')
    }, 
    data: []
  },
  { 
    path: 'retailer-system/invoices', 
    title: 'Retailer System - Invoices', 
    subtitle: 'Retailer Invoices',
    columns: {
      title: 'RETAILER INVOICE LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoiceNo', label: 'Invoice No', render: (val) => React.createElement('div', {style: {maxWidth: '130px', wordWrap: 'break-word'}}, val) },
        { key: 'orderNo', label: 'Order No', render: (val) => React.createElement('div', {style: {maxWidth: '130px', wordWrap: 'break-word'}}, val) },
        { key: 'customer', label: 'Customer' },
        { key: 'country', label: 'Country' },
        { key: 'total', label: 'Total' },
        { key: 'status', label: 'Status' }
      ],
      hideDefaultActions: true,
      actions: (row) => React.createElement('div', {style: {display: 'flex', flexWrap: 'wrap', gap: '5px', maxWidth: '160px'}}, 
        React.createElement('button', {
            style: {backgroundColor: '#0ea5e9', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => alert(`Generating PDF for ${row.invoiceNo}`)
        }, '📄 PDF'),
        React.createElement('button', {
            style: {backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px'},
            onClick: () => alert(`Processing Payment for ${row.invoiceNo}`)
        }, '💳 Payment'),
        React.createElement('button', {
            style: {backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '5px 8px', borderRadius: '3px', cursor: 'pointer', fontSize: '12px', marginTop: '2px'},
            onClick: () => alert(`Viewing Shipping for ${row.invoiceNo}`)
        }, '🚚 Shipping')
      )
    }, 
    data: []
  },
  { 
    path: 'retailer-system/payments', 
    title: 'Retailer System - Payments', 
    subtitle: 'Retailer Payments',
    columns: {
      title: 'RETAILER PAYMENTS LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'invoiceNo', label: 'Invoice No' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'mode', label: 'Mode' },
        { key: 'reference', label: 'Reference' },
        { key: 'amount', label: 'Amount' },
        { key: 'status', label: 'Status', render: (val) => {
            if (val === 'Paid') {
              return React.createElement('span', {style: {backgroundColor: '#22c55e', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', border: '1px solid #166534'}}, val);
            }
            return val;
          } 
        },
        { key: 'date', label: 'Date' }
      ],
      hideDefaultActions: true,
      actions: null
    }, 
    data: []
  },
  { 
    path: 'retailer-system/shipping', 
    title: 'Retailer System - Shipping', 
    subtitle: 'Retailer Shipping',
    columns: {
      title: 'RETAILER SHIPPING LIST',
      headers: [
        { key: 'id', label: '#' },
        { key: 'orderNo', label: 'Order No' },
        { key: 'company', label: 'Company' },
        { key: 'trackingNo', label: 'Tracking No' },
        { key: 'date', label: 'Date' },
        { key: 'status', label: 'Status' }
      ],
      hideDefaultActions: true,
      actions: null
    }, 
    data: []
  },
  { 
    path: 'bulk-fmoq', 
    title: 'MOQ Packages', 
    subtitle: '',
    columns: {
      title: 'PACKAGE LIST',
      addButtonText: 'Add New Package',
      headers: [
        { key: 'id', label: '#' },
        { key: 'package', label: 'Package' },
        { key: 'moq', label: 'MOQ' },
        { key: 'description', label: 'Description' },
        { key: 'feature1', label: 'Feature1' },
        { key: 'feature2', label: 'Feature2' },
        { key: 'feature3', label: 'Feature3' },
        { key: 'feature4', label: 'Feature4' }
      ]
    }, 
    data: []
  },
  { 
    path: 'shipping-list', 
    title: 'Shipping Management', 
    subtitle: 'Shipping',
    columns: {
      title: 'All Shipping Records',
      addButtonText: 'Add New',
      headers: [
        { key: 'id', label: '#' },
        { key: 'icon', label: 'Icon', render: (val) => {
            let Icon = FaBus;
            if(val === 'plane') Icon = FaPlane;
            if(val === 'car') Icon = FaCar;
            return React.createElement(Icon, { style: { color: '#f59e0b', fontSize: '18px' } });
          }
        },
        { key: 'titleCol', label: 'Title' },
        { key: 'deliveryTime', label: 'Delivery Time' },
        { key: 'tagline', label: 'Tagline' },
        { key: 'point1', label: 'Point 1' },
        { key: 'point2', label: 'Point 2' },
        { key: 'point3', label: 'Point 3' },
        { key: 'point4', label: 'Point 4' }
      ]
    }, 
    data: []
  },
  { 
    path: 'index-states', 
    title: 'Show Static',
    breadcrumbParent: 'Static Data',
    formCardTitle: 'ADD STATIC',
    formSubtitle: 'Welcome to Hieil Application',
    columns: {
      title: 'All Static Data',
      addButtonText: 'Add New Static',
      formSubmitText: 'Add Static',
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'staticNumber', label: 'Static Number', formLabel: 'Static Number', placeholder: 'Enter static number' },
        { key: 'title', label: 'Title', formLabel: 'Title', placeholder: 'Enter title' }
      ]
    }, 
    data: []
  },
  { 
    path: 'sub-admin-mgmt', 
    title: 'Sub Admin Management', 
    subtitle: 'Manage roles and permissions',
    columns: {
      title: 'SUB ADMIN LIST',
      icon: 'users',
      addButtonText: 'Add New Sub Admin',
      headers: [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'password', label: 'Password' },
        { key: 'status', label: 'Status' },
        { key: 'permissions', label: 'Permissions', type: 'permissions', render: (val) => Array.isArray(val) ? val.join(', ') : val }
      ]
    }, 
    data: [] 
  },
];

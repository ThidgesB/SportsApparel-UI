import React, { useEffect, useState } from 'react';
import fetchProducts from '../product-page/ProductPageService';
import styles from './MaintenancePage.module.css';

const MaintenancePage = () => {
  const [products, setProducts] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    fetchProducts(setProducts, setApiError);
  }, []);

  return (
    <div>
      {apiError && <p className={styles.errMsg}>Error retrieving products. Please try again.</p>}
      <div className={styles.container}>
        <h2>Maintenance</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Demographic</th>
              <th>Category</th>
              <th>Type</th>
              <th>Release Date</th>
              <th>Primary Color Code</th>
              <th>Secondary Color Code</th>
              <th>Style Number</th>
              <th>Global Product Code</th>
              <th>Brand</th>
              <th>Image Source</th>
              <th>Material</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.demographic}</td>
                <td>{product.category}</td>
                <td>{product.type}</td>
                <td>{product.releaseDate}</td>
                <td>
                  <span
                    className={styles.circle}
                    style={{ backgroundColor: product.primaryColorCode }}
                  />
                  {product.primaryColorCode}
                </td>
                <td>
                  <span
                    className={styles.circle}
                    style={{ backgroundColor: product.secondaryColorCode }}
                  />
                  {product.secondaryColorCode}
                </td>
                <td>{product.styleNumber}</td>
                <td>{product.globalProductCode}</td>
                <td>{product.brand}</td>
                <td>{product.imgSrc}</td>
                <td>{product.material}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  {product.active ? (
                    <span className={styles.active} />
                  ) : (
                    <span className={styles.inactive} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenancePage;

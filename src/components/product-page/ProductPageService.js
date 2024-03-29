import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchProducts
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setProducts sets state for products
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for products if 200 response, else sets state for apiError
 */
const fetchProducts = async (setProducts, setApiError) => {
  await HttpHelper(Constants.PRODUCTS_PATH, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(Constants.API_ERROR);
    })
    .then((products) => {
      const activeProducts = products.filter((product) => product.active);

      setProducts(activeProducts);
    })
    .catch(() => {
      setApiError(true);
    });
};
export default fetchProducts;

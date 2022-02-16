# Shopping Cart

### Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/gMzCl_zemNrL_71YPagyqg/hackershop-shopping-cart.gif)

The app has two separate views/components. The Product Listing Component and Cart Component. The list of products to be displayed is already provided in the app. 

The app implements the following functionalities:

- Clicking on each Add To Cart should add the item to the shopping cart. The listing in the Product Listing component should be updated to show the Increase/Decrease Quantity button and the quantity of the item in cart.
  
- Clicking on each Increase Quantity Button should increase the quantity of the item in cart. 
  
- Clicking on each Decrease Quantity button when:
  
  - Cart Quantity of item is 1:  Should remove the item from the cart, hide the Increase/Decrease Quantity button, and should show the Add to Cart button.
  
  - Cart Quantity Greater than 1: The quantity of the item in the cart should be decreased.
  
- On every quantity update operation, the text for the Quantity of item should be updated both in the Listing component as well as in the corresponding entry in the Cart Component.

- Items should be displayed in the Cart Component in the order they are added to Cart. 
  
- The list of products and the cart object is passed as Prop to the Product Listing Component and Cart Component respectively.
  



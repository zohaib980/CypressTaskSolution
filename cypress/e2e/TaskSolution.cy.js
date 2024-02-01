import { PurchasingMethods } from "../../PageMethods/Purchasing";

const Purchasing_Methods = new PurchasingMethods();

describe("Registeration", () => {
  beforeEach(() => {
    cy.visit("https://demo.nopcommerce.com/");
  });

  it("Validate user is able to Purchase 'Desktop' product using 'Build your own computer", () => {
    Purchasing_Methods.PurchaseDesktop();
  });

  it("Validate user is able to add filter on Shoes 'Red' and able to Purchase product", () => {
    Purchasing_Methods.PurchaseShoes();
  });

  it("Validate user is able to add product into Whishlist", () => {
    Purchasing_Methods.WishlistProduct();
  });
});

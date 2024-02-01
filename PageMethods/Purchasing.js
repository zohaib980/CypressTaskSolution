const PurchasingPageLocators = require("../PageElements/Purchasing.json");

export class PurchasingMethods {
    
  ProductAssertionsFlow() {
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Desktop_Image
    ).click({ force: true });
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Build_Own_Computer_Pic
    ).should("be.visible");
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Build_Own_Computer_Text
    ).should("contain.text", "Build your own computer");
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Description_Text
    ).should("contain.text", "Build it");
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Rating_Stars
    ).should("be.visible");
    cy.get(PurchasingPageLocators.ProductAssertionsLocators.Overview_Hover)
      .invoke(PurchasingPageLocators.ProductAssertionsLocators.Hovering_Purpose) // Trigger hover
      .should("have.css", "color", "rgb(68, 68, 68)");
    cy.get(PurchasingPageLocators.ProductAssertionsLocators.sku_Text).should(
      "contain.text",
      "SKU: COMP_CUST"
    );
    cy.get(
      PurchasingPageLocators.ProductAssertionsLocators.Free_Shipping_Text
    ).should("contain.text", "Free shipping");
  }

  CartFlow() {
    cy.get(PurchasingPageLocators.CartLocators.Processor_Label).should(
      "contain.text",
      "Processor"
    );
    cy.get(PurchasingPageLocators.CartLocators.Processor_Dropdown)
      .select("2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]")
      .should("have.value", "2");
    cy.get(PurchasingPageLocators.CartLocators.RAM_Label).should(
      "contain.text",
      "RAM"
    );
    cy.get(PurchasingPageLocators.CartLocators.RAM_Dropdown)
      .select("8GB [+$60.00]")
      .should("contain.text", "8GB [+$60.00]");
    cy.get(PurchasingPageLocators.CartLocators.HDD_Label).should(
      "contain.text",
      "HDD"
    );
    cy.get(PurchasingPageLocators.CartLocators.HDD_Radio_Button)
      .check()
      .should("be.checked");
    cy.get(PurchasingPageLocators.CartLocators.OS_Label).should(
      "contain.text",
      "OS"
    );
    cy.get(PurchasingPageLocators.CartLocators.OS_Radio_Button)
      .check()
      .should("be.checked");
    cy.get(PurchasingPageLocators.CartLocators.Software_Label).should(
      "contain.text",
      "Software"
    );
    cy.get(PurchasingPageLocators.CartLocators.Software_Option1_Checkbox)
      .check()
      .should("be.checked");
    cy.get(PurchasingPageLocators.CartLocators.Software_Option2_Checkbox)
      .check()
      .should("be.checked");
    cy.get(PurchasingPageLocators.CartLocators.Price_Value).should(
      "contain",
      "$1,495.00"
    );
    cy.get(PurchasingPageLocators.CartLocators.Add_to_Cart_Button)
      .should("be.visible")
      .click();
  }

  CartFlow2() {
    cy.get(
      PurchasingPageLocators.ViewShoppingCartAlert.Shoppingcart_Message
    ).should(
      "contain.text",
      "The product has been added to your shopping cart"
    );
    cy.get(
      PurchasingPageLocators.ViewShoppingCartAlert.View_Shoppingcart_Link
    ).click();
  }

  CheckOutFlow() {
    cy.get(PurchasingPageLocators.ViewShoppingCartAlert.Terms_of_Services)
      .check()
      .should("be.checked");
    cy.get(
      PurchasingPageLocators.ViewShoppingCartAlert.CheckOut_Button
    ).click();
  }

  LoginFlow(email, Password) {
    cy.get(RegisterPageLocators.RegisterPageLocators.Ema_il).type(email);
    cy.get(RegisterPageLocators.RegisterPageLocators.Pass_word).type(Password);
    cy.get(LoginPageLocators.LoginFieldsLocators.RememberMeCheckbox)
      .check()
      .should("be.visible");
    cy.get(LoginPageLocators.LoginFieldsLocators.LoginButton)
      .should("be.visible")
      .click();
  }

  BillingAddressFlow() {
    cy.get(PurchasingPageLocators.BillingAddress.Country_Dropdown)
      .select("Pakistan")
      .should("contain.text", "Pakistan");
    cy.get(PurchasingPageLocators.BillingAddress.City_Dropdown)
      .type("Lahore")
      .should("have.value", "Lahore");
    cy.get(PurchasingPageLocators.BillingAddress.Address_Field)
      .type("DHA Phase 2")
      .should("have.value", "DHA Phase 2");
    cy.get(PurchasingPageLocators.BillingAddress.ZipCode_Field)
      .type("54000")
      .should("have.value", "54000");
    cy.get(PurchasingPageLocators.BillingAddress.PhoneNumber_Field)
      .type("0304-4089614")
      .should("have.value", "0304-4089614");
    cy.get(PurchasingPageLocators.BillingAddress.Billing_Button)
      .should("be.visible")
      .click();
  }

  ShippingMethod() {
    cy.get("#shipping-method-buttons-container > .button-1").click({
      force: true,
    });
  }

  PaymentMethod() {
    cy.get("#payment-method-buttons-container > .button-1").click({
      force: true,
    });
    cy.get("#payment-info-buttons-container > .button-1").click({
      force: true,
    });
    cy.get("#confirm-order-buttons-container > .button-1").click({
      force: true,
    });

    const FinalMSG = "Your order has been successfully processed!";
    cy.wrap(FinalMSG).as("myMessage");
    cy.log("Message:", "@myMessage");
  }

  ShoesFilter() {
    cy.get("img[title='Show products in category Apparel']").click();
    cy.get("li[class='active last'] li:nth-child(1) a:nth-child(1)").click({
      force: true,
    });
    cy.get("#attribute-option-15").check().should("be.checked").wait(4150);
    cy.get(".button-2.product-box-add-to-cart-button").click({
      multiple: true,
    });
    cy.get("#product_attribute_9").select("10");
    cy.wait(4000);

    cy.get("#price-value-25").should("contain", "$27.56");
    cy.get("#add-to-cart-button-25").should("be.visible").click();
  }

  PurchaseDesktop() {
    this.ProductAssertionsFlow();
    this.CartFlow();
    this.CartFlow2();
    this.CheckOutFlow();
    cy.get(".checkout-as-guest-button").click({ force: true });
    this.BillingAddressFlow();
    this.ShippingMethod();
    this.PaymentMethod();
  }

  PurchaseShoes() {
    this.ShoesFilter();
    this.CartFlow2();
    this.CheckOutFlow();
    cy.get(".checkout-as-guest-button").click({ force: true });
    //this.CheckOutFlow()
    this.BillingAddressFlow();
    this.ShippingMethod();
    this.PaymentMethod();
  }

  WishlistProduct() {
    cy.get("#small-searchterms").type("Jewelry");
    cy.get("#small-search-box-form > .button-1").click();
    cy.url().should("include", "https://demo.nopcommerce.com/search?q=Jewelry");
    cy.get("img[title='Show details for Flower Girl Bracelet']")
      .click()
      .wait(4000);
    cy.get("#add-to-wishlist-button-41").click({ force: true });
    cy.get(".content").should(
      "contain.text",
      "The product has been added to your wishlist"
    );
    cy.get("p[class='content'] a").click();
    cy.get("th[class='product-picture']").should("contain.text", "Image");
    cy.get("img[title='Show details for Flower Girl Bracelet']").should(
      "be.visible"
    );
    cy.get("th[class='unit-price']").should("contain.text", "Price");
    cy.get(".product-unit-price").should("have.text", "$360.00");
    cy.get("input[value='1']").should("have.value", "1");
    cy.get(".product-subtotal").should("have.text", "$360.00");
  }
}

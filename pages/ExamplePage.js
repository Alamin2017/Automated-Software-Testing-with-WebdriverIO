module.exports=new class ExamplePage{
    get product_one()
    {
        return $('//img[@alt="Hummingbird printed t-shirt"]')
    }
    get product_size()
    {
        return $('//select[@id="group_1"]')
    }
    get quantity_increase()
    {
        return $("//i[@class='material-icons touchspin-up']")
    }
    get add_to_cart_button()
    {
        return $("//button[@class='btn btn-primary add-to-cart']")
    }
    get proceed_to_checkout_button()
    {
        return $("//a[text()='Proceed to checkout']")
    }
    get Title()
    {
        return $("//h1[normalize-space()='Shopping Cart']")
    }
    get promo_code()
    {
        return $("//a[normalize-space()='Have a promo code?']")
    }
    get promo_text_box()
    {
        return $("//input[@placeholder='Promo code']")
    }
    get promo_add_button()
    {
        return $("//span[normalize-space()='Add']")
    }
    get Mr_checkbox()
    {
        return $("//label[normalize-space()='Mr.']")
    }
    get first_name()
    {
        return $("//input[@name='firstname']")
    }
    get last_name()
    {
        return $("//input[@name='lastname']")
    }
    get email()
    {
        return $("//form[@id='customer-form']//input[@name='email']")
    }
    get terms_conditions()
    {
        return $("//input[@name='psgdpr']")
    }
    get continue_button1()
    {
        return $("//button[@data-link-action='register-new-customer']")
    }



}
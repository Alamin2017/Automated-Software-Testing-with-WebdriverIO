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
}
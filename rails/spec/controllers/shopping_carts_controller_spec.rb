require "rails_helper"

RSpec.describe ShoppingCartsController, :type => :controller do
  describe "POST #create" do
    it "creates the cart" do
      expect {
        post :create, params: { shopping_cart: { items: [{name: "Test1", quantity: 2}, {name: "Test2", quantity: 2}] } }
      }.to change(ShoppingCart,:count).by(1)
    end

    it "creates the items passed in" do
      expect {
        post :create, params: { shopping_cart: { items: [{name: "Test1", quantity: 2}, {name: "Test2", quantity: 2}] } }
      }.to change(Item,:count).by(2)
    end
  end

  describe "PATCH #update" do
    before :each do
      @item = Item.new(quantity: 1, name: 'Test')
      @cart = ShoppingCart.create(items: [@item])
    end
    it "adds new items to the cart" do
      expect {
        patch :update, params: { id: @cart, shopping_cart: { items: [{name: "Test2", quantity: 2}] } }
      }.to change(Item,:count).by(1)
    end

    it "updates existing items with the same name" do
      expect {
        patch :update, params: { id: @cart, shopping_cart: { items: [{name: "Test", quantity: 2}] } }
      }.to change(Item,:count).by(0)
      @item.reload
      expect(@item[:quantity]).to eq(2)
    end
  end

  describe "DELETE #remove_items" do
    before :each do
      @item = Item.new(quantity: 1, name: 'Test')
      @cart = ShoppingCart.create(items: [@item])
    end
    
    it "destroys the cart if only one item in it" do
      expect {
        delete :remove_items, params: { id: @cart, shopping_cart: { items: [{id: @item}] } }
      }.to change(ShoppingCart,:count).by(-1)
    end

    it "destroys the item if more than one item in the cart" do
      @cart.items.create({ quantity: 1, name: 'Test2'})
      expect {
        delete :remove_items, params: { id: @cart, shopping_cart: { items: [{id: @item[:id]}] } }
      }.to change(Item,:count).by(-1)
    end
  end
end